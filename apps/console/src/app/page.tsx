import { Button, Card, CardBody, CardHeader, Input } from "@repo/ui/components/nextui"

export default function Page(): JSX.Element {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Card shadow="sm">
        <CardHeader>
          <h1 className="text-xl font-bold">Turbo Starter</h1>
        </CardHeader>
        <CardBody className="gap-2">
          <Button color="primary">Button</Button>
          <Input color="primary" label="Input" variant="bordered" />
        </CardBody>
      </Card>
    </div>
  )
}
