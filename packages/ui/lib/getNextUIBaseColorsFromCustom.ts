import { BaseColors } from "@nextui-org/theme"

type NextUIBaseColors = Partial<BaseColors>

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

export default function getNextUIBaseColorsFromTailwindColor(
  customScale: CustomScale,
  options: { mode: "light" | "dark" }
): NextUIBaseColors {
  if (options.mode === "light") {
    return {
      background: customScale["50"],
      foreground: customScale["950"],
      divider: customScale["400"],
      focus: customScale["800"],
      content1: customScale["100"],
      content2: customScale["200"],
      content3: customScale["300"],
      content4: customScale["400"],
    }
  }

  if (options.mode === "dark") {
    return {
      background: customScale["800"],
      foreground: customScale["50"],
      divider: customScale["400"],
      focus: customScale["100"],
      content1: customScale["700"],
      content2: customScale["600"],
      content3: customScale["500"],
      content4: customScale["500"],
    }
  }

  return {}
}
