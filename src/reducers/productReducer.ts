import { ProductsProps, ActionTypes, initialStateType } from "../model/types"

interface ActionProps {
    type :ActionTypes,
    payload : ProductsProps 
}
export const productReducer = (state: initialStateType, action: ActionProps) => {
    const { type, payload } = action

    switch (type) {
        case ActionTypes.Add:
            const itemIndex = state.cart.findIndex(item => item.id === payload.id)
            const cartItems = [...state.cart, { cartQuantity: 1, ...payload }]
            return { ...state, cart: cartItems }
        case ActionTypes.Delete:
           
            const filteredItems = state.cart.filter(item =>item.id !== payload.id)
           
            return { ...state, cart: filteredItems }
        default:
            throw new Error(`Unknown action type: ${type}`)
    }
}