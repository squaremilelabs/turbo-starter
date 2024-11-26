"use client"

import { Input as NextUIInput, extendVariants } from "@nextui-org/react"

export const Input = extendVariants(NextUIInput, {
  defaultVariants: {
    color: "primary",
  },
})
