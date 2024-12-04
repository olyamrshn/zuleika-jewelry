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
    <div className="max-w-[1400px] mx-auto px-16">
      <CollectionNav collectionName={name} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
        <div className="md:col-span-2">
          <img
            src={collection.about.image}
            alt={collection.name}
            className="w-full h-auto md:w-[calc(100%-100px)] md:h-[calc(100%-100px)] object-cover"
          />
        </div>

        <div className="md:col-span-1 space-y-8">
          {collection.about.description.map((paragraph, index) => (
            <p
              key={index}
              className="opacity-70 text-left text-sm md:text-xs leading-relaxed tracking-wide"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute("/collection/$name/about")({
  component: RouteComponent,
})
