"use client"

import { Card, CardBody, Image } from "@repo/ui/heroui"
import { Button, Input } from "@repo/ui/components/atoms"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@repo/auth/clerk-nextjs-sdk"
import { useCreateItem, useFindManyItem } from "@repo/database/hooks"
import { useFormik } from "formik"
import { ItemCreateScalarSchema } from "@repo/database/zod"
import { toFormikValidate } from "zod-formik-adapter"
import { useState } from "react"
import { useEdgeStore } from "@repo/storage/react"
import { useMutation } from "@repo/web-core/tanstack-react-query"
import { FileUploadButton } from "@repo/storage/components"

export default function Page(): JSX.Element {
  /** QUERYING DATABASE RECORDS */
  const itemsQuery = useFindManyItem()

  /** FORM HELPERS (FORMIK) */
  const formik = useFormik({
    initialValues: { title: "" },
    validate: toFormikValidate(ItemCreateScalarSchema),
    onSubmit: (values) => {
      createItemMutation.mutate({ data: values })
    },
  })

  /** MUTATING DATABASE */
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
      setMutationErrorMessage(null)
    },
  })

  /** UPLOADING FILES TO STORAGE (WITH DATABASE MUTATIONS) */
  const { edgestore } = useEdgeStore()
  const createImageItemMutation = useMutation({
    mutationKey: ["createImageItem"],
    mutationFn: async (file: File) => {
      const fileResult = await edgestore.publicFiles.upload({ file })
      const title = `Image on ${new Date().toISOString()}`
      const url = fileResult.url
      createItemMutation.mutate({ data: { title, image_url: url } })
    },
  })

  return (
    <main className="flex h-full w-full max-w-wmd flex-col items-stretch gap-8 self-center px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Demo</h1>
        {/* AUTH ACTIONS WITH CLERK */}
        <SignedIn>
          <UserButton showName />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button variant="flat">Sign in</Button>
          </SignInButton>
        </SignedOut>
      </div>
      {/* FORM HANDLING WITH FORMIK + MUTATIONS */}
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
        {/* FILE UPLOADING WITH EDGESTORE */}
        <div className="flex items-center justify-end space-x-2">
          <FileUploadButton
            accept="image/*"
            isLoading={createImageItemMutation.isPending}
            onFileUpload={createImageItemMutation.mutate}
            variant="bordered"
          >
            Upload Image
          </FileUploadButton>
        </div>
        {/* SHOWING ERROR MESSAGES WITH FORMIK */}
        <div>
          {formik.errors.title && formik.values.title ? (
            <p className="text-sm text-danger">{formik.errors.title}</p>
          ) : null}
          {mutationErrorMessage ? (
            <p className="text-sm text-danger">{mutationErrorMessage}</p>
          ) : null}
        </div>
      </form>
      {/* QUERYING DATABASE RECORDS */}
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
                  {item.image_url ? (
                    <Image alt={item.title} src={item.image_url} />
                  ) : (
                    <p>{item.title}</p>
                  )}
                </CardBody>
              </Card>
            ))
          )}
        </div>
      </div>
    </main>
  )
}
