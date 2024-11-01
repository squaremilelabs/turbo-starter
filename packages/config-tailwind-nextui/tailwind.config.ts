import type { Config } from "tailwindcss"
import tailwindContainerQueries from "@tailwindcss/container-queries"
import { nextui } from "@nextui-org/theme"
import getNextUIBaseColorsFromTailwindColor from "./lib/getNextUIBaseColorsFromTailwindColor"
import getNextUIColorScaleFromTailwindColor from "./lib/getNextUIColorScaleFromTailwindColor"
import getNextUIColorScaleFromCustom from "./lib/getNextUIColorScaleFromCustom"

const SML_GOLD_COLOR_SCALE = {
  '50': '#faf9ec',
  '100': '#f4f0cd',
  '200': '#ebdf9d',
  '300': '#dfc865',
  '400': '#d4af37',
  '500': '#c59b2d',
  '600': '#aa7a24',
  '700': '#885920',
  '800': '#724921',
  '900': '#623e21',
  '950': '#382010',
}

const SML_BLUE_COLOR_SCALE = {
  '50': '#f3f7fc',
  '100': '#e7f0f7',
  '200': '#c9dfee',
  '300': '#9ac5df',
  '400': '#64a6cc',
  '500': '#418bb6',
  '600': '#2f6f9a',
  '700': '#27597d',
  '800': '#244c68',
  '900': '#234157',
  '950': '#172a3a',
}

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  safelist: [
    {
      pattern:
        /(bg|text|border|divide)-(default|primary|secondary|danger|warning|success|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuschia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern: /(w|max-w|min-w)-(wxs|wsm|wmd|wlg|wxl)/,
    },
  ],
  theme: {
    screens: {
      xs: "288px",
      sm: "576px",
      md: "864px",
      lg: "1152px",
      xl: "1440px",
    },
    containers: {
      wxs: "288px",
      wsm: "576px",
      wmd: "864px",
      wlg: "1152px",
      wxl: "1440px",
    },
    extend: {
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "4px",
        lg: "8px",
      },
      spacing: {
        wxs: "288px",
        wsm: "576px",
        wmd: "864px",
        wlg: "1152px",
        wxl: "1440px",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [
    tailwindContainerQueries,
    nextui({
      addCommonColors: true,
      layout: {
        radius: {
          small: "2px",
          medium: "4px",
          large: "8px",
        },
        borderWidth: {
          small: "1px",
          medium: "1.5px",
          large: "2px",
        },
      },
      themes: {
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
      },
    })
  ],
}

export default config
