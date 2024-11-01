"use server"

import { currentUser } from "@clerk/nextjs/server"
import { enhance } from "@zenstackhq/runtime"
import type {
  User as DBUser,
  UserPrivateMetadata as DBUserPrivateMetadata,
  UserPublicMetadata as DBUserPublicMetadata,
  UserUnsafeMetadata as DBUserUnsafeMetadata,
} from "@prisma/client"
import { prisma } from "./prisma"

type BackendClerkUser = NonNullable<Awaited<ReturnType<typeof currentUser>>>

type ExpandedDBUser = DBUser & {
  privateMetadata: NonNullable<DBUserPrivateMetadata> | Record<string, unknown>
  publicMetadata: NonNullable<DBUserPublicMetadata> | Record<string, unknown>
  unsafeMetadata: NonNullable<DBUserUnsafeMetadata> | Record<string, unknown>
}

function transformClerkUser(user: BackendClerkUser | null): ExpandedDBUser | null {
  if (!user) return null
  return {
    id: user.id,
    createdAt: new Date(user.createdAt),
    lastSignInAt: user.lastSignInAt ? new Date(user.lastSignInAt) : null,
    primaryEmailAddress: user.primaryEmailAddress?.emailAddress ?? null,
    primaryPhoneNumber: user.primaryPhoneNumber?.phoneNumber ?? null,
    banned: user.banned,
    privateMetadata: user.privateMetadata,
    publicMetadata: user.publicMetadata,
    unsafeMetadata: user.unsafeMetadata,
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- recommended by Prisma and type is okay to be implied
export async function prismaEnhanced() {
  const clerkUser = await currentUser()
  const transformedUser = transformClerkUser(clerkUser)
  return enhance(prisma, { user: transformedUser ?? undefined })
}
