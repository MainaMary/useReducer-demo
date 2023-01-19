 import { ActionTypes, initialsFiltersType } from "../model/types"

 // the action has a payload and a type, You can make the action any if you aren't sure about the type of it's children
 const filtersReducer = (state:initialsFiltersType, action: any) =>{
    const {payload, type} = action
    switch(type){
        case ActionTypes.Delivery:
            return {...state, fastDelivery: !state.fastDelivery}
        case ActionTypes.Search:
            return {...state, seearchQuery: payload}
        case ActionTypes.Reset:
            return {
                searchParam: '',
                fastDelivery: false,

                // the price should be 0
                price: 0
            }
        default:
            return state
    }

}

export default filtersReducer