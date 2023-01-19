import React, { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import filtersReducer from "../reducers/filtersReducer";
import { initialsFiltersType, initialStateType } from "../model/types";
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
const initialFilters ={
    searchParam: '',
    fastDelivery: false,
    price: null
}

const ShoppingCart = createContext<{
    state: initialStateType;
    dispatch: React.DispatchWithoutAction;
    filters: initialsFiltersType;
    dispatchFilters: React.DispatchWithoutAction;

  }>({
    state: initialState,
    dispatch: () => null,
    filters: initialFilters,
    dispatchFilters:() =>null
  })
export const useShoppingCart = () =>{
    return useContext(ShoppingCart)
}

const CartProvider = ({children}:Props) =>{
     
    const [state, dispatch] = useReducer(productReducer, initialState)
    const [filters, dispatchFilters] = useReducer(filtersReducer, initialFilters)
    console.log(Products,'products')
    return <ShoppingCart.Provider value={{state, dispatch, filters, dispatchFilters}}>{children}</ShoppingCart.Provider>

}
export default CartProvider