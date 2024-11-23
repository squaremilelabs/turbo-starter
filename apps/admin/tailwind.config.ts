import type { Config } from "tailwindcss"
import sharedConfig from "@repo/tailwind-nextui-config"

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
}

export default config
