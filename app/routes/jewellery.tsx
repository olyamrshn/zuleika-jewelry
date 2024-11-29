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
              <Link
                to={"/collection/$name"}
                params={{ name: "niloufer" }}
                className="group"
              >
                <span className="relative inline-block">
                  NILOUFER
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/collection/$name"}
                params={{ name: "eden" }}
                className="group"
              >
                <span className="relative inline-block">
                  EDEN
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/collection/$name"}
                params={{ name: "poem-bangles" }}
                className="group"
              >
                <span className="relative inline-block">
                  POEM BANGLES
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="pb-4 md:pb-8 md:py-8">
          <h3 className="text-lg md:text-xl mb-4 md:mb-8 font-light tracking-wider">
            Categories
          </h3>
          <ul className="space-y-2 md:space-y-4 text-neutral-600 font-light tracking-wider text-sm md:text-base">
            <li className="group hover:cursor-pointer">
              <span className="relative inline-block">
                Earrings
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </span>
            </li>
            <li className="group hover:cursor-pointer">
              <span className="relative inline-block">
                Necklaces
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </span>
            </li>
            <li className="group hover:cursor-pointer">
              <span className="relative inline-block">
                Bracelets
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </span>
            </li>
            <li className="group hover:cursor-pointer">
              <span className="relative inline-block">
                Rings
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </span>
            </li>
            <li className="group hover:cursor-pointer">
              <span className="relative inline-block">
                See All
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <img
        src="https://images.omrshn.dev/estore.png"
        alt="estore"
        className="w-full md:w-[80%] md:h-auto md:flex-1 md:max-h-auto object-cover"
      />
    </div>
  ),
})
