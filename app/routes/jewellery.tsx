import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

export const Route = createFileRoute("/jewellery")({
  component: () => (
    <div className="flex flex-col md:flex-row md:gap-20 px-8">
      <div className="flex flex-col">
        <div className="py-2 md:py-10">
          <h3 className="text-lg md:text-xl mb-4 md:mb-8 font-light tracking-wider">
            Collections
          </h3>
          <ul className="space-y-2 md:space-y-4 text-neutral-600 font-light tracking-wider text-sm md:text-base">
            <li>
              <Link to="/collection/niloufer">NILOUFER</Link>
            </li>
            <li>
              <Link to="/collection/eden">EDEN</Link>
            </li>
            <li>
              <Link to="/collection/poem-bangles">POEM BANGLES</Link>
            </li>
          </ul>
        </div>

        <div className="pb-4 md:pb-8 md:py-8">
          <h3 className="text-lg md:text-xl mb-4 md:mb-8 font-light tracking-wider">
            Categories
          </h3>
          <ul className="space-y-2 md:space-y-4 text-neutral-600 font-light tracking-wider text-sm md:text-base">
            <li>Earrings</li>
            <li>Necklaces</li>
            <li>Bracelets</li>
            <li>Rings</li>
            <li>See All</li>
          </ul>
        </div>
      </div>

      <img
        src="https://images.omrshn.dev/estore.png"
        alt="estore"
        className="w-full h-[60vh] md:h-auto md:flex-1 md:max-h-[800px] object-cover"
      />
    </div>
  ),
})
