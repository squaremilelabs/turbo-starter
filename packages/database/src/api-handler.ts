import { NextRequestHandler } from "@zenstackhq/server/next"
import { prismaEnhanced } from "./prisma-enhanced"

export const databaseApiHandler = NextRequestHandler({
  getPrisma: async () => prismaEnhanced(),
  useAppDir: true,
  zodSchemas: true,
})
