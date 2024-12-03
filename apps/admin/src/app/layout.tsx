import "./globals.css"
import "@repo/ui/styles.css"
import type { Metadata } from "next"
import { twMerge } from "tailwind-merge"
import { fontsClassName } from "@repo/ui/fonts"
import Providers from "../providers"

export const metadata: Metadata = {
  title: "Turbo Starter",
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html
      className={twMerge(fontsClassName, "box-border bg-background font-sans text-foreground")}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
