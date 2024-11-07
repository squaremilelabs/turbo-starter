import { initEdgeStoreClient } from "@edgestore/server/core"
import { edgeStoreRouter } from "../lib/router"

export const edgeStoreClient = initEdgeStoreClient({
  router: edgeStoreRouter,
})
