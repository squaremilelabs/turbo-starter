import { Button } from "@repo/ui/components/nextui"
import type { ChangeEvent } from "react"

type ButtonProps = React.ComponentProps<typeof Button>

interface InputFileProps {
  onFileUpload: (file: File) => void | Promise<void>
  accept?: string
  isMultiple?: boolean
}

export default function FileUploadButton({
  onFileUpload,
  accept,
  isMultiple,
  children,
  ...buttonProps
}: Omit<ButtonProps, "as"> & InputFileProps): JSX.Element {
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files
    const file = files?.item(0)
    if (file) {
      onFileUpload(file)
        // success & error handling should be handled in onFileUpload function
        ?.then(() => null)
        .catch(() => null)
    }
  }

  return (
    <Button as="label" {...buttonProps}>
      {children}
      <input
        accept={accept}
        className="hidden"
        multiple={isMultiple}
        onChange={handleFileUpload}
        type="file"
      />
    </Button>
  )
}
