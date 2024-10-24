import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

export const Route = createFileRoute("/jewellery")({
  component: () => (
    <div className="w-full flex flex-col gap-10 px-10">
      <div className="flex pt-5 flex-col gap-10">
        <div>
          <h3 className="pb-5 text-sm font-semibold">Collections</h3>
          <ul className="space-y-1.5 text-neutral-500 text-md">
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
        <div>
          <h3 className="pb-5 text-sm font-semibold">Categories</h3>
          <ul className="space-y-1.5 text-neutral-500 text-sm">
            <li>Earrings</li>
            <li>Necklaces</li>
            <li>Bracelets</li>
            <li>Rings</li>
            <li>See All</li>
          </ul>
        </div>
      </div>
      <img
        src="../../public/images/estore.png"
        alt="estore"
        className="w-full h-auto max-h-[700px] object-cover"
      />
    </div>
  ),
})
