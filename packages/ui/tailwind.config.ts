import type { Config } from "tailwindcss"
import sharedConfig from "@repo/tailwind-nextui-config"

const config: Pick<Config, "presets" | "content"> = {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|input).js",
  ],
  presets: [sharedConfig],
}

export default config
