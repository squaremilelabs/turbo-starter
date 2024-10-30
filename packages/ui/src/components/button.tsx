"use client"

import { extendVariants } from "@nextui-org/system"
import { Button as NextUIButton, ButtonGroup as NextUIButtonGroup } from "@nextui-org/button"

// To be more explicitly defined once extended
export type ExtendedButton = typeof NextUIButton

export const Button = extendVariants(NextUIButton, {
  defaultVariants: {
    color: "primary",
  },
}) as ExtendedButton

// To be more explicitly defined once extended
export type ExtendedButtonGroup = typeof NextUIButtonGroup

export const ButtonGroup = extendVariants(NextUIButtonGroup, {}) as ExtendedButtonGroup
