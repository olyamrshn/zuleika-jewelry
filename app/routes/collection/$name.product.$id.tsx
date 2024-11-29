import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { type CollectionName } from "~/data/collections"
import { products, type Product } from "~/data/products"
import { NotFound } from "~/components/NotFound"
import { useState } from "react"
import { useCart } from "~/context/CartContext"

function ProductComponent() {
  const { name, id } = Route.useParams()
  const [activeTab, setActiveTab] = useState<
    "description" | "about" | "savoir" | "needAssistance" | "shipping" | "care"
  >("description")
  const [isAdded, setIsAdded] = useState(false)
  const { addToBag, removeFromBag } = useCart()

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
    { id: "needAssistance", label: "Need assistance?" },
    { id: "care", label: "Care advice" },
  ] as const

  const tabContent = {
    description: product.details.fullDescription,
    about: product.details.aboutCollection,
    savoir: product.details.savoirFaire,
    shipping: product.details.shipping,
    needAssistance: product.details.needAssistance,
    care: product.details.careAdvice,
  } as const

  const renderTabContent = () => tabContent[activeTab]
  const getTabTitle = () => tabs.find((tab) => tab.id === activeTab)?.label

  return (
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
          <p className="text-xs opacity-55">{product.price}</p>
        </div>

        <p className="opacity-50 text-xs leading-relaxed">
          {product.description}
        </p>

        <div className="space-y-4 my-5">
          <div>
            <h2 className="text-xs mb-2">Size:</h2>
            <div className="group inline-block relative">
              <p className="text-xs">{product.details.size}</p>
              <span className="scale-x-100 absolute left-0 -bottom-0.5 w-full h-[2px] bg-current transition-transform group-hover:scale-x-100"></span>
            </div>
          </div>

          <button
            onClick={() => {
              setIsAdded(!isAdded)
              if (!isAdded) {
                addToBag()
              } else {
                removeFromBag()
              }
            }}
            className={`w-full text-xs my-3 p-2 py-3 border-2 border-black bg-inherit hover:bg-amber-400/10 transition-colors duration-300 rounded-none text-center ${
              isAdded ? "bg-amber-400/15" : ""
            }`}
          >
            {isAdded ? "Added to bag" : "Add to bag"}
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 text-xs mt-8">
            {[
              ["description", "needAssistance"],
              ["about", "shipping"],
              ["savoir", "care"],
            ].map(([leftId, rightId], index) => (
              <React.Fragment key={index}>
                {[leftId, rightId].map((id) => {
                  const tab = tabs.find((t) => t.id === id)!
                  return (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id as typeof activeTab)}
                      className="group relative text-left inline-block"
                    >
                      <span
                        className={`${
                          activeTab === id ? "" : "opacity-50 hover:opacity-100"
                        } transition-opacity duration-300 whitespace-nowrap`}
                      >
                        {tab.label}
                      </span>
                      <span
                        className={`absolute left-0 -bottom-0.5 w-full h-[2px] bg-current transform transition-transform ${
                          activeTab === id
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100 h-[1px] transition-transform duration-200"
                        }`}
                      />
                    </button>
                  )
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/4 space-y-6 text-left">
        <div className="mt-4">
          <h2 className="text-xs mb-6 font-medium">{getTabTitle()}</h2>
          <p className="text-xs opacity-50 leading-relaxed">
            {renderTabContent()}
          </p>
        </div>
        <div>
          <h2 className="text-xs font-medium mb-2">Materials</h2>
          <p className="text-xs opacity-50">{product.details.materials}</p>
        </div>

        <div>
          <h2 className="text-xs font-medium mb-2">Weight</h2>
          <p className="text-xs opacity-50">{product.details.weight}</p>
        </div>

        <div>
          <h2 className="text-xs font-medium mb-2">Dimensions</h2>
          <p className="text-xs opacity-50">{product.details.dimensions}</p>
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
