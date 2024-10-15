import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bijoux-despace')({
  component: () => <div>Hello /bijoux-despace!</div>,
})
