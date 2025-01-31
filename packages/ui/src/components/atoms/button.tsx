"use client"

import { Button as HeroUIButton, extendVariants } from "@heroui/react"

export const Button = extendVariants(HeroUIButton, {
  defaultVariants: {
    color: "primary",
  },
})
