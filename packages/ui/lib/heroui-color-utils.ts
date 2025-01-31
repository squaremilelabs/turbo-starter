import type { ColorScale, BaseColors } from "@heroui/theme"
import * as twDefaultColors from "tailwindcss/colors"

type HeroUIBaseColors = Partial<BaseColors>
type DefaultColors = typeof twDefaultColors
type TailwindDefaultColorKey = keyof DefaultColors

interface CustomScale {
  "50": string
  "100": string
  "200": string
  "300": string
  "400": string
  "500": string
  "600": string
  "700": string
  "800": string
  "900": string
  "950": string | undefined
}

interface InputWithTwColorKey {
  twColorKey: TailwindDefaultColorKey
  mode: "light" | "dark"
}

interface InputWithCustomColor {
  customColor: CustomScale
  mode: "light" | "dark"
}

type Input = InputWithTwColorKey | InputWithCustomColor

export function getSemanticColorScale(input: Input): ColorScale {
  if ("twColorKey" in input) {
    // eslint-disable-next-line import/namespace -- tailwind nuances
    const colorScale = twDefaultColors[input.twColorKey] as CustomScale
    return mapColorScale(colorScale, input.mode)
  }
  return mapColorScale(input.customColor, input.mode)
}

export function getBaseAndDefaultColors(input: Input): {
  baseColors: HeroUIBaseColors
  defaultColors: ColorScale
} {
  if ("twColorKey" in input) {
    // eslint-disable-next-line import/namespace -- tailwind nuances
    const colorScale = twDefaultColors[input.twColorKey] as CustomScale
    return mapColorScaleToBaseAndDefaultColors(colorScale, input.mode)
  }
  return mapColorScaleToBaseAndDefaultColors(input.customColor, input.mode)
}

export function mapColorScale(colorScale: CustomScale, mode: "light" | "dark"): ColorScale {
  if (mode === "light") {
    return {
      ...colorScale,
      DEFAULT: colorScale["500"],
      foreground: colorScale["50"],
    }
  }
  return {
    50: colorScale["950"] ?? colorScale["900"],
    100: colorScale["900"],
    200: colorScale["800"],
    300: colorScale["700"],
    400: colorScale["600"],
    500: colorScale["500"],
    600: colorScale["400"],
    700: colorScale["300"],
    800: colorScale["200"],
    900: colorScale["100"],
    DEFAULT: colorScale["500"],
    foreground: colorScale["50"],
  }
}

export function mapColorScaleToBaseAndDefaultColors(
  colorScale: CustomScale,
  mode: "light" | "dark"
): {
  baseColors: HeroUIBaseColors
  defaultColors: ColorScale
} {
  let baseColors: HeroUIBaseColors = {}
  let defaultColors: ColorScale = {}

  if (mode === "light") {
    baseColors = {
      background: colorScale["50"],
      foreground: colorScale["950"] ?? colorScale["900"],
      divider: colorScale["400"],
      content1: colorScale["200"],
      content2: colorScale["200"],
      content3: colorScale["300"],
      content4: colorScale["300"],
      focus: colorScale["800"],
    }

    defaultColors = {
      50: colorScale["100"],
      100: colorScale["100"],
      200: colorScale["400"],
      300: colorScale["400"],
      400: colorScale["500"],
      500: colorScale["500"],
      600: colorScale["600"],
      700: colorScale["600"],
      800: colorScale["800"],
      900: colorScale["800"],
      DEFAULT: colorScale["400"],
    }
  } else {
    baseColors = {
      background: colorScale["950"] ?? colorScale["900"],
      foreground: colorScale["50"],
      divider: colorScale["500"],
      content1: colorScale["900"],
      content2: colorScale["900"],
      content3: colorScale["800"],
      content4: colorScale["800"],
      focus: colorScale["100"],
    }

    defaultColors = {
      50: colorScale["700"],
      100: colorScale["700"],
      200: colorScale["500"],
      300: colorScale["500"],
      400: colorScale["500"],
      500: colorScale["500"],
      600: colorScale["400"],
      700: colorScale["400"],
      800: colorScale["200"],
      900: colorScale["200"],
      DEFAULT: colorScale["600"],
    }
  }

  return { baseColors, defaultColors }
}
