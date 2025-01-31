/* eslint-disable prefer-named-capture-group -- regex rules are specific for tailwind */

import type { Config } from "tailwindcss"
import { heroui } from "@heroui/theme"
import tailwindContainerQueries from "@tailwindcss/container-queries"
import themes from "./color-theme"

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  safelist: [
    {
      pattern:
        /(bg|text|border|divide)-(background|content1|content2|content3|content4|default|primary|secondary|danger|warning|success|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuschia|pink|rose)(-(50|100|200|300|400|500|600|700|800|900|950))?/,
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
    heroui({
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
      themes,
    }),
  ],
}

export default config
