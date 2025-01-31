"use client"

import type { HeroUIProviderProps } from "@heroui/react"
import { HeroUIProvider } from "@heroui/react"
import type { ThemeProviderProps as NextThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider as NextThemeProvider } from "next-themes"

export function UIProvider({
  children,
  heroUIProviderProps,
  nextThemeProviderProps,
}: {
  children: React.ReactNode
  heroUIProviderProps?: Omit<HeroUIProviderProps, "children">
  nextThemeProviderProps?: Omit<NextThemeProviderProps, "children">
}): JSX.Element {
  return (
    <HeroUIProvider {...heroUIProviderProps}>
      <NextThemeProvider attribute="class" {...nextThemeProviderProps}>
        {children}
      </NextThemeProvider>
    </HeroUIProvider>
  )
}
