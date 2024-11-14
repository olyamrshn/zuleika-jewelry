interface Product {
  name: string
  price: string
  image: string
}

interface About {
  title: string
  description: string
}

interface Collection {
  name: string
  products: Product[]
  about: About
}

export type CollectionName = "eden" | "niloufer" | "poem-bangles"

export const collections: Record<CollectionName, Collection> = {
  eden: {
    products: [
      {
        name: "Niloufer Luna Necklace 40cm",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Luna Necklace 80cm",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Stella Earrings",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Flora Brooch",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Luna Bracelet",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Stella Ring",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
    ],
    about: {
      title: "EDEN Collection",
      description: "The Eden collection represents nature's perfect harmony...",
    },
  },
  niloufer: {
    products: [
      {
        name: "Niloufer Luna Necklace 40cm",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Luna Necklace 80cm",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Stella Earrings",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Flora Brooch",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Luna Bracelet",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Stella Ring",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
    ],
    about: {
      title: "NILOUFER Collection",
      description: "Inspired by Persian gardens and timeless elegance...",
    },
  },
  "poem-bangles": {
    products: [
      {
        name: "Niloufer Luna Necklace 40cm",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Luna Necklace 80cm",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Stella Earrings",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Flora Brooch",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Luna Bracelet",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
      {
        name: "Niloufer Stella Ring",
        price: "$0.000",
        image: "https://images.omrshn.dev/collection.jpeg",
      },
    ],
    about: {
      title: "POEM BANGLES Collection",
      description:
        "Each piece in the Poem Bangles collection tells a unique story...",
    },
  },
}
