"use server"

import { currentUser } from "@clerk/nextjs/server"
import { enhance } from "@zenstackhq/runtime"
import type {
  User as DBUser,
  UserPrivateMetadata as DBUserPrivateMetadata,
  UserPublicMetadata as DBUserPublicMetadata,
  UserUnsafeMetadata as DBUserUnsafeMetadata,
} from "@prisma/client"
import type { InternalArgs } from "@prisma/client/runtime/library"
import { prisma } from "./prisma"

type BackendClerkUser = NonNullable<Awaited<ReturnType<typeof currentUser>>>

type ExpandedDBUser = DBUser & {
  private_metadata: NonNullable<DBUserPrivateMetadata> | Record<string, unknown>
  public_metadata: NonNullable<DBUserPublicMetadata> | Record<string, unknown>
  unsafe_metadata: NonNullable<DBUserUnsafeMetadata> | Record<string, unknown>
}

function transformClerkUser(user: BackendClerkUser | null): ExpandedDBUser | null {
  if (!user) return null
  return {
    id: user.id,
    created_at: new Date(user.createdAt),
    last_sign_in_at: user.lastSignInAt ? new Date(user.lastSignInAt) : null,
    primary_email: user.primaryEmailAddress?.emailAddress ?? null,
    primary_phone: user.primaryPhoneNumber?.phoneNumber ?? null,
    banned: user.banned,
    private_metadata: user.privateMetadata,
    public_metadata: user.publicMetadata,
    unsafe_metadata: user.unsafeMetadata,
  }
}

type PrismaEnhanced = ReturnType<typeof enhance<InternalArgs>>

export async function prismaEnhanced(): Promise<PrismaEnhanced> {
  const clerkUser = await currentUser()
  const transformedUser = transformClerkUser(clerkUser)
  return enhance(prisma, { user: transformedUser ?? undefined })
}
