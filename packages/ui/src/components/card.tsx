"use client"

import { extendVariants } from "@nextui-org/system"
import { Card as NextUICard } from "@nextui-org/card"

// To be more explicitly defined once extended
export type ExtendedCard = typeof NextUICard

export const Card = extendVariants(NextUICard, {}) as ExtendedCard
