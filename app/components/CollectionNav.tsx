import { Link } from "@tanstack/react-router"
import { type CollectionName } from "~/data/collections"

interface CollectionNavProps {
  collectionName: CollectionName
}

export default function CollectionNav({ collectionName }: CollectionNavProps) {
  return (
    <div className="flex justify-center space-x-8 mb-8 text-sm font-normal">
      <Link
        to="/collection/$name"
        params={{ name: collectionName }}
        className="relative group inline-block"
      >
        <span>COLLECTION</span>
        <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
      </Link>
      <Link
        to="/collection/$name/about"
        params={{ name: collectionName }}
        className="relative group inline-block"
      >
        <span>ABOUT</span>
        <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
      </Link>
    </div>
  )
}
