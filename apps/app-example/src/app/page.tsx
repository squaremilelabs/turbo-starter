"use client"

import { Button, Card, CardBody, Input } from "@repo/ui/components/nextui"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { useCreateItem, useFindManyItem } from "@repo/database/hooks"
import { useFormik } from "formik"
import { ItemCreateScalarSchema } from "@repo/database/zod"
import { toFormikValidate } from "zod-formik-adapter"
import { useState } from "react"

export default function Page(): JSX.Element {
  const itemsQuery = useFindManyItem()

  const [mutationErrorMessage, setMutationErrorMessage] = useState<string | null>(null)

  const createItemMutation = useCreateItem({
    onError: (error) => {
      if (error.info) {
        const info = error.info as { message?: string }
        if (info.message) {
          setMutationErrorMessage(info.message)
        }
      } else {
        setMutationErrorMessage(error.message)
      }
    },
    onSuccess: () => {
      formik.resetForm()
    },
  })

  const formik = useFormik({
    initialValues: { title: "" },
    validate: toFormikValidate(ItemCreateScalarSchema),
    onSubmit: (values) => {
      createItemMutation.mutate({ data: values })
    },
  })

  return (
    <main className="flex h-full w-full max-w-wmd flex-col items-stretch gap-8 self-center px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">App Example</h1>
        <SignedIn>
          <UserButton showName />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button variant="flat">Sign in</Button>
          </SignInButton>
        </SignedOut>
      </div>
      <form className="flex flex-col space-y-2" onSubmit={formik.handleSubmit}>
        <div className="flex items-center space-x-2">
          <Input {...formik.getFieldProps("title")} label="New Item" />
          <Button
            className="h-full text-white"
            isDisabled={!formik.isValid}
            isLoading={createItemMutation.isPending}
            type="submit"
          >
            Add
          </Button>
        </div>
        <div>
          {formik.errors.title && formik.values.title ? (
            <p className="text-sm text-danger">{formik.errors.title}</p>
          ) : null}
          {mutationErrorMessage ? (
            <p className="text-sm text-danger">{mutationErrorMessage}</p>
          ) : null}
        </div>
      </form>
      <div className="w-full space-y-4">
        <h2 className="text-lg font-semibold text-default">Items</h2>
        <div className="grid grid-cols-3 gap-4">
          {itemsQuery.isLoading ? <p>Loading...</p> : null}
          {itemsQuery.isError ? (
            <p>Error: {itemsQuery.error.message}</p>
          ) : (
            itemsQuery.data?.map((item) => (
              <Card isHoverable key={item.id} shadow="sm">
                <CardBody>
                  <p>{item.title}</p>
                </CardBody>
              </Card>
            ))
          )}
        </div>
      </div>
    </main>
  )
}
