"use client"

import { useState } from "react"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"
import { QueryClientProvider as BaseQueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

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
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      {showDevTools ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    </BaseQueryClientProvider>
  )
}
