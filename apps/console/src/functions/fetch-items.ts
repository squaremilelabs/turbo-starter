"use server"

import type { Item } from "@repo/database/prisma"
import { prismaEnhanced } from "@repo/database/prisma-enhanced"

export const fetchItems = async (): Promise<Item[]> => {
  const db = await prismaEnhanced()
  const items = await db.item.findMany()
  return items
}
