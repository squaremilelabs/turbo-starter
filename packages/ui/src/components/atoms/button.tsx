"use client"

import { Button as NextUIButton, extendVariants } from "@nextui-org/react"

export const Button = extendVariants(NextUIButton, {
  defaultVariants: {
    color: "primary",
  },
})
