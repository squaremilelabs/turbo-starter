"use client"

import { extendVariants } from "@nextui-org/system"
import { Input as NextUIInput } from "@nextui-org/input"

// To be more explicitly defined once extended
export type ExtendedInput = typeof NextUIInput

export const Input = extendVariants(NextUIInput, {}) as ExtendedInput
