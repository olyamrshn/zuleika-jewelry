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
import { useEffect, useState } from "react"

export default function Nav() {
  const location = useLocation()
  const isJewelleryRoute = location.pathname === "/jewellery"
  const isCollectionRoute = location.pathname.startsWith("/collection/")
  const isAboutRoute = location.pathname === "/about"
  const { cartCount } = useCart()
  const [showFullNav, setShowFullNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowFullNav(scrollPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isAboutRoute) {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 flex flex-col lg:flex-row items-center p-4 px-5 zuleika-text-color font-kepler">
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
          <Link
            to="/"
            className={`${
              showFullNav ? "text-3xl md:text-5xl" : "text-5xl md:text-[100px]"
            } mb-4 lg:mb-0 transition-all duration-900 ease-in-out`}
          >
            ZULEIKA
          </Link>
          <div className="flex flex-row py-2 justify-center items-center text-xs md:text-sm gap-4 overflow-hidden md:gap-8 lg:gap-10 overflow-x-auto">
            <Link to="/jewellery" className="group whitespace-nowrap">
              <span className="relative inline-block">
                JEWELLERY
                <span className="absolute bg-current left-0 -bottom-0.5 w-full h-px transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out z-10"></span>
              </span>
            </Link>

            <Link to="/bijoux-despace" className="group whitespace-nowrap">
              <span className="relative inline-block">
                BIJOUX&nbsp;D'ESPACE
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </span>
            </Link>

            <Link to="/about" className="group whitespace-nowrap">
              <span className="relative inline-block">
                ABOUT
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </span>
            </Link>

            <Link to="/contact" className="group whitespace-nowrap">
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
    <div className="fixed top-0 left-0 right-0 bg-white z-50 zuleika-text-color">
      {isJewelleryRoute || isCollectionRoute ? (
        <div className="flex flex-col p-4 sm:flex-row justify-between items-center font-kepler">
          <div className="w-[120px] mr-auto pb-2 md:pb-0 md:mr-0 flex items-center justify-start sm:absolute sm:left-4 sm:top-4">
            <>
              {isJewelleryRoute ? (
                <Link
                  to="/"
                  className="text-black flex items-center gap-2 md:gap-[3em]"
                >
                  <ArrowIcon />
                  <span className="text-sm font-termina">JEWELLERY</span>
                </Link>
              ) : (
                <Link
                  to="/jewellery"
                  className="zuleika-text-color flex items-center gap-2"
                >
                  <MenuIcon />
                  <span className="text-xs font-termina">MENU</span>
                </Link>
              )}
            </>
          </div>

          <div className="flex-1 flex flex-row items-center pb-2 md:pb-0 justify-center mx-auto transition-all duration-300">
            {showFullNav ? (
              <>
                <div className="hidden md:flex flex-row items-center gap-4">
                  <Link to="/jewellery" className="text-xs md:text-sm group">
                    <span className="relative inline-block">
                      JEWELLERY
                      <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
                  </Link>
                  <span>-</span>
                  <Link to="/" className="text-xs md:text-sm group">
                    <span className="relative inline-block">
                      E-STORE
                      <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="text-center mx-4 text-3xl tracking-[0.2em]"
                  >
                    ZULEIKA
                  </Link>
                  <Link to="/atelier" className="text-xs md:text-sm group">
                    <span className="relative inline-block">
                      ATELIER
                      <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
                  </Link>
                  <span>-</span>
                  <Link
                    to="/bijoux-despace"
                    className="text-xs md:text-sm group"
                  >
                    <span className="relative inline-block">
                      BIJOUX D'ESPACE
                      <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
                  </Link>
                  <Link to="/about" className="text-xs md:text-sm group">
                    <span className="relative inline-block">
                      ABOUT
                      <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
                  </Link>
                  <Link to="/contact" className="text-xs md:text-sm group">
                    <span className="relative inline-block">
                      CONTACT
                      <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
                  </Link>
                </div>
                <div className="md:hidden flex items-center">
                  <Link
                    to="/"
                    className="text-xs md:text-sm transition-opacity duration-300 group"
                  >
                    <span className="relative inline-block">
                      E-STORE
                      <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="text-center mx-4 text-4xl tracking-[0.2em] transition-all duration-300"
                  >
                    ZULEIKA
                  </Link>
                  <Link
                    to="/atelier"
                    className="text-xs md:text-sm transition-opacity duration-300 group"
                  >
                    <span className="relative inline-block">
                      ATELIER
                      <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="hidden md:flex items-center">
                  <Link
                    to="/"
                    className="text-xs md:text-sm transition-opacity duration-300 group"
                  >
                    <span className="relative inline-block">
                      E-STORE
                      <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="text-center mx-4 text-5xl tracking-[0.2em] transition-all duration-300"
                  >
                    ZULEIKA
                  </Link>
                  <Link
                    to="/atelier"
                    className="text-xs md:text-sm transition-opacity duration-300 group"
                  >
                    <span className="relative inline-block">
                      ATELIER
                      <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
                  </Link>
                </div>
                <div className="md:hidden">
                  <Link
                    to="/"
                    className="text-center text-4xl tracking-[0.2em] transition-all duration-300"
                  >
                    ZULEIKA
                  </Link>
                </div>
              </>
            )}
          </div>

          <div className="w-[120px] flex justify-end space-x-4 sm:absolute sm:right-4 sm:top-4">
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
        <nav className="fixed top-0 left-0 right-0 bg-white z-50 flex flex-col lg:flex-row items-end p-4 px-5 zuleika-text-color font-kepler">
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
