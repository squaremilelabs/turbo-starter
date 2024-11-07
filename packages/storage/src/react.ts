"use client"

import { createEdgeStoreProvider } from "@edgestore/react"
import type { EdgeStoreRouter } from "../lib/router"

export const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider<EdgeStoreRouter>()
