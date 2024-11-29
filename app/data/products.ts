import { CollectionName } from "./collections"

export interface Product {
  id: string
  name: string
  price: string
  image: string
  image2?: string
  image3?: string
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
}

export const products: Record<CollectionName, Product[]> = {
  eden: [
    {
      id: "eden-flora-necklace",
      name: "Eden Flora Necklace 40cm in yellow gold and pearls",
      price: "$1.000",
      image: "https://images.omrshn.dev/neck.jpeg",
      image2: "https://images.omrshn.dev/collection.jpeg",
      description:
        "Take a classic that has stood the test of time, then pull it and twist it. Make people look twice. Smooth pearls are interspersed with handmade granulated gold cones, strikingly framing the face.",
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
    },
    {
      id: "eden-stella-ring",
      name: "Eden Stella Ring",
      price: "$1.000",
      image: "https://images.omrshn.dev/ears.jpg",
      image2: "https://images.omrshn.dev/collection.jpeg",
      description:
        "A stunning statement ring featuring intricate granulation work in 18k yellow gold, inspired by the natural patterns found in Eden's garden.",
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
    },
  ],
  niloufer: [
    {
      id: "niloufer-luna-necklace",
      name: "Niloufer Luna Necklace 40cm in yellow gold and pearls",
      price: "$2.000",

      image: "https://images.omrshn.dev/ears.jpg",
      image2: "https://images.omrshn.dev/collection.jpeg",
      description:
        "Take a classic that has stood the test of time, then pull it and twist it. Make people look twice. Smooth pearls are interspersed with handmade granulated gold cones, strikingly framing the face.",
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
    },
    {
      id: "niloufer-stella-earrings",
      name: "Niloufer Stella Earrings",
      price: "$2.000",
      image: "https://images.omrshn.dev/neck.jpeg",
      image2: "https://images.omrshn.dev/collection.jpeg",
      description:
        "Elegant drop earrings featuring Persian-inspired motifs, handcrafted in 18k yellow gold with delicate granulation work.",
      details: {
        size: "One Size",
        materials: "Yellow gold 18k",
        weight: "6g gold per earring",
        dimensions: "Length: 3.5cm",
        fullDescription:
          "These statement earrings showcase the finest granulation technique, with each gold sphere carefully placed to create a mesmerizing pattern inspired by Persian gardens. The earrings feature secure butterfly backs for comfortable wear.",
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
    },
  ],
  "poem-bangles": [
    {
      id: "poem-bangles-1",
      name: "Poem Bangle Classic in yellow gold and pearls",
      price: "$3.000",
      image: "https://images.omrshn.dev/ring.jpg",
      image2: "https://images.omrshn.dev/collection.jpeg",
      description:
        "A timeless bangle design featuring flowing lines and intricate granulation work, creating poetry in motion on your wrist.",
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
    },
    {
      id: "poem-bangles-2",
      name: "Poem Bangle Verse",
      price: "$3.000",
      image: "https://images.omrshn.dev/neck.jpeg",
      image2: "https://images.omrshn.dev/collection.jpeg",
      description:
        "An artistic interpretation of written verse translated into precious metal, featuring undulating forms and delicate granulation.",
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
    },
  ],
}
