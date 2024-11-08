"use client"

import { createEdgeStoreProvider } from "@edgestore/react"
import type { EdgeStoreRouter } from "../lib/router"

export { getDownloadUrl, formatFileSize } from "@edgestore/react/utils"

const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider<EdgeStoreRouter>()
export { EdgeStoreProvider, useEdgeStore }
