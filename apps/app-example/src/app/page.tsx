"use client"
import { Button, Card, CardBody, Input } from "@repo/ui/components/nextui"
import { useState } from "react"
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"
import { useCreateItem, useFindManyItem } from "@repo/database/hooks"

export default function Page(): JSX.Element {
  const itemsQuery = useFindManyItem()

  const [input, setInput] = useState("")
  const createItemMutation = useCreateItem()
  const onCreateItem = (): void => {
    createItemMutation.mutate({ data: { title: input } })
    setInput("")
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <SignedOut>
        <SignInButton>
          <Button color="primary">Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
          <Button color="default" variant="bordered">
            Sign out
          </Button>
        </SignOutButton>
      </SignedIn>
      <Card
        as="form"
        classNames={{ base: "w-[500px]" }}
        onSubmit={(e) => {
          e.preventDefault()
          onCreateItem()
        }}
        shadow="sm"
      >
        <CardBody className="gap-2">
          <Input
            color="primary"
            label="New Item"
            onValueChange={setInput}
            value={input}
            variant="bordered"
          />
          <Button
            color="primary"
            isDisabled={!input}
            isLoading={createItemMutation.isPending}
            type="submit"
          >
            Add Item
          </Button>
          {createItemMutation.isError ? <p className="text-danger">There was an error</p> : null}
        </CardBody>
      </Card>
      <p className="mt-4 max-w-[500px] text-center">
        {(itemsQuery.data?.map((item) => item.title) ?? []).join(", ")}
      </p>
    </div>
  )
}
