import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app"
import { edgeStoreRouter } from "../lib/router"

export const edgestoreApiHandler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
})
