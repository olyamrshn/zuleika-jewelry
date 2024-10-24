import { Link, useLocation } from "@tanstack/react-router"
import { SearchIcon, UserIcon, HeartIcon, BagIcon, ArrowIcon } from "./Icons"
import { SlArrowLeft } from "react-icons/sl"

export default function Nav() {
  const location = useLocation()
  const isJewelleryRoute = location.pathname === "/jewellery"
  const isAboutRoute = location.pathname === "/about"

  if (isAboutRoute) {
    return (
      <nav className="flex flex-col lg:flex-row items-center p-4 px-5 zuleika-text-color font-kepler">
        <div className="flex justify-between lg:justify-start w-full lg:mb-4 order-1 lg:order-none">
          <div className="flex space-x-4">
            <a href="#">FR</a>
            <span>|</span>
            <a href="#">EN</a>
          </div>
          <div className="flex lg:hidden space-x-4">
            <span>* | * | * | *</span>
          </div>
        </div>

        <div className="text-center flex flex-col w-full lg:w-auto font-keplerCondensed order-0 lg:order-none mb-4 lg:mb-0">
          <Link to="/" className="text-5xl lg:text-[100px] mb-4 lg:mb-0">
            ZULEIKA
          </Link>
          <div className="flex flex-col lg:flex-row justify-center text-sm lg:space-x-10 space-y-4 lg:space-y-0">
            <Link to="/jewellery" className="relative group inline-block">
              <span>JEWELLERY</span>
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link to="/bijoux-despace" className="relative group inline-block">
              <span>BIJOUX&nbsp;D'ESPACE</span>
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link to="/about" className="relative group inline-block">
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-100 transition-transform"></span>
              <span>ABOUT</span>
            </Link>
            <Link to="/contact" className="relative group inline-block">
              <span>CONTACT</span>
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-end w-full lg:mb-4 order-2 lg:order-none mt-4 lg:mt-0">
          <div className="flex space-x-4">
            <span>* | * | * | *</span>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <div className="zuleika-text-color">
      {isJewelleryRoute ? (
        <div className="flex flex-col sm:p-4 sm:flex-row justify-between font-kepler">
          <div className="flex flex-row font-semibold gap-5 items-center order-1 justify-between sm:order-2">
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

          <div className="flex flex-row justify-between items-center mt-4 sm:mt-0 order-2 sm:order-1">
            <div className="flex">
              <Link
                to="/"
                className="flex flex-row gap-10 items-center text-black"
              >
                <ArrowIcon />
                <span className="text-black font-[400] text-sm font-termina">
                  JEWELLERY
                </span>
              </Link>
            </div>
          </div>

          <div className="flex zuleika-text-color space-x-2 items-center mt-4 sm:mt-0 order-2 sm:order-3">
            <button>
              <SearchIcon />
            </button>
            <button>
              <UserIcon />
            </button>
            <button>
              <HeartIcon />
            </button>
            <button>
              <BagIcon />
            </button>
          </div>
        </div>
      ) : (
        <nav className="flex flex-col lg:flex-row items-end p-4 px-5 zuleika-text-color font-kepler">
          <div className="flex justify-between lg:justify-start w-full lg:mb-4 order-1 lg:order-none">
            <div className="flex space-x-4">
              <a href="#">FR</a>
              <span>|</span>
              <a href="#">EN</a>
            </div>

            <div className="flex lg:hidden space-x-4 text-neutral-500">
              <button>
                <SearchIcon />
              </button>
              <button>
                <UserIcon />
              </button>
              <button>
                <HeartIcon />
              </button>
              <button>
                <BagIcon />
              </button>
            </div>
          </div>

          <div className="text-center flex flex-col w-full lg:w-auto font-keplerCondensed order-0 lg:order-none mb-4 lg:mb-0">
            <Link
              to="/"
              className="text-4xl mb-6 lg:mb-0"
              style={{ lineHeight: "2", letterSpacing: "0.1em" }}
            >
              ZULEIKA
            </Link>
            <div className="flex flex-col lg:flex-row justify-center text-sm lg:space-x-10 space-y-4 lg:space-y-0">
              <Link to="/jewellery" className="relative group inline-block">
                <span>STORE</span>
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link
                to="/bijoux-despace"
                className="relative group inline-block"
              >
                <span>BIJOUX&nbsp;D'ESPACE</span>
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link to="/atelier" className="relative group inline-block">
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                <span>ATELIER</span>
              </Link>
              <Link to="/about" className="relative group inline-block">
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                <span>ABOUT</span>
              </Link>
              <Link to="/contact" className="relative group inline-block">
                <span>CONTACT</span>
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-end w-full lg:mb-4 order-2 lg:order-none mt-4 lg:mt-0">
            <div className="flex space-x-4 text-neutral-500">
              <button>
                <SearchIcon />
              </button>
              <button>
                <UserIcon />
              </button>
              <button>
                <HeartIcon />
              </button>
              <button>
                <BagIcon />
              </button>
            </div>
          </div>
        </nav>
      )}
    </div>
  )
}
