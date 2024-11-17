import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import CollectionNav from "~/components/CollectionNav"
import { collections, type CollectionName } from "~/data/collections"
import { NotFound } from "~/components/NotFound"

function RouteComponent() {
  const { name } = Route.useParams()
  console.log("runs..")

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
      <CollectionNav collectionName={name} />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-1">
        {collection.products.map((product) => (
          <div key={product.name} className="p-2">
            <Link to="/product">
              <img
                src={product.image}
                className="w-full h-auto aspect-square"
              />
              <div className="text-left">
                <p className="text-[13px]">{product.name}</p>
                <span className="text-xs opacity-55">{product.price}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Route = createFileRoute("/collection/$name")({
  parseParams: (params: { name: string }): { name: CollectionName } => {
    const name = params.name as CollectionName
    console.log("Parsing params:", params)
    return Object.keys(collections).includes(name) ? { name } : { name: "eden" }
  },
  component: RouteComponent,
})
