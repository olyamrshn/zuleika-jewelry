import { createFileRoute } from "@tanstack/react-router"
import { type CollectionName } from "~/data/collections"
import { products, type Product } from "~/data/products"
import { NotFound } from "~/components/NotFound"

function ProductComponent() {
  const { name, id } = Route.useParams()

  if (!name) {
    return <NotFound />
  }

  const collectionProducts = products[name as CollectionName]
  if (!collectionProducts) {
    return <NotFound />
  }

  const product = collectionProducts.find((p: Product) => p.id === id)
  if (!product) {
    return <NotFound />
  }

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-3 max-w-screen justify-center mx-auto">
        <div className="w-full lg:w-[48%]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-start space-x-0 lg:space-x-6 space-y-6 lg:space-y-0 w-full lg:w-1/2">
          <div className="w-full lg:w-1/2">
            <div>
              <h1 className="text-md font-semibold w-[85%]">{product.name}</h1>
              <p className="text-sm my-4 opacity-55">{product.price}</p>
            </div>

            <p className="opacity-50 text-sm leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 my-5">
              <div>
                <h2 className="text-sm mb-2">Size:</h2>
                <div className="flex gap-2">
                  <p className="text-sm">{product.details.size}</p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start w-full">
                <button className="w-[90%] text-sm my-3 p-2 py-3 border-2 border-black bg-inherit hover:bg-amber-400/10 transition-colors duration-300 rounded-none">
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute("/collection/$name/product/$id")({
  parseParams: (
    params: Record<string, string>,
  ): { name: CollectionName; id: string } => {
    if (!params.name || !params.id) {
      throw new Error("Missing required params")
    }
    return {
      name: params.name as CollectionName,
      id: params.id,
    }
  },
  component: ProductComponent,
})
