import { createContext, useContext, useReducer } from "react";

interface Props {
    children: React.ReactNode
}
interface ValueProps {
    addToCart: () =>void
}

const ShoppingCart = createContext<ValueProps | null>({addToCart: ()=>''})
export const useShoppingCart = () =>{
    return useContext(ShoppingCart)
}
const addToCart = () =>{
    return 'Hello World'
}
const value :ValueProps={
    addToCart
}
const CartProvider = ({children}:Props) =>{
    return <ShoppingCart.Provider value={value}>{children}</ShoppingCart.Provider>

}
export default CartProvider