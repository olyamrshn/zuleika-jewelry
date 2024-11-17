import { createFileRoute, Outlet } from "@tanstack/react-router"
import { collections, type CollectionName } from "~/data/collections"
import { NotFound } from "~/components/NotFound"

function RouteComponent() {
  const { name } = Route.useParams()

  if (!name) {
    return <NotFound />
  }

  const collection = collections[name as CollectionName]

  if (!collection) {
    return <NotFound />
  }

  return (
    <div className="p-4 text-center min-h-screen">
      <h1 className="text-lg font-semibold mb-4">{name.toUpperCase()}</h1>
      <Outlet />
    </div>
  )
}

export const Route = createFileRoute("/collection/$name")({
  parseParams: (params: { name: string }): { name: CollectionName } => {
    const name = params.name as CollectionName
    return Object.keys(collections).includes(name) ? { name } : { name: "eden" }
  },
  component: RouteComponent,
})
