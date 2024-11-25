import { ColorScale } from "@nextui-org/theme"

type NextUIColorScale = ColorScale

type CustomScale = {
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

export default function getNextUIColorScaleFromCustom(
  customScale: CustomScale,
  options: { mode: "light" | "dark" }
): NextUIColorScale {
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
  if (options.mode === "dark") {
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
  return {}
}
