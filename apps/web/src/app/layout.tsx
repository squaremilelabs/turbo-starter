import { UIProvider } from "@repo/ui/provider"
import "./globals.css"
import "@repo/ui/styles.css"
import type { Metadata } from "next"
import { twMerge } from "tailwind-merge"
import { fontsClassName } from "@repo/ui/fonts"

export const metadata: Metadata = {
  title: "time to build",
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html
      className={twMerge(fontsClassName, "box-border bg-background font-sans text-foreground")}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <UIProvider nextUIProviderProps={{ className: "flex h-screen w-screen flex-col" }}>
          {children}
        </UIProvider>
      </body>
    </html>
  )
}
