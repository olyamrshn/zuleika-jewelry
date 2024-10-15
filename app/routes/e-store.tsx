import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/e-store")({
  component: () => <div>Hello /e-store!</div>,
})
