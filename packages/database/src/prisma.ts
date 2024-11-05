import { PrismaClient } from "@prisma/client"

const prismaGlobal = (): PrismaClient => new PrismaClient()

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaGlobal>
} & typeof global

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- additional fallback to ensure prisma is defined (recommended by Prisma)
export const prisma = globalThis.prismaGlobal ?? prismaGlobal()

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma
}

export * from "@prisma/client"
