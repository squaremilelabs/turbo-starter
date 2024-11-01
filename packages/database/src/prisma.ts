import { PrismaClient } from "@prisma/client"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- recommended by Prisma
const prismaGlobal = () => new PrismaClient()

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaGlobal>
} & typeof global

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- recommended by Prisma
export const prisma = globalThis.prismaGlobal ?? prismaGlobal()

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma
}

export * from "@prisma/client"
