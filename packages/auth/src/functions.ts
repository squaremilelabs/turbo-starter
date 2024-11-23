"use server"

import type { User } from "@clerk/nextjs/server"
import { currentUser } from "@clerk/nextjs/server"

export async function getCurrentUser(): Promise<User | null> {
  const user = await currentUser()
  return user
}
