import type { Config } from "tailwindcss"
import tailwindContainerQueries from "@tailwindcss/container-queries"
import { nextui } from "@nextui-org/theme"
import getNextUIBaseColorsFromTailwindColor from "./lib/getNextUIBaseColorsFromTailwindColor"
import getNextUIColorScaleFromTailwindColor from "./lib/getNextUIColorScaleFromTailwindColor"

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
            ...getNextUIBaseColorsFromTailwindColor("slate", { mode: "light" }),
            default: getNextUIColorScaleFromTailwindColor("slate", { mode: "light" }),
            primary: getNextUIColorScaleFromTailwindColor("purple", { mode: "light" }),
            secondary: getNextUIColorScaleFromTailwindColor("blue", { mode: "light" }),
            success: getNextUIColorScaleFromTailwindColor("emerald", { mode: "light" }),
            danger: getNextUIColorScaleFromTailwindColor("red", { mode: "light" }),
            warning: getNextUIColorScaleFromTailwindColor("yellow", { mode: "light" }),
          },
        },
        dark: {
          extend: "dark",
          colors: {
            ...getNextUIBaseColorsFromTailwindColor("slate", { mode: "dark" }),
            default: getNextUIColorScaleFromTailwindColor("slate", { mode: "dark" }),
            primary: getNextUIColorScaleFromTailwindColor("purple", { mode: "dark" }),
            secondary: getNextUIColorScaleFromTailwindColor("blue", { mode: "dark" }),
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
