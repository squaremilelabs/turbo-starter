import { prismaEnhanced } from "@repo/database/prisma-enhanced"
import { NextRequestHandler } from "@zenstackhq/server/next"

const handler = NextRequestHandler({ getPrisma: async () => prismaEnhanced(), useAppDir: true })

export { handler as DELETE, handler as GET, handler as PATCH, handler as POST, handler as PUT }
