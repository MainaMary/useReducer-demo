import React from 'react'
import { useShoppingCart } from '../context/appContext'
import { ActionTypes } from '../model/types'

const Filters = () => {
const {filters:{fastDelivery, searchParam},  dispatchFilters} = useShoppingCart()
const optionList = [
    {type:'all', label:'All'},
    {type:'delivery', label:'By fast delivery'}
]
const handleDelivery = () =>{
    // The action type is Delivery not delivery
   dispatchFilters({type: ActionTypes.Delivery})
}
const handleSearch  =(e:any)=>{
    dispatchFilters({type:ActionTypes.Search, payload: e.target.value})
    console.log(e.target.value)

}
 console.log(fastDelivery, searchParam);


  return (
    <div className='my-8 md:flex justify-between'>
        <input type="text" placeholder='Search product...'  onChange={handleSearch} className="py-2 px-4 w-[40%] rounded-sm outline-none"/>
        <p className='flex h-auto items-center'>
        <span>Filter by:</span>
            {/** Value takes a string, for checkboxes checked is better since it takes a boolean*/}
        <input type="checkbox" checked={fastDelivery} onChange={handleDelivery} className="mx-4"/>
        <label>Fast delivery</label>
        {/* <select >
            { optionList.map(item=><option key={item.type}  onChange={handleDelivery}>{item.label}</option>)}
        </select> */}
        </p>
    </div>
  )
}

export default Filters