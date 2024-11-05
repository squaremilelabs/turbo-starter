/* eslint-disable no-console -- allow logs for api handler */

import { NextRequestHandler } from "@zenstackhq/server/next"
import { prismaEnhanced } from "./prisma-enhanced"

export const databaseApiHandler = NextRequestHandler({
  getPrisma: async () => prismaEnhanced(),
  logger: {
    error: console.error,
    info: console.info,
    warn: console.warn,
  },
  useAppDir: true,
})
