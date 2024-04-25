import { useState, createContext, useContext, Children } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { useCart, CartProvider }