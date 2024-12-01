"use client"

import { Button, Input } from "@repo/ui/components/atoms"
import { useTheme } from "@repo/ui/next-themes"
import { type ButtonProps, type InputProps } from "@repo/ui/nextui"
import { useEffect, useState } from "react"

const backgrounds = ["background", "content1", "content2", "content3", "content4"]
const colors: ButtonProps["color"][] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
]
const buttonVariants: ButtonProps["variant"][] = [
  "solid",
  "bordered",
  "faded",
  "ghost",
  "shadow",
  "flat",
]
const inputVariants: InputProps["variant"][] = ["bordered", "faded", "flat", "underlined"]
const colorScale = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]

export default function Palette(): JSX.Element {
  const { theme: activeTheme, setTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState<string | undefined>(undefined)
  useEffect(() => {
    setSelectedTheme(activeTheme)
  }, [activeTheme])

  return (
    <div className="flex flex-col space-y-8 p-8">
      <div className="sticky top-0 z-50 flex items-center space-x-4">
        {["light", "dark", "system"].map((theme) => {
          return (
            <Button
              className="flex-grow"
              color={selectedTheme === theme ? "primary" : "default"}
              key={theme}
              onPress={() => {
                setTheme(theme)
              }}
            >
              {theme}
            </Button>
          )
        })}
      </div>
      <div className="grid grid-cols-5 gap-8">
        {backgrounds.map((background, index) => {
          const hasShadow = index !== 0
          return (
            <div
              className={`bg-${background} flex flex-col gap-8 rounded-md p-4 ${hasShadow ? "shadow-medium" : ""}`}
              key={background}
            >
              <h1 className="text-3xl font-bold">{background}</h1>
              <div className="border-b-2 border-divider text-xs text-divider">divider</div>
              <div className="border-b-2 border-default text-xs text-default">default</div>
              {colors.map((color) => {
                return (
                  <div className="flex flex-col gap-4" key={color}>
                    <div>
                      <h1 className={`text-${color} text-2xl font-bold`}>{color}</h1>
                      <h2 className={`text-${color} text-lg`}>{color}</h2>
                      <p className={`text-${color} text-base`}>{color}</p>
                      <p className={`text-${color} text-sm`}>{color}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {colorScale.map((scale) => {
                        return (
                          <div
                            className={`border-2 border-${color}-${scale} flex items-center justify-center rounded p-1 text-sm`}
                            key={scale}
                          >
                            {scale}
                          </div>
                        )
                      })}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {buttonVariants.map((variant) => {
                        return (
                          <Button color={color} key={variant} size="sm" variant={variant}>
                            {variant}
                          </Button>
                        )
                      })}
                    </div>
                    <div className="flex flex-col gap-2">
                      {inputVariants.map((variant) => {
                        return (
                          <Input
                            color={color}
                            key={variant}
                            label={variant}
                            size="sm"
                            variant={variant}
                          />
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
