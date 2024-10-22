import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/e-store")({
  component: () => (
    <div className="w-full flex flex-row gap-20 px-10">
      <div className="flex pt-5 flex-col gap-10">
        <div>
          <h3 className="pb-5 text-sm font-semibold">Collections</h3>
          <ul className="space-y-1.5 text-neutral-500 text-md">
            <li>NILOUFER</li>
            <li>EDEN</li>
            <li>POEM BANGLES</li>
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
        className="w-[80%] h-[700px] aspect-square object-cover"
      />
    </div>
  ),
})
