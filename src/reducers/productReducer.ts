import { ProductsProps, ActionTypes, initialStateType } from "../model/types"


export const productReducer = (state: initialStateType, action: any) => {
    const { type, payload } = action

    switch (type) {
        case ActionTypes.Add:
            const itemIndex = state.cart.findIndex(item => item.id === payload.id)
            const cartItems = [...state.cart, { cartQuantity: 1, ...payload }]
            return { ...state, cart: cartItems }
        case ActionTypes.Delete:
            const filteredItems = state.cart.filter(item => item.id !== payload.id)
            return { ...state, cart: filteredItems }
        default:
            return state
    }
}