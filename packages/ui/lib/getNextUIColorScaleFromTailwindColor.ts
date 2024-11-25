import { ColorScale } from "@nextui-org/theme"
import * as twDefaultColors from "tailwindcss/colors"
import { DefaultColors } from "tailwindcss/types/generated/colors"

type TailwindDefaultColorKey = keyof DefaultColors
type TailwindColorScale = DefaultColors[TailwindDefaultColorKey]
type NextUIColorScale = ColorScale

export default function getNextUIColorScaleFromTailwindColor(
  twColorKey: TailwindDefaultColorKey,
  options: { mode: "light" | "dark" }
): NextUIColorScale {
  const tailwindColorScale: TailwindColorScale = twDefaultColors[twColorKey]

  if (options.mode === "light") {
    return {
      50: tailwindColorScale["50"],
      100: tailwindColorScale["100"],
      200: tailwindColorScale["200"],
      300: tailwindColorScale["300"],
      400: tailwindColorScale["400"],
      500: tailwindColorScale["500"],
      600: tailwindColorScale["600"],
      700: tailwindColorScale["700"],
      800: tailwindColorScale["800"],
      900: tailwindColorScale["900"],
      DEFAULT: tailwindColorScale["500"],
    }
  }

  if (options.mode === "dark") {
    return {
      50: tailwindColorScale["950"],
      100: tailwindColorScale["900"],
      200: tailwindColorScale["800"],
      300: tailwindColorScale["700"],
      400: tailwindColorScale["600"],
      500: tailwindColorScale["500"],
      600: tailwindColorScale["400"],
      700: tailwindColorScale["300"],
      800: tailwindColorScale["200"],
      900: tailwindColorScale["100"],
      DEFAULT: tailwindColorScale["500"],
    }
  }

  return {}
}
