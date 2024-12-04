import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

type CategoryName = "earrings" | "necklaces" | "bracelets" | "rings"

export const Route = createFileRoute("/jewellery")({
  component: () => (
    <div className="flex flex-col md:flex-row md:gap-20 px-8">
      <div className="flex flex-col">
        <div className="pb-[4em]">
          <h3 className="text-lg mb-6 font-semibold tracking-wider">
            Collections
          </h3>
          <ul className="space-y-4 md:space-y-6 text-neutral-600 font-normal tracking-wider text-sm">
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

        <div className="pb-8 md:pb-16">
          <h3 className="text-lg mb-6 font-semibold tracking-wider">
            Categories
          </h3>
          <ul className="space-y-4 md:space-y-6 text-neutral-600 font-normal tracking-wider text-sm">
            {["Earrings", "Necklaces", "Bracelets", "Rings"].map((category) => (
              <li key={category}>
                <Link
                  to="/category/$name"
                  params={{ name: category.toLowerCase() as CategoryName }}
                  className="group"
                >
                  <span className="relative inline-block">
                    {category}
                    <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
              </li>
            ))}
            <li className="group hover:cursor-pointer">
              <Link to="/jewellery" className="relative inline-block">
                See All
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
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
