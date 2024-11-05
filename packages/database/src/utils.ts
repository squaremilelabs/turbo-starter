import type { QueryError } from "@zenstackhq/tanstack-query/runtime-v5"

export function parseDatabaseQueryError(queryError: QueryError): {
  developerMessage: string
  userMessage: string
} {
  if (queryError.info) {
    const info = queryError.info as { message: string }
    return {
      developerMessage: info.message,
      userMessage: info.message,
    }
  }
  return {
    developerMessage: queryError.message,
    userMessage: queryError.message,
  }
}
