import { createContext , useState } from "react";
// GLobal Storage , context create kr diya
export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=>{}
})

export const CartProvider = ({children})=>{
    const [isCartOpen , setIsCartOpen] = useState(false);   
    const value = {isCartOpen , setIsCartOpen};
    return (
        <CartContext.Provider value = {value}>{children}</CartContext.Provider>
    )
}

// Manu is meant to be stronger than this atleast , common , this is toxic , i repeat , this thing is toxic    