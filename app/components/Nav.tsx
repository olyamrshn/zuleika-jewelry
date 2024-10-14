import { Search } from "lucide-react"

export default function Nav() {
  return (
    <nav className="flex justify-between transform scale-y-100 zuleika-text-color items-center p-4 px-10">
      <div className="flex space-x-4 mr-auto">
        <a href="#">FR</a>
        <span>|</span>
        <a href="#">EN</a>
      </div>

      <div className="flex flex-row gap-10 mr-[8em]">
        <div className="flex space-x-8 font-bold items-end">
          <a href="#" className="mb-1">
            E-STORE
          </a>
          <a
            className="text-2xl tracking-[0.2em] transform scale-y-150"
            href="#"
          >
            ZULEIKA
          </a>
          <a href="#" className="mb-1">
            ATELIER
          </a>
        </div>

        <div className="flex space-x-8 font-normal items-center">
          <p className="tracking-tighter"> — </p>
          <a href="#" className="tracking-tighter">
            BIJOUX D'ESPACE
          </a>
          <a href="#" className="tracking-tighter">
            ABOUT
          </a>
          <a href="#" className="tracking-tighter">
            CONTACT
          </a>
        </div>
      </div>

      <div className="flex space-x-4">
        <button className="text-neutral-500">
          <Search />
        </button>
        <button className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
        <button className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
