import { createFileRoute } from "@tanstack/react-router"
import about from "../../public/images/about-one.jpeg"
import about2 from "../../public/images/about-two.jpg"
import about3 from "../../public/images/about-three.jpg"

type ContentBlock = {
  title: string
  description: string
  imageSrc: string
}

const contentBlocks: ContentBlock[] = [
  {
    title: "The Brand",
    description:
      "ZULEIKA oprem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc: about,
  },
  {
    title: "The Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc: about2,
  },
  {
    title: "The Atelier",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc: about3,
  },
]
export const Route = createFileRoute("/about")({
  component: () => (
    <div className="text-[#848484] about-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {contentBlocks.map((block, index) => (
        <div
          key={index}
          className="content-block flex flex-col md:flex-row items-center mb-16"
        >
          <div className="image-container w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={block.imageSrc}
              alt={block.title}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="text-content w-full md:w-1/2 md:pl-28 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-14">{block.title}</h2>
            <p className="text-xs leading-loose">{block.description}</p>
          </div>
        </div>
      ))}
    </div>
  ),
})
