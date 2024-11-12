import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/product")({
  component: () => (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-3 max-w-screen justify-center mx-auto">
        <div className="w-[48%]">
          <img
            src="https://images.omrshn.dev/collection.jpeg"
            alt="Niloufer Luna Necklace"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-row items-start space-x-6 w-1/2">
          <div className="w-1/2">
            <div>
              <h1 className="text-md font-semibold w-[85%]">
                Niloufer Luna Necklace 40cm in yellow gold and pearls
              </h1>
              <p className="text-sm my-4 opacity-55">$0 000</p>
            </div>

            <p className="opacity-50 text-sm leading-relaxed">
              Take a classic that has stood the test of time, then pull it and
              twist it. Make people look twice. Smooth pearls are interspersed
              with handmade granulated gold cones, strikingly framing the face.
            </p>

            <div className="space-y-4 my-5">
              <div>
                <h2 className="text-sm mb-2">Size:</h2>
                <div className="flex gap-2">
                  <p className="text-sm">One Size</p>
                </div>
              </div>

              <button className="w-[90%] mx-auto text-sm my-3 p-2 py-3 border-2 border-black rounded-none">
                Add to bag
              </button>
            </div>
            <div className="grid grid-cols-2 text-sm opacity-55 gap-4 pt-6">
              <button className="text-left">Description</button>
              <button className="text-left">Need assistance?</button>
              <button className="text-left">About the collection</button>
              <button className="text-left">Shipping</button>
              <button className="text-left">Savoir faire</button>
              <button className="text-left">Care advice</button>
            </div>
          </div>

          <div className="w-1/2 text-sm">
            <div className="space-y-6 pt-6">
              <div>
                <h2 className="font-medium mb-2">Description</h2>
                <p className="opacity-50 leading-relaxed">
                  A 40cm string of 8mm round pearls, interspersed with 9
                  granulated gold cone caps that fit snugly around the pearls.
                  The lock detail has been considered with care, a granulated
                  button clasp.
                </p>
              </div>

              <div>
                <h2 className="font-medium mb-2">Materials</h2>
                <p className="opacity-50 text-sm  leading-relaxed">
                  Yellow gold 18k, 8mm white pearls
                </p>
              </div>

              <div>
                <h2 className="font-medium mb-2">Weight</h2>
                <p className="text-sm text-gray-600">12g gold</p>
              </div>

              <div>
                <h2 className="font-medium mb-2">Dimensions</h2>
                <p className="text-sm text-gray-600">40cm long</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
})
