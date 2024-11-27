import type { NextUIPluginConfig } from "@nextui-org/theme"
import { getBaseAndDefaultColors, getSemanticColorScale } from "../../lib/nextui-color-utils"

const SML_GOLD_COLOR_SCALE = {
  "50": "#faf9ec",
  "100": "#f4f0cd",
  "200": "#ebdf9d",
  "300": "#dfc865",
  "400": "#d4af37",
  "500": "#c59b2d",
  "600": "#aa7a24",
  "700": "#885920",
  "800": "#724921",
  "900": "#623e21",
  "950": "#382010",
}

const SML_BLUE_COLOR_SCALE = {
  "50": "#f3f7fc",
  "100": "#e7f0f7",
  "200": "#c9dfee",
  "300": "#9ac5df",
  "400": "#64a6cc",
  "500": "#418bb6",
  "600": "#2f6f9a",
  "700": "#27597d",
  "800": "#244c68",
  "900": "#234157",
  "950": "#172a3a",
}

const lightBaseColors = getBaseAndDefaultColors({ twColorKey: "slate", mode: "light" })
const darkBaseColors = getBaseAndDefaultColors({ twColorKey: "slate", mode: "dark" })

const themes: NextUIPluginConfig["themes"] = {
  light: {
    extend: "light",
    colors: {
      ...lightBaseColors.baseColors,
      default: lightBaseColors.defaultColors,
      primary: getSemanticColorScale({ customColor: SML_GOLD_COLOR_SCALE, mode: "light" }),
      secondary: getSemanticColorScale({ customColor: SML_BLUE_COLOR_SCALE, mode: "light" }),
      success: getSemanticColorScale({ twColorKey: "emerald", mode: "light" }),
      danger: getSemanticColorScale({ twColorKey: "red", mode: "light" }),
      warning: getSemanticColorScale({ twColorKey: "yellow", mode: "light" }),
    },
  },
  dark: {
    extend: "dark",
    colors: {
      ...darkBaseColors.baseColors,
      default: darkBaseColors.defaultColors,
      primary: getSemanticColorScale({ customColor: SML_GOLD_COLOR_SCALE, mode: "dark" }),
      secondary: getSemanticColorScale({ customColor: SML_BLUE_COLOR_SCALE, mode: "dark" }),
      success: getSemanticColorScale({ twColorKey: "emerald", mode: "dark" }),
      danger: getSemanticColorScale({ twColorKey: "red", mode: "dark" }),
      warning: getSemanticColorScale({ twColorKey: "yellow", mode: "dark" }),
    },
  },
}

export default themes
