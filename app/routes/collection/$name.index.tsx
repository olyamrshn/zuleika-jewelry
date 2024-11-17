import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import CollectionNav from "~/components/CollectionNav"
import { collections, type CollectionName } from "~/data/collections"
import { products } from "~/data/products"

function RouteComponent() {
  const { name } = Route.useParams()

  return (
    <>
      <CollectionNav collectionName={name} />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-1">
        {products[name as CollectionName].map((product) => (
          <div key={product.name} className="p-2">
            <Link
              to="/collection/$name/product/$id"
              params={{ name, id: product.id }}
            >
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
    </>
  )
}

export const Route = createFileRoute("/collection/$name/")({
  component: RouteComponent,
})
