import { Link, useLocation } from "@tanstack/react-router"
import { SearchIcon, UserIcon, BagIcon } from "./Icons"
import { SlArrowLeft } from "react-icons/sl"

export default function Nav() {
  const location = useLocation()
  const isJewelleryRoute = location.pathname === "/jewellery"
  const isAboutRoute = location.pathname === "/about"

  if (isAboutRoute) {
    return (
      <nav className="flex flex-col items-center p-4 zuleika-text-color font-kepler">
        {/* <div className="flex justify-start w-full mb-4">
          <div className="flex space-x-4">
            <a href="#">FR</a>
            <span>|</span>
            <a href="#">EN</a>
          </div>
        </div> */}
        <div className="text-center font-keplerCondensed">
          <Link to="/" className="text-[100px]">
            ZULEIKA
          </Link>
        </div>

        <div className="flex justify-center text-sm space-x-16">
          <Link to="/jewellery" className="ml-2 relative group">
            <span>JEWELLERY</span>
            <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
          <Link to="/bijoux-despace" className="ml-2 relative group">
            <span>BIJOUX D'ESPACE</span>
            <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
          <Link to="/about" className="ml-2 relative group">
            <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-100 transition-transform"></span>
            <span>ABOUT</span>
          </Link>
          <Link to="/contact" className="ml-2 relative group">
            <span>CONTACT</span>
            <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
        </div>
      </nav>
    )
  }

  return (
    <nav className="flex flex-col md:flex-row justify-between mb-[1em] transform scale-y-100 zuleika-text-color font-kepler items-center p-4 px-10">
      {!isJewelleryRoute && (
        <div className="flex space-x-4 mr-auto">
          <a href="#">FR</a>
          <span>|</span>
          <a href="#">EN</a>
        </div>
      )}

      <div
        className={`flex flex-col md:flex-row gap-10 ${isJewelleryRoute ? "mx-auto" : "mr-[8em]"}`}
      >
        {isJewelleryRoute ? (
          <div className="flex space-x-8 font-kepler items-center">
            <div className="">
              <Link
                to="/"
                className="flex flex-row gap-10 items-center text-black"
              >
                <SlArrowLeft />
                <span className="text-black font-[400] text-sm font-termina">
                  JEWELLERY
                </span>
              </Link>
            </div>

            <Link to="/" className="mb-1 font-thin">
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
        ) : (
          <>
            <div className="flex space-x-8 font-bold items-center">
              <Link to="/jewellery" className="mb-1 font-thin">
                JEWELLERY
              </Link>
              <p className="font-thin"> — </p>
              <Link to="/" className="mb-1">
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
              <Link to="/contact" className="ml-2 relative group">
                <span>CONTACT</span>
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
            </div>
          </>
        )}
      </div>

      <div
        className={`text-neutral-600 flex space-x-4 ${isJewelleryRoute ? "ml-auto" : ""}`}
      >
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
