import type { NextUIPluginConfig } from "@nextui-org/theme"
import {
  getNextUIBaseColorsFromTailwindColor,
  getNextUIColorScaleFromCustom,
  getNextUIColorScaleFromTailwindColor,
} from "../../lib/nextui-color-utils"

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

const themes: NextUIPluginConfig["themes"] = {
  light: {
    extend: "light",
    colors: {
      ...getNextUIBaseColorsFromTailwindColor("neutral", { mode: "light" }),
      default: getNextUIColorScaleFromTailwindColor("neutral", { mode: "light" }),
      primary: getNextUIColorScaleFromCustom(SML_GOLD_COLOR_SCALE, { mode: "light" }),
      secondary: getNextUIColorScaleFromCustom(SML_BLUE_COLOR_SCALE, { mode: "light" }),
      success: getNextUIColorScaleFromTailwindColor("emerald", { mode: "light" }),
      danger: getNextUIColorScaleFromTailwindColor("red", { mode: "light" }),
      warning: getNextUIColorScaleFromTailwindColor("yellow", { mode: "light" }),
    },
  },
  dark: {
    extend: "dark",
    colors: {
      ...getNextUIBaseColorsFromTailwindColor("neutral", { mode: "dark" }),
      default: getNextUIColorScaleFromTailwindColor("neutral", { mode: "dark" }),
      primary: getNextUIColorScaleFromCustom(SML_GOLD_COLOR_SCALE, { mode: "dark" }),
      secondary: getNextUIColorScaleFromCustom(SML_BLUE_COLOR_SCALE, { mode: "dark" }),
      success: getNextUIColorScaleFromTailwindColor("emerald", { mode: "dark" }),
      danger: getNextUIColorScaleFromTailwindColor("red", { mode: "dark" }),
      warning: getNextUIColorScaleFromTailwindColor("yellow", { mode: "dark" }),
    },
  },
}

export default themes
