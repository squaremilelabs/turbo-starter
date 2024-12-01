"use client"

import { QueryClientProvider } from "@repo/web-core/tanstack-react-query/provider"
import { Provider as DatabaseHooksProvider } from "@repo/database/hooks"
import { EdgeStoreProvider } from "@repo/storage/react"

export default function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <QueryClientProvider>
      <DatabaseHooksProvider value={{ endpoint: "/api/db" }}>
        <EdgeStoreProvider basePath="/api/storage">{children}</EdgeStoreProvider>
      </DatabaseHooksProvider>
    </QueryClientProvider>
  )
}
