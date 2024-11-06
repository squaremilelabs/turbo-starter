import type {
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
} from "@prisma/client/runtime/library"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import type { ZodError } from "zod"

type DatabaseError =
  | PrismaClientKnownRequestError
  | PrismaClientUnknownRequestError
  | PrismaClientValidationError
  | PrismaClientRustPanicError
  | PrismaClientInitializationError

interface ZenstackErrorMetaFieldWithoutZodErrors {
  reason: "ACCESS_POLICY_VIOLATION" | "RESULT_NOT_READABLE"
}

interface ZenstackErrorMetaFieldWithZodErrors {
  reason: "DATA_VALIDATION_VIOLATION"
  zodErrors: ZodError //https://zod.dev/ERROR_HANDLING?id=zoderror
}

interface ParsedDatabaseError {
  userMessage: string // A friendly error message that can be shown to the user
  developerMessage: string // A detailed error message for the developer
  rawError: DatabaseError // The raw error from Prisma, including the additional meta fields inserted by Zenstack (reason, zodErrors)
}

export function parseDatabaseError(error: DatabaseError): ParsedDatabaseError {
  let userMessage = "An unknown database error occurred."
  let developerMessage = `An unhandled database error occurred. Please consider updating the database parser to handle this error.\nError Message: ${error.message}`

  if (error instanceof PrismaClientKnownRequestError) {
    /** Handle Zenstack / Zod Errors */
    if (error.code === "P2004" && error.meta) {
      const meta = error.meta as unknown as
        | ZenstackErrorMetaFieldWithoutZodErrors
        | ZenstackErrorMetaFieldWithZodErrors

      if (meta.reason === "ACCESS_POLICY_VIOLATION") {
        userMessage = "You do not have permission to perform this action."
        developerMessage = "Zenstack access policy violation error occurred."
      }

      if (meta.reason === "RESULT_NOT_READABLE") {
        userMessage = "You do not have permission to perform this action."
        developerMessage =
          "Zenstack result not readable error occurred. This means the write operation succeeded, but the result was not readable based on access policies."
      }

      if (meta.reason === "DATA_VALIDATION_VIOLATION") {
        const formattedZodErrors: string | undefined = meta.zodErrors.format()._errors.join("\n")
        userMessage = `The data you provided is invalid${
          formattedZodErrors ? `:\n${formattedZodErrors}` : ""
        }`
        developerMessage = `Zenstack data validation error occurred:\n${JSON.stringify(meta.zodErrors, null, 2)}`
      }
    }
  }

  return {
    userMessage,
    developerMessage,
    rawError: error,
  }
}
