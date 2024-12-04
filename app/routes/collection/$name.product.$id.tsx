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
  const [currentImage, setCurrentImage] = useState(0)

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

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation()
  }

  const images = [
    product.image,
    ...(product.image2 ? [product.image2] : []),
    ...(product.image3 ? [product.image3] : []),
  ]

  return (
    <div className="flex flex-col lg:flex-row px-4 w-[95%] mx-auto">
      <div className="w-full lg:w-1/2 lg:mr-5 relative">
        <div
          className="h-[400px] lg:h-[600px] overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto snap-x lg:snap-y snap-mandatory scrollbar-hide"
          onWheel={handleWheel}
          onScroll={(e) => {
            const element = e.currentTarget
            const index = Math.round(
              window.innerWidth >= 1024
                ? element.scrollTop / element.clientHeight
                : element.scrollLeft / element.clientWidth,
            )
            setCurrentImage(index)
          }}
        >
          <div className="flex lg:block w-max lg:w-full">
            {images.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="snap-start w-screen lg:w-full"
              >
                <img
                  src={image}
                  alt={`${product.name}${index > 0 ? ` - view ${index}` : ""}`}
                  className="w-screen lg:w-full h-[400px] lg:h-[600px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 lg:left-4 lg:bottom-1/2 lg:translate-y-1/2 lg:flex-col">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                currentImage === index
                  ? "bg-black scale-125"
                  : "bg-black/30 hover:bg-black/50"
              }`}
              onClick={() => {
                const container = document.querySelector(".overflow-x-auto")
                if (container) {
                  if (window.innerWidth >= 1024) {
                    container.scrollTo({
                      top: index * container.clientHeight,
                      behavior: "smooth",
                    })
                  } else {
                    container.scrollTo({
                      left: index * container.clientWidth,
                      behavior: "smooth",
                    })
                  }
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full space-y-8 lg:w-1/4 md:mr-10 text-left self-center">
        <div className="flex flex-col gap-4 md:gap-8 items-start">
          <h1 className="text-md mt-4 md:mt-0 font-semibold">{product.name}</h1>
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
                <button
                  onClick={() => setActiveTab(leftId as typeof activeTab)}
                  className="group relative text-left lg:text-left inline-block w-full"
                >
                  <p
                    className={`${
                      activeTab === leftId
                        ? ""
                        : "opacity-50 inline-block hover:opacity-100"
                    } transition-opacity duration-300 whitespace-nowrap inline-block w-max`}
                  >
                    {tabs.find((t) => t.id === leftId)!.label}
                  </p>
                  {/* <span
                    className={`absolute left-0 -bottom-0.5 h-[1px] bg-current transform transition-transform origin-left ${
                      activeTab === leftId
                        ? "w-full scale-x-100"
                        : "w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                    }`}
                  /> */}
                </button>
                <button
                  onClick={() => setActiveTab(rightId as typeof activeTab)}
                  className="group relative text-left lg:text-right inline-block w-full lg:ml-auto"
                >
                  <p
                    className={`${
                      activeTab === rightId
                        ? ""
                        : "opacity-50 hover:opacity-100"
                    } transition-opacity duration-300 whitespace-nowrap inline-block w-max`}
                  >
                    {tabs.find((t) => t.id === rightId)!.label}
                  </p>
                  {/* <span
                    className={`absolute right-0 -bottom-0.5 h-[1px] bg-current transform transition-transform origin-center ${
                      activeTab === rightId
                        ? "w-[100%] scale-x-100"
                        : "w-[100%] scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                    }`}
                  /> */}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/4 space-y-6 text-left self-center">
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
