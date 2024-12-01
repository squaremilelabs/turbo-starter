"use client"

import { Button } from "@repo/ui/components/atoms"
import Link from "next/link"

export default function Page(): JSX.Element {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-8">
      <h1 className="text-2xl font-bold">Turbo Starter</h1>
      <div className="flex flex-col space-y-2">
        <Button as={Link} href="/theme-demo">
          Theme demo
        </Button>
        <Button as={Link} href="/data-demo">
          Data demo
        </Button>
      </div>
    </main>
  )
}
