import { createFileRoute } from "@tanstack/react-router"
import CollectionNav from "~/components/CollectionNav"
import { collections, type CollectionName } from "~/data/collections"
import { NotFound } from "~/components/NotFound"

function RouteComponent() {
  const { name } = Route.useParams()
  const collection = collections[name as CollectionName]
  if (!collection) {
    return <NotFound />
  }

  return (
    <div className="p-4 text-center min-h-screen">
      <h1 className="text-lg font-semibold mb-4">{collection.about.title}</h1>
      <div>RENDER .....</div>
      <div className="max-w-2xl mx-auto mt-8">
        <p className="text-left">{collection.about.description}</p>
      </div>
    </div>
  )
}

export const Route = createFileRoute("/collection/$name/about")({
  parseParams: (params: Record<string, string>): { name: CollectionName } => {
    const name = params.name as CollectionName
    return Object.keys(collections).includes(name) ? { name } : { name: "eden" }
  },
  component: RouteComponent,
})
