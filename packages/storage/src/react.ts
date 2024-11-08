"use client"

import { createEdgeStoreProvider } from "@edgestore/react"
import type { EdgeStoreRouter } from "../lib/router"

export { getDownloadUrl, formatFileSize } from "@edgestore/react/utils"
export const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider<EdgeStoreRouter>()
