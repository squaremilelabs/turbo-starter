"use client"

import { Input as HeroUIInput, extendVariants } from "@heroui/react"

export const Input = extendVariants(HeroUIInput, {
  defaultVariants: {
    variant: "bordered",
  },
})
