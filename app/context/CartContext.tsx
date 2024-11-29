import { createContext, useContext, useState, ReactNode } from "react"

interface CartContextType {
  cartCount: number
  addToBag: () => void
  removeFromBag: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0)

  const addToBag = () => {
    setCartCount((prev) => prev + 1)
  }

  const removeFromBag = () => {
    setCartCount((prev) => Math.max(0, prev - 1))
  }

  return (
    <CartContext.Provider value={{ cartCount, addToBag, removeFromBag }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
