"use client"

import type { NextUIProviderProps } from "@nextui-org/react"
import { NextUIProvider } from "@nextui-org/react"
import type { ThemeProviderProps as NextThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider as NextThemeProvider } from "next-themes"

export function UIProvider({
  children,
  nextUIProviderProps,
  nextThemeProviderProps,
}: {
  children: React.ReactNode
  nextUIProviderProps?: Omit<NextUIProviderProps, "children">
  nextThemeProviderProps?: Omit<NextThemeProviderProps, "children">
}): JSX.Element {
  return (
    <NextUIProvider {...nextUIProviderProps}>
      <NextThemeProvider attribute="class" {...nextThemeProviderProps}>
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  )
}
