import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router"
import { collections, type CollectionName } from "~/data/collections"
import { NotFound } from "~/components/NotFound"

function RouteComponent() {
  const { name } = Route.useParams()
  const matches = useMatches()
  const isProductRoute = matches.some((match) =>
    match.pathname.includes("/product/"),
  )

  if (!name) {
    return <NotFound />
  }

  const collection = collections[name as CollectionName]

  if (!collection) {
    return <NotFound />
  }

  return (
    <div className="text-center">
      {!isProductRoute && (
        <h1 className="text-lg font-semibold mb-4">{name.toUpperCase()}</h1>
      )}
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
