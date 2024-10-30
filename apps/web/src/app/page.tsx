import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import { Input } from "@repo/ui/input"

export default function Page(): JSX.Element {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1>time to build</h1>
      <Card className="flex flex-col gap-2 p-2" shadow="sm">
        <Button>Button</Button>
        <Input label="Input" variant="bordered" />
      </Card>
    </div>
  )
}
