import { createContext, useState } from "react";
import { Cart } from "../components/Cart";

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])

    const addToCart = product => {
        // setCart([...cart, product])
        // esa sería la forma más básica pero vamos a comprobar que el producto esté ya en el carrito y en ese caso le añadimos uno

        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >=0){
            const newCart = structuredClone(cart)
            // structuredClone hace copias profundas de los arrays y de los objetos
            newCart[productInCartIndex].quantity +=1
            //si el array que queremos clonar es muy grande, structuresClone no es la mejor forma
             return setCart(newCart)
            // Otras formas: con map, con slice
        }
        setCart(prevState =>([...prevState, 
        {
            ...product,
            quantity:1
        }
        ]) )

        
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
