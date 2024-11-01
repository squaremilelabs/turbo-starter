"use server"

import type { Item } from "@repo/database/prisma"
import { prismaEnhanced } from "@repo/database/prisma-enhanced"

export const createItem = async (title: string): Promise<Item> => {
  const db = await prismaEnhanced()
  const item = await db.item.create({ data: { title } })
  return item
}
