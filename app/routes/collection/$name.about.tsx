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
    <div className="text-center justify-center max-w-2xl mx-auto h-auto">
      <CollectionNav collectionName={name} />
      <div className="mt-8">
        <p>{collection.about.description}</p>
      </div>
    </div>
  )
}

export const Route = createFileRoute("/collection/$name/about")({
  component: RouteComponent,
})
