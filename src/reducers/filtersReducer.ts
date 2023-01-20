 import { ActionTypes, initialsFiltersType } from "../model/types"


 interface ActionProps {
    payload : string ,
    type:ActionTypes
 }
 const filtersReducer = (state:initialsFiltersType, action:ActionProps) =>{
    const {payload, type} = action
    switch(type){
        case ActionTypes.Delivery:
            return {...state, fastDelivery: !state.fastDelivery}
        case ActionTypes.Search:
            
            return {...state, searchParam: payload}
        case ActionTypes.Reset:
            return {
                searchParam: '',
                fastDelivery: false,
            }
        default:
            return state
    }

}

export default filtersReducer