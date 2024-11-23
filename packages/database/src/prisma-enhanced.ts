"use server"

import type { auth } from "@zenstackhq/runtime"
import { enhance } from "@zenstackhq/runtime"
import { currentUser } from "@clerk/nextjs/server"
import type { ClerkUser } from "./models"
import { prisma } from "./prisma"

type PrismaEnhanced = ReturnType<typeof enhance>

export async function prismaEnhanced(options?: { user?: ClerkUser }): Promise<PrismaEnhanced> {
  let user: auth.ClerkUser | undefined
  if (options?.user) {
    user = options.user as auth.ClerkUser
  } else {
    user = (await currentUser()) as unknown as auth.ClerkUser
  }
  return enhance(prisma, { user })
}
