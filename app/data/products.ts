import { CollectionName } from "./collections"

export interface Product {
  id: string
  name: string
  price: string
  image: string
  image2?: string
  image3?: string
  image4?: string
  description: string
  details: {
    size: string
    materials: string
    weight: string
    dimensions: string
    fullDescription: string
    aboutCollection: string
    savoirFaire: string
    needAssistance: string
    shipping: string
    careAdvice: string
  }
  collection: CollectionName
  category: "Earrings" | "Necklaces" | "Bracelets" | "Rings"
}

export const products: Record<CollectionName, Product[]> = {
  eden: [
    {
      id: "eden-necklace",
      name: "Eden Flora Necklace",
      price: "$1.000",
      image: "https://images.omrshn.dev/neck.jpeg",
      image2: "https://images.omrshn.dev/collection.jpeg",
      description: "Elegant necklace from Eden collection...",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k, 8mm white pearls",
        weight: "12g gold",
        dimensions: "40cm long",
        fullDescription:
          "A 40cm string of 8mm round pearls, interspersed with 9 granulated gold cone caps that fit snugly around the pearls. The lock detail has been considered with care, a granulated button clasp.",
        aboutCollection:
          "The Eden collection represents nature's perfect harmony",
        savoirFaire:
          "We use a technique called granulation, where we create a pattern by melting gold and then cooling it to create a sphere. This is a very delicate process that requires a lot of skill and patience.",
        needAssistance: "",
        shipping:
          "We offer free shipping on all orders over $500. For orders under $500, shipping is $50.",
        careAdvice:
          "We recommend storing your jewelry in a cool, dry place away from direct sunlight and heat sources. Avoid contact with harsh chemicals and perfumes.",
      },
      collection: "eden",
      category: "Necklaces",
    },
    {
      id: "eden-ring",
      name: "Eden Stella Ring",
      price: "$800",
      image: "https://images.omrshn.dev/ring.jpg",
      image2: "https://images.omrshn.dev/collection.jpeg",
      description: "Beautiful ring from Eden collection...",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k",
        weight: "8g gold",
        dimensions: "Band width: 0.8cm",
        fullDescription:
          "An elegant ring showcasing masterful granulation technique, with delicate gold spheres arranged in a mesmerizing pattern. The ring's design draws inspiration from the geometric patterns found in nature.",
        aboutCollection:
          "The Eden collection represents nature's perfect harmony...",
        savoirFaire:
          "For this ring, we use a technique called granulation, where we create a pattern by melting gold and then cooling it to create a sphere. This is a very delicate process that requires a lot of skill and patience.",
        needAssistance: "",
        shipping:
          "We offer free shipping on all orders over $500. For orders under $500, shipping is $50.",
        careAdvice:
          "We recommend storing your jewelry in a cool, dry place away from direct sunlight and heat sources. Avoid contact with harsh chemicals and perfumes.",
      },
      collection: "eden",
      category: "Rings",
    },
    {
      id: "eden-bracelet",
      name: "Eden Grace Bracelet",
      price: "$900",
      image: "https://images.omrshn.dev/ears.jpg",
      image2: "https://images.omrshn.dev/collection.jpeg",
      description: "Stunning bracelet from Eden collection...",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k, 8mm white pearls",
        weight: "12g gold",
        dimensions: "40cm long",
        fullDescription:
          "A 40cm string of 8mm round pearls, interspersed with 9 granulated gold cone caps that fit snugly around the pearls. The lock detail has been considered with care, a granulated button clasp.",
        aboutCollection:
          "The Eden collection represents nature's perfect harmony",
        savoirFaire:
          "We use a technique called granulation, where we create a pattern by melting gold and then cooling it to create a sphere. This is a very delicate process that requires a lot of skill and patience.",
        needAssistance: "",
        shipping:
          "We offer free shipping on all orders over $500. For orders under $500, shipping is $50.",
        careAdvice:
          "We recommend storing your jewelry in a cool, dry place away from direct sunlight and heat sources. Avoid contact with harsh chemicals and perfumes.",
      },
      collection: "eden",
      category: "Bracelets",
    },
    {
      id: "eden-earrings",
      name: "Eden Pearl Earrings",
      price: "$700",
      image: "https://images.omrshn.dev/collection.jpeg",
      image2: "https://images.omrshn.dev/neck.jpeg",
      description: "Classic earrings from Eden collection...",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k, 8mm white pearls",
        weight: "12g gold",
        dimensions: "40cm long",
        fullDescription:
          "A 40cm string of 8mm round pearls, interspersed with 9 granulated gold cone caps that fit snugly around the pearls. The lock detail has been considered with care, a granulated button clasp.",
        aboutCollection:
          "The Eden collection represents nature's perfect harmony",
        savoirFaire:
          "We use a technique called granulation, where we create a pattern by melting gold and then cooling it to create a sphere. This is a very delicate process that requires a lot of skill and patience.",
        needAssistance: "",
        shipping:
          "We offer free shipping on all orders over $500. For orders under $500, shipping is $50.",
        careAdvice:
          "We recommend storing your jewelry in a cool, dry place away from direct sunlight and heat sources. Avoid contact with harsh chemicals and perfumes.",
      },
      collection: "eden",
      category: "Earrings",
    },
  ],
  niloufer: [
    {
      id: "niloufer-necklace",
      name: "Niloufer Luna Necklace",
      price: "$1.200",
      image: "https://images.omrshn.dev/collection.jpeg",
      image2: "https://images.omrshn.dev/neck.jpeg",
      description: "Elegant necklace from Niloufer collection...",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k, 8mm white pearls",
        weight: "12g gold",
        dimensions: "40cm long",
        fullDescription:
          "A 40cm string of 8mm round pearls, interspersed with 9 granulated gold cone caps that fit snugly around the pearls. The lock detail has been considered with care, a granulated button clasp.",
        aboutCollection:
          "The Niloufer collection represents nature's perfect harmony...",
        savoirFaire:
          "We use a technique called granulation, where we create a pattern by melting gold and then cooling it to create a sphere. This is a very delicate process that requires a lot of skill and patience.",
        needAssistance: "",
        shipping:
          "We offer free shipping on all orders over $500. For orders under $500, shipping is $50.",
        careAdvice:
          "We recommend storing your jewelry in a cool, dry place away from direct sunlight and heat sources. Avoid contact with harsh chemicals and perfumes.",
      },
      collection: "niloufer",
      category: "Necklaces",
    },
    {
      id: "niloufer-ring",
      name: "Niloufer Star Ring",
      price: "$900",
      image: "https://images.omrshn.dev/ring.jpg",
      image2: "https://images.omrshn.dev/ears.jpg",
      description: "Beautiful ring from Niloufer collection...",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k",
        weight: "8g gold",
        dimensions: "Band width: 0.8cm",
        fullDescription:
          "An elegant ring showcasing masterful granulation technique, with delicate gold spheres arranged in a mesmerizing pattern. The ring's design draws inspiration from the geometric patterns found in nature.",
        aboutCollection:
          "The Eden collection represents nature's perfect harmony...",
        savoirFaire:
          "For this ring, we use a technique called granulation, where we create a pattern by melting gold and then cooling it to create a sphere. This is a very delicate process that requires a lot of skill and patience.",
        needAssistance: "",
        shipping:
          "We offer free shipping on all orders over $500. For orders under $500, shipping is $50.",
        careAdvice:
          "We recommend storing your jewelry in a cool, dry place away from direct sunlight and heat sources. Avoid contact with harsh chemicals and perfumes.",
      },
      collection: "niloufer",
      category: "Rings",
    },
    {
      id: "niloufer-bracelet",
      name: "Niloufer Moon Bracelet",
      price: "$1.100",
      image: "https://images.omrshn.dev/neck.jpeg",
      image2: "https://images.omrshn.dev/collection.jpeg",
      description: "Stunning bracelet from Niloufer collection...",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k, 8mm white pearls",
        weight: "12g gold",
        dimensions: "40cm long",
        fullDescription:
          "A 40cm string of 8mm round pearls, interspersed with 9 granulated gold cone caps that fit snugly around the pearls. The lock detail has been considered with care, a granulated button clasp.",
        aboutCollection:
          "The Eden collection represents nature's perfect harmony",
        savoirFaire:
          "We use a technique called granulation, where we create a pattern by melting gold and then cooling it to create a sphere. This is a very delicate process that requires a lot of skill and patience.",
        needAssistance: "",
        shipping:
          "We offer free shipping on all orders over $500. For orders under $500, shipping is $50.",
        careAdvice:
          "We recommend storing your jewelry in a cool, dry place away from direct sunlight and heat sources. Avoid contact with harsh chemicals and perfumes.",
      },
      collection: "niloufer",
      category: "Bracelets",
    },
    {
      id: "niloufer-earrings",
      name: "Niloufer Sun Earrings",
      price: "$800",
      image: "https://images.omrshn.dev/ears.jpg",
      image2: "https://images.omrshn.dev/ring.jpg",
      description: "Classic earrings from Niloufer collection...",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k, 8mm white pearls",
        weight: "12g gold",
        dimensions: "40cm long",
        fullDescription:
          "A 40cm string of 8mm round pearls, interspersed with 9 granulated gold cone caps that fit snugly around the pearls. The lock detail has been considered with care, a granulated button clasp.",
        aboutCollection:
          "The Eden collection represents nature's perfect harmony",
        savoirFaire:
          "We use a technique called granulation, where we create a pattern by melting gold and then cooling it to create a sphere. This is a very delicate process that requires a lot of skill and patience.",
        needAssistance: "",
        shipping:
          "We offer free shipping on all orders over $500. For orders under $500, shipping is $50.",
        careAdvice:
          "We recommend storing your jewelry in a cool, dry place away from direct sunlight and heat sources. Avoid contact with harsh chemicals and perfumes.",
      },
      collection: "niloufer",
      category: "Earrings",
    },
  ],
  "poem-bangles": [
    {
      id: "poem-necklace",
      name: "Poem Verse Necklace",
      price: "$1.300",
      image: "https://images.omrshn.dev/ring.jpg",
      image2: "https://images.omrshn.dev/collection.jpeg",
      description: "Elegant necklace from Poem collection...",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k",
        weight: "15g gold",
        dimensions: "Diameter: 6.5cm",
        fullDescription:
          "This signature bangle from our Poem collection features a continuous flow of granulated gold spheres, creating a rhythmic pattern that catches and plays with light. The bangle opens with a hidden clasp mechanism.",
        aboutCollection:
          "The Poem collection represents nature's perfect harmony...",
        savoirFaire:
          "We use a technique called granulation, where we create a pattern by melting gold and then cooling it to create a sphere. This is a very delicate process that requires a lot of skill and patience.",
        needAssistance: "",
        shipping:
          "We offer free shipping on all orders over $500. For orders under $500, shipping is $50.",
        careAdvice:
          "We recommend storing your jewelry in a cool, dry place away from direct sunlight and heat sources. Avoid contact with harsh chemicals and perfumes.",
      },
      collection: "poem-bangles",
      category: "Necklaces",
    },
    {
      id: "poem-ring",
      name: "Poem Rhyme Ring",
      price: "$950",
      image: "https://images.omrshn.dev/neck.jpeg",
      image2: "https://images.omrshn.dev/ears.jpg",
      description: "Beautiful ring from Poem collection...",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k",
        weight: "18g gold",
        dimensions: "Diameter: 6.5cm",
        fullDescription:
          "The Verse bangle transforms written poetry into wearable art, with waves of granulated gold creating a visual rhythm. Each sphere is carefully placed to represent the cadence of poetic meter.",
        aboutCollection:
          "The Poem collection represents nature's perfect harmony...",
        savoirFaire:
          "We use a technique called granulation, where we create a pattern by melting gold and then cooling it to create a sphere. This is a very delicate process that requires a lot of skill and patience.",
        needAssistance: "",
        shipping:
          "We offer free shipping on all orders over $500. For orders under $500, shipping is $50.",
        careAdvice:
          "We recommend storing your jewelry in a cool, dry place away from direct sunlight and heat sources. Avoid contact with harsh chemicals and perfumes.",
      },
      collection: "poem-bangles",
      category: "Rings",
    },
    {
      id: "poem-bracelet",
      name: "Poem Stanza Bracelet",
      price: "$1.200",
      image: "https://images.omrshn.dev/collection.jpeg",
      image2: "https://images.omrshn.dev/ring.jpg",
      description: "Stunning bracelet from Poem collection...",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k",
        weight: "15g gold",
        dimensions: "Diameter: 6.5cm",
        fullDescription:
          "This signature bangle from our Poem collection features a continuous flow of granulated gold spheres, creating a rhythmic pattern that catches and plays with light. The bangle opens with a hidden clasp mechanism.",
        aboutCollection:
          "The Poem collection represents nature's perfect harmony...",
        savoirFaire:
          "We use a technique called granulation, where we create a pattern by melting gold and then cooling it to create a sphere. This is a very delicate process that requires a lot of skill and patience.",
        needAssistance: "",
        shipping:
          "We offer free shipping on all orders over $500. For orders under $500, shipping is $50.",
        careAdvice:
          "We recommend storing your jewelry in a cool, dry place away from direct sunlight and heat sources. Avoid contact with harsh chemicals and perfumes.",
      },
      collection: "poem-bangles",
      category: "Bracelets",
    },
    {
      id: "poem-earrings",
      name: "Poem Sonnet Earrings",
      price: "$850",
      image: "https://images.omrshn.dev/ears.jpg",
      image2: "https://images.omrshn.dev/neck.jpeg",
      description: "Classic earrings from Poem collection...",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k, 8mm white pearls",
        weight: "6g gold per earring",
        dimensions: "Length: 3.5cm",
        fullDescription:
          "These statement earrings showcase the finest granulation technique, with each gold sphere carefully placed to create a mesmerizing pattern inspired by Persian gardens. The earrings feature secure butterfly backs for comfortable wear.",
        aboutCollection:
          "The Poem collection represents nature's perfect harmony...",
        savoirFaire:
          "We use a technique called granulation, where we create a pattern by melting gold and then cooling it to create a sphere. This is a very delicate process that requires a lot of skill and patience.",
        needAssistance: "",
        shipping:
          "We offer free shipping on all orders over $500. For orders under $500, shipping is $50.",
        careAdvice:
          "We recommend storing your jewelry in a cool, dry place away from direct sunlight and heat sources. Avoid contact with harsh chemicals and perfumes.",
      },
      collection: "poem-bangles",
      category: "Earrings",
    },
  ],
}
