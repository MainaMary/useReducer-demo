 import { ActionTypes, initialsFiltersType } from "../model/types"
 const filtersReducer = (state:initialsFiltersType, action) =>{
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
                price: null
            }
        default:
            return state
    }

}

export default filtersReducer