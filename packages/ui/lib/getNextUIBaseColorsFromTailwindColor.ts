import { BaseColors } from "@nextui-org/theme"
import * as twDefaultColors from "tailwindcss/colors"
import { DefaultColors } from "tailwindcss/types/generated/colors"

type TailwindDefaultColorKey = keyof DefaultColors
type TailwindColorScale = DefaultColors[TailwindDefaultColorKey]
type NextUIBaseColors = Partial<BaseColors>

export default function getNextUIBaseColorsFromTailwindColor(
  twColorKey: TailwindDefaultColorKey,
  options: { mode: "light" | "dark" }
): NextUIBaseColors {
  const tailwindColorScale: TailwindColorScale = twDefaultColors[twColorKey]

  if (options.mode === "light") {
    return {
      background: tailwindColorScale["50"],
      foreground: tailwindColorScale["950"],
      divider: tailwindColorScale["400"],
      focus: tailwindColorScale["800"],
      content1: tailwindColorScale["100"],
      content2: tailwindColorScale["200"],
      content3: tailwindColorScale["300"],
      content4: tailwindColorScale["400"],
    }
  }

  if (options.mode === "dark") {
    return {
      background: tailwindColorScale["800"],
      foreground: tailwindColorScale["50"],
      divider: tailwindColorScale["400"],
      focus: tailwindColorScale["100"],
      content1: tailwindColorScale["700"],
      content2: tailwindColorScale["600"],
      content3: tailwindColorScale["500"],
      content4: tailwindColorScale["500"],
    }
  }

  return {}
}
