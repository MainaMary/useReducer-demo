import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import { initialStateType } from "../model/types";
import {faker} from "@faker-js/faker"
 const Products = [...Array(12)].map(()=>({
    name:faker.commerce.productName(),
    price: faker.commerce.price(),
    id: faker.datatype.uuid(),
    delivery: faker.datatype.boolean(),
    date: faker.datatype.datetime({ min: 1577836800000, max: 1893456000000 }),
    //image: `${faker.image.nature()}?random=${Date.now()}`
    image: faker.image.cats(300,200, true)

}))
interface Props {
    children: React.ReactNode
}



const initialState = {
    products :Products,
    cart: []

} 

const ShoppingCart = createContext<{
    state: initialStateType;
    dispatch: React.DispatchWithoutAction;
  }>({
    state: initialState,
    dispatch: () => null
  })
export const useShoppingCart = () =>{
    return useContext(ShoppingCart)
}

const CartProvider = ({children}:Props) =>{
     
    const [state, dispatch] = useReducer(productReducer, initialState)
    console.log(Products,'products')
    return <ShoppingCart.Provider value={{state, dispatch}}>{children}</ShoppingCart.Provider>

}
export default CartProvider