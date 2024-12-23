import { Link, useMatches } from "@tanstack/react-router"
import { type CollectionName } from "~/data/collections"

interface CollectionNavProps {
  collectionName: CollectionName
}

export default function CollectionNav({ collectionName }: CollectionNavProps) {
  const matches = useMatches()
  const isProductsRoute = matches.some(
    (match) => match.routeId === "/collection/$name/",
  )
  const isAboutRoute = matches.some(
    (match) => match.routeId === "/collection/$name/about",
  )

  return (
    <div className="flex text-black/50 justify-center space-x-8 mb-8 text-sm md:text-xs font-semibold">
      <Link
        to="/collection/$name"
        params={{ name: collectionName }}
        className="relative group inline-block"
      >
        <span>Products</span>
        <span
          className={`absolute left-0 -bottom-0.5 w-full h-px bg-current transform transition-transform ${
            isProductsRoute
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100"
          }`}
        ></span>
      </Link>
      <Link
        to="/collection/$name/about"
        params={{ name: collectionName }}
        className="relative group inline-block"
      >
        <span>About</span>
        <span
          className={`absolute left-0 -bottom-0.5 w-full h-px bg-current transform transition-transform ${
            isAboutRoute ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        ></span>
      </Link>
    </div>
  )
}
