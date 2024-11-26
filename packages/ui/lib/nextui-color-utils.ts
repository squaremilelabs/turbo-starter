import type { ColorScale, BaseColors } from "@nextui-org/theme"
import * as twDefaultColors from "tailwindcss/colors"

type NextUIBaseColors = Partial<BaseColors>
type DefaultColors = typeof twDefaultColors
type TailwindDefaultColorKey = keyof DefaultColors
type TailwindColorScale = DefaultColors[TailwindDefaultColorKey]

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
  "950": string
}

export function getNextUIBaseColorsFromCustomColor(
  customScale: CustomScale,
  options: { mode: "light" | "dark" }
): NextUIBaseColors {
  // LIGHT MODE
  if (options.mode === "light") {
    return {
      background: customScale["50"],
      foreground: customScale["950"],
      divider: customScale["400"],
      focus: customScale["800"],
      content1: customScale["200"],
      content2: customScale["200"],
      content3: customScale["300"],
      content4: customScale["300"],
    }
  }
  // DARK MODE
  return {
    background: customScale["800"],
    foreground: customScale["50"],
    divider: customScale["400"],
    focus: customScale["100"],
    content1: customScale["700"],
    content2: customScale["700"],
    content3: customScale["600"],
    content4: customScale["600"],
  }
}

export function getNextUIColorScaleFromCustom(
  customScale: CustomScale,
  options: { mode: "light" | "dark" }
): ColorScale {
  if (options.mode === "light") {
    return {
      50: customScale["50"],
      100: customScale["100"],
      200: customScale["200"],
      300: customScale["300"],
      400: customScale["400"],
      500: customScale["500"],
      600: customScale["600"],
      700: customScale["700"],
      800: customScale["800"],
      900: customScale["900"],
      DEFAULT: customScale["500"],
    }
  }
  return {
    50: customScale["950"],
    100: customScale["900"],
    200: customScale["800"],
    300: customScale["700"],
    400: customScale["600"],
    500: customScale["500"],
    600: customScale["400"],
    700: customScale["300"],
    800: customScale["200"],
    900: customScale["100"],
    DEFAULT: customScale["500"],
  }
}

export function getNextUIBaseColorsFromTailwindColor(
  twColorKey: TailwindDefaultColorKey,
  options: { mode: "light" | "dark" }
): NextUIBaseColors {
  // eslint-disable-next-line import/namespace -- imputed
  const tailwindColorScale: TailwindColorScale = twDefaultColors[twColorKey]

  if (options.mode === "light") {
    return {
      background: tailwindColorScale["50"],
      foreground: tailwindColorScale["950"],
      divider: tailwindColorScale["400"],
      focus: tailwindColorScale["800"],
      content1: tailwindColorScale["200"],
      content2: tailwindColorScale["200"],
      content3: tailwindColorScale["300"],
      content4: tailwindColorScale["300"],
    }
  }
  return {
    background: tailwindColorScale["800"],
    foreground: tailwindColorScale["50"],
    divider: tailwindColorScale["400"],
    focus: tailwindColorScale["100"],
    content1: tailwindColorScale["700"],
    content2: tailwindColorScale["700"],
    content3: tailwindColorScale["600"],
    content4: tailwindColorScale["600"],
  }
}

export function getNextUIColorScaleFromTailwindColor(
  twColorKey: TailwindDefaultColorKey,
  options: { mode: "light" | "dark" }
): ColorScale {
  // eslint-disable-next-line import/namespace -- imputed
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
