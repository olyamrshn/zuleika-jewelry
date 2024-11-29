import { Link, useLocation } from "@tanstack/react-router"
import {
  SearchIcon,
  UserIcon,
  HeartIcon,
  BagIcon,
  ArrowIcon,
  MenuIcon,
} from "./Icons"
import { useCart } from "~/context/CartContext"

export default function Nav() {
  const location = useLocation()
  const isJewelleryRoute = location.pathname === "/jewellery"
  const isCollectionRoute = location.pathname.startsWith("/collection/")
  const isAboutRoute = location.pathname === "/about"
  const { cartCount } = useCart()

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
          <div className="flex flex-col sm:flex-row justify-center items-center text-sm gap-4 sm:gap-8 md:gap-10">
            <Link to="/jewellery" className="group">
              <span className="relative inline-block">
                JEWELLERY
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </span>
            </Link>

            <Link to="/bijoux-despace" className="group">
              <span className="relative inline-block">
                BIJOUX&nbsp;D'ESPACE
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </span>
            </Link>

            <Link to="/about" className="group">
              <span className="relative inline-block">
                ABOUT
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </span>
            </Link>

            <Link to="/contact" className="group">
              <span className="relative inline-block">
                CONTACT
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </span>
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
      {isJewelleryRoute || isCollectionRoute ? (
        <div className="flex flex-col p-4 sm:flex-row justify-between font-kepler">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="flex items-center gap-2">
              <ArrowIcon />
              <span className="text-sm text-black font-termina">
                {isJewelleryRoute ? (
                  "JEWELLERY"
                ) : (
                  <div className="flex items-center gap-2">
                    <MenuIcon />
                    <p>MENU</p>
                  </div>
                )}
              </span>
            </Link>
          </div>

          <div className="flex flex-row mx-auto items-center gap-4 sm:gap-5 order-1 sm:order-2">
            <Link to="/" className="text-xs md:text-sm sm:mb-1">
              E-STORE
            </Link>
            <Link
              to="/"
              className="text-2xl tracking-[0.2em] transform scale-y-150"
            >
              ZULEIKA
            </Link>
            <Link to="/atelier" className="text-xs md:text-sm sm:mb-1">
              ATELIER
            </Link>
          </div>

          <div className="flex zuleika-text-color space-x-4 justify-center mt-6 sm:mt-0 order-2 sm:order-3">
            <button className="hover:scale-110 transition-transform">
              <SearchIcon />
            </button>
            <button className="hover:scale-110 transition-transform">
              <UserIcon />
            </button>
            <button className="hover:scale-110 transition-transform">
              <HeartIcon />
            </button>
            <button className="hover:scale-110 transition-transform">
              <BagIcon count={cartCount} />
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
              <button className="hover:scale-110 transition-transform">
                <SearchIcon />
              </button>
              <button className="hover:scale-110 transition-transform">
                <UserIcon />
              </button>
              <button className="hover:scale-110 transition-transform">
                <HeartIcon />
              </button>
              <button className="hover:scale-110 transition-transform">
                <BagIcon count={cartCount} />
              </button>
            </div>
          </div>

          <div className="text-center flex flex-col w-full lg:w-auto font-keplerCondensed order-0 lg:order-none mb-4 lg:mb-0">
            <Link
              to="/"
              className="text-4xl mb-0"
              style={{ lineHeight: "2", letterSpacing: "0.1em" }}
            >
              ZULEIKA
            </Link>
            <div className="flex flex-col lg:flex-row justify-center text-sm lg:space-x-10 space-y-4 lg:space-y-0">
              <Link to="/jewellery" className="group">
                <span className="relative inline-block">
                  STORE
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span>
              </Link>

              <Link to="/bijoux-despace" className="group">
                <span className="relative inline-block">
                  BIJOUX&nbsp;D'ESPACE
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span>
              </Link>

              <Link to="/atelier" className="group">
                <span className="relative inline-block">
                  ATELIER
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span>
              </Link>

              <Link to="/about" className="group">
                <span className="relative inline-block">
                  ABOUT
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span>
              </Link>

              <Link to="/contact" className="group">
                <span className="relative inline-block">
                  CONTACT
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-end w-full lg:mb-4 order-2 lg:order-none mt-4 lg:mt-0">
            <div className="flex space-x-4 text-neutral-500">
              <button className="hover:scale-110 transition-transform">
                <SearchIcon />
              </button>
              <button className="hover:scale-110 transition-transform">
                <UserIcon />
              </button>
              <button className="hover:scale-110 transition-transform">
                <HeartIcon />
              </button>
              <button className="hover:scale-110 transition-transform">
                <BagIcon count={cartCount} />
              </button>
            </div>
          </div>
        </nav>
      )}
    </div>
  )
}
