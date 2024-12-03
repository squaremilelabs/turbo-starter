"use client"

import { QueryClientProvider } from "@repo/web-core/tanstack-react-query/provider"
import { Provider as DatabaseHooksProvider } from "@repo/database/hooks"
import { EdgeStoreProvider } from "@repo/storage/react"
import { ClerkProvider } from "@repo/auth/clerk-nextjs-sdk"
import { UIProvider } from "@repo/ui/provider"

export default function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ClerkProvider>
      <QueryClientProvider>
        <DatabaseHooksProvider value={{ endpoint: "/api/db" }}>
          <EdgeStoreProvider basePath="/api/storage">
            <UIProvider
              nextUIProviderProps={{ className: "flex h-screen w-screen flex-col overflow-auto" }}
            >
              {children}
            </UIProvider>
          </EdgeStoreProvider>
        </DatabaseHooksProvider>
      </QueryClientProvider>
    </ClerkProvider>
  )
}
