import { ProductsProps , ActionTypes, initialStateType} from "../model/types"

interface Props {
    type: string;
    payload : string | ProductsProps
}
export const productReducer = (state:initialStateType , action:any) =>{
const {type, payload} = action
switch(type){
    case ActionTypes.Add:
        const cartItems = [...state.cart, {quantity:1, ...payload}]
        console.log({...state, cart:cartItems},'cart' )
        return {...state, cart:cartItems}
    case ActionTypes.Delete:
        const filteredItems = state.cart.filter(item =>item.id !==payload.id )
        return {...state, cart:filteredItems }
    default: 
    return state
}
}