import "./globals.css"
import "@repo/ui/styles.css"
import { UIProvider } from "@repo/ui/provider"
import type { Metadata } from "next"
import { twMerge } from "tailwind-merge"
import { fontsClassName } from "@repo/ui/fonts"
import { ClerkProvider } from "@repo/auth/clerk-nextjs-sdk"
import Providers from "../client-providers"

export const metadata: Metadata = {
  title: "Turbo Starter",
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ClerkProvider>
      <html
        className={twMerge(fontsClassName, "box-border bg-background font-sans text-foreground")}
        lang="en"
        suppressHydrationWarning
      >
        <body>
          <Providers>
            <UIProvider nextUIProviderProps={{ className: "flex h-screen w-screen flex-col" }}>
              {children}
            </UIProvider>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
