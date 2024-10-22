import { createFileRoute } from "@tanstack/react-router"

const products = [
  {
    name: "Niloufer Luna Necklace 40cm",
    price: "$0.000",
    image: "../../public/images/eden.jpeg",
  },
  {
    name: "Niloufer Luna Necklace 80cm",
    price: "$0.000",
    image: "../../public/images/eden.jpeg",
  },
  {
    name: "Niloufer Stella Earrings",
    price: "$0.000",
    image: "../../public/images/eden.jpeg",
  },
  {
    name: "Niloufer Flora Brooch",
    price: "$0.000",
    image: "../../public/images/eden.jpeg",
  },
  {
    name: "Niloufer Luna Bracelet",
    price: "$0.000",
    image: "../../public/images/eden.jpeg",
  },
  {
    name: "Niloufer Stella Ring",
    price: "$0.000",
    image: "../../public/images/eden.jpeg",
  },
]

export const Route = createFileRoute("/collection/niloufer")({
  component: () => (
    <div className="p-4 text-center min-h-screen">
      <h1 className="text-lg font-semibold mb-4">Niloufer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-1">
        {products.map((product, index) => (
          <div key={index} className="p-2">
            <img src={product.image} className="w-full h-auto aspect-square" />
            <div className="text-left">
              <p className="text-[13px]">{product.name}</p>
              <span className="text-xs opacity-55">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
})
