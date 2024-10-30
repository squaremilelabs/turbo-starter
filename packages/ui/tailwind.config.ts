import type { Config } from "tailwindcss"
import sharedConfig from "@repo/tailwind-nextui-config"

const config: Pick<Config, "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
}

export default config
