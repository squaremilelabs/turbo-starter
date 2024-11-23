"use server"

import { enhance } from "@zenstackhq/runtime"
import { currentUser } from "@clerk/nextjs/server"
import type { BackendClerkUser } from "./models"
import { prisma } from "./prisma"

type PrismaEnhanced = ReturnType<typeof enhance>

export async function prismaEnhanced(options?: {
  user?: BackendClerkUser
}): Promise<PrismaEnhanced> {
  let user: BackendClerkUser | undefined
  if (options?.user) {
    user = options.user
  } else {
    user = (await currentUser()) as unknown as BackendClerkUser | undefined
  }
  return enhance(prisma, { user })
}
