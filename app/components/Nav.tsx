import { Link } from "@tanstack/react-router"
import { SearchIcon, UserIcon, BagIcon } from "./Icons"

export default function Nav() {
  return (
    <nav className="flex justify-between mb-[3em] transform scale-y-100 zuleika-text-color font-kepler items-center p-4 px-10">
      <div className="flex space-x-4 mr-auto">
        <a href="#">FR</a>
        <span>|</span>
        <a href="#">EN</a>
      </div>

      <div className="flex flex-row gap-10 mr-[8em]">
        <div className="flex space-x-8 font-bold items-end">
          <Link to="/e-store" className="mb-1">
            E-STORE
          </Link>
          <Link
            to="/"
            className="text-2xl tracking-[0.2em] transform scale-y-150"
          >
            ZULEIKA
          </Link>
          <Link to="/atelier" className="mb-1">
            ATELIER
          </Link>
        </div>

        <div className="flex space-x-8 font-normal items-center">
          <p> — </p>
          <Link to="/bijoux-despace" className="ml-2 relative group">
            <span>BIJOUX D'ESPACE</span>
            <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
          <Link to="/about" className="ml-2 relative group">
            <span>ABOUT</span>
            <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
          <Link to="/contact" className="xml-2 relative group">
            <span>CONTACT</span>
            <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
        </div>
      </div>

      <div className="text-neutral-600 flex space-x-4">
        <button>
          <SearchIcon />
        </button>
        <button>
          <UserIcon />
        </button>
        <button>
          <BagIcon />
        </button>
      </div>
    </nav>
  )
}
