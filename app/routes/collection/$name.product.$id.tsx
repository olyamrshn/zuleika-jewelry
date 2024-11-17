import { createFileRoute } from "@tanstack/react-router"
import { type CollectionName } from "~/data/collections"
import { products, type Product } from "~/data/products"
import { NotFound } from "~/components/NotFound"
import { useState } from "react"

function ProductComponent() {
  const { name, id } = Route.useParams()
  const [activeTab, setActiveTab] = useState<
    "description" | "about" | "savoir" | "shipping" | "care"
  >("description")

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

  const tabs = [
    { id: "description", label: "Description" },
    { id: "about", label: "About the collection" },
    { id: "savoir", label: "Savoir faire" },
    { id: "shipping", label: "Shipping" },
    { id: "care", label: "Care advice" },
  ] as const

  const tabContent = {
    description: product.details.fullDescription,
    about: product.details.aboutCollection,
    savoir: product.details.savoirFaire,
    shipping: product.details.shipping,
    care: product.details.careAdvice,
  } as const

  const renderTabContent = () => tabContent[activeTab]
  const getTabTitle = () => tabs.find((tab) => tab.id === activeTab)?.label

  return (
    <div className="mx-auto">
      <div className="flex flex-col lg:flex-row gap-3 w-[95%] justify-center mx-auto">
        <div className="w-full lg:w-1/2 lg:mr-5">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-full space-y-8 lg:w-1/4 md:mr-10 text-left">
          <div className="flex flex-col gap-8 items-start">
            <h1 className="text-md font-semibold">{product.name}</h1>
            <p className="text-sm opacity-55">{product.price}</p>
          </div>

          <p className="opacity-50 text-sm leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-4 my-5">
            <div>
              <h2 className="text-sm mb-2">Size:</h2>
              <div className="group inline-block relative">
                <p className="text-sm">{product.details.size}</p>
                <span className="scale-x-100 absolute left-0 -bottom-0.5 w-full h-[2px] bg-current transition-transform group-hover:scale-x-100"></span>
              </div>
            </div>

            <div>
              <button className="w-full text-sm my-3 p-2 py-3 border-2 border-black bg-inherit hover:bg-amber-400/10 transition-colors duration-300 rounded-none text-center">
                Add to bag
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm mt-8">
              {tabs.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className="group relative"
                >
                  <span
                    className={`${
                      activeTab === id ? "" : "opacity-50 hover:opacity-100"
                    } transition-opacity duration-300`}
                  >
                    {label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-0.5 w-full h-[2px] bg-current transform transition-transform ${
                      activeTab === id
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100 h-[1px] transition-transform duration-200"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/4 space-y-6 text-left">
          <div className="mt-4">
            <h2 className="text-sm mb-6 font-medium">{getTabTitle()}</h2>
            <p className="text-sm opacity-50 leading-relaxed">
              {renderTabContent()}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-medium mb-2">Materials</h2>
            <p className="text-sm opacity-50">{product.details.materials}</p>
          </div>

          <div>
            <h2 className="text-sm font-medium mb-2">Weight</h2>
            <p className="text-sm opacity-50">{product.details.weight}</p>
          </div>

          <div>
            <h2 className="text-sm font-medium mb-2">Dimensions</h2>
            <p className="text-sm opacity-50">{product.details.dimensions}</p>
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
