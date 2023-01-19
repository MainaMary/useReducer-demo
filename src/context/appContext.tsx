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
    image: faker.image.cats(300,200, true),

    // The cartQuantity was missing here
    cartQuantity: faker.datatype.number({ min: 1, max: 10 })

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

    // The price can't be null, since it's type is a number
    // I have added the default value of 0
    price: 0
}

const ShoppingCart = createContext<{
    state: initialStateType;
    // Since you will be passing an action to dispatch, you need to use the Dispatch type
    // I passed in the any type, but you can be more specific
    dispatch: React.Dispatch<any>;
    filters: initialsFiltersType;
    dispatchFilters: React.Dispatch<any>;

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
    // the filtersReducer has price as null and not 0
    const [filters, dispatchFilters] = useReducer(filtersReducer, initialFilters)
    console.log(Products,'products')
    return <ShoppingCart.Provider value={{state, dispatch, filters, dispatchFilters}}>{children}</ShoppingCart.Provider>

}
export default CartProvider