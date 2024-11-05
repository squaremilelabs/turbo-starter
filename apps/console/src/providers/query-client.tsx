"use client"

import { useState } from "react"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"
import { QueryClientProvider as BaseQueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Provider as DatabaseHooksProvider } from "@repo/database/hooks"

export default function QueryClientProvider({
  children,
  showDevTools,
}: {
  children: React.ReactNode
  showDevTools?: boolean
}): JSX.Element {
  const [client] = useState(new QueryClient())

  return (
    <BaseQueryClientProvider client={client}>
      <DatabaseHooksProvider value={{ endpoint: "/api/db" }}>
        <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      </DatabaseHooksProvider>
      {showDevTools ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    </BaseQueryClientProvider>
  )
}
