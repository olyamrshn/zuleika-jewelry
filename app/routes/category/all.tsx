import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import { products } from "~/data/products"
import { useState } from "react"
import { type CollectionName } from "~/data/collections"

export const Route = createFileRoute("/category/all")({
  component: () => {
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
    const allProducts = Object.values(products).flat()

    return (
      <div className="text-center px-4 mx-auto gap-4">
        <h1 className="text-lg font-semibold mb-8">ALL PRODUCTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
          {allProducts.map((product) => (
            <div key={product.name} className="p-2">
              <Link
                to="/collection/$name/product/$id"
                params={{
                  name: product.collection as CollectionName,
                  id: product.id,
                }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative w-full pt-[100%]">
                  <img
                    src={product.image}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={product.name}
                  />
                  {product.image2 && (
                    <img
                      src={product.image2}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        hoveredProduct === product.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      alt={`${product.name} hover`}
                    />
                  )}
                </div>
                <div className="text-center md:text-left w-[85%] mx-auto">
                  <p className="text-[13px]">{product.name}</p>
                  <span className="text-xs opacity-55">{product.price}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  },
})
