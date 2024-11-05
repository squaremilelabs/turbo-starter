"use server"

import type { z } from "zod"
import type { Item } from "../prisma"
import { prismaEnhanced } from "../prisma-enhanced"
import type { ItemCreateScalarSchema } from "../prisma-enhanced"

export const fetchItems = async (): Promise<Item[]> => {
  const db = await prismaEnhanced()
  const items = await db.item.findMany()
  return items
}

export const createItem = async (input: z.infer<typeof ItemCreateScalarSchema>): Promise<Item> => {
  const db = await prismaEnhanced()
  const item = await db.item.create({ data: input })
  return item
}
