"use client"

import { Button, Input } from "@repo/ui/components/atoms"
import { useTheme } from "@repo/ui/next-themes"
import { Divider, type ButtonProps, type InputProps } from "@repo/ui/nextui"

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
  "light",
]
const inputVariants: InputProps["variant"][] = ["bordered", "faded", "flat", "underlined"]

export default function Palette(): JSX.Element {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className="flex flex-col space-y-8 p-8">
      <Button
        color="default"
        onPress={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark")
        }}
      >
        toggle theme
      </Button>
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
              <Divider />
              <div className="border-b-2 border-default text-xs text-default">default</div>
              <div className="divide-y-2">
                <div className="text-xs">foreground</div>
                <div className="text-xs">divider</div>
                <div className="text-xs">foreground</div>
              </div>
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
