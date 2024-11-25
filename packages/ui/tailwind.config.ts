import type { Config } from "tailwindcss"
import sharedConfig from "./src/tailwind-config"

const config: Pick<Config, "presets" | "content"> = {
  content: ["./src/**/*.tsx", "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
}

export default config
