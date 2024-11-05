"use client"

import { Button, Card, CardBody, Input } from "@repo/ui/components/nextui"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"
import { createItem, fetchItems } from "@repo/database/item-functions"

export default function Page(): JSX.Element {
  const itemsQuery = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const items = await fetchItems()
      return items
    },
  })

  const [input, setInput] = useState("")
  const createItemMuation = useMutation({
    mutationKey: ["create-item"],
    mutationFn: async () => {
      const item = await createItem({ title: input })
      return item
    },
    onSuccess: async () => {
      setInput("")
      await itemsQuery.refetch()
    },
  })

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
          createItemMuation.mutate()
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
            isLoading={createItemMuation.isPending}
            type="submit"
          >
            Add Item
          </Button>
          {createItemMuation.isError ? (
            <p className="text-danger">{createItemMuation.error.message}</p>
          ) : null}
        </CardBody>
      </Card>
      <p className="mt-4 max-w-[500px] text-center">
        {(itemsQuery.data?.map((item) => item.title) ?? []).join(", ")}
      </p>
    </div>
  )
}
