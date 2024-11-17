interface About {
  title: string
  description: string
}

interface Collection {
  name: string
  about: About
}

export type CollectionName = "eden" | "niloufer" | "poem-bangles"

export const collections: Record<CollectionName, Collection> = {
  eden: {
    name: "Eden",
    about: {
      title: "EDEN Collection",
      description: "The Eden collection represents nature's perfect harmony...",
    },
  },
  niloufer: {
    name: "Niloufer",
    about: {
      title: "NILOUFER Collection",
      description: "Inspired by Persian gardens and timeless elegance...",
    },
  },
  "poem-bangles": {
    name: "Poem Bangles",
    about: {
      title: "POEM BANGLES Collection",
      description:
        "Each piece in the Poem Bangles collection tells a unique story...",
    },
  },
}
