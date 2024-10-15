import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/atelier")({
  component: () => <div>Hello /atelier!</div>,
})
