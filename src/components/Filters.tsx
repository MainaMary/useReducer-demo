import { options } from 'joi'
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
    
   dispatchFilters({type: ActionTypes.delivery})
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
        <input type="checkbox" value={fastDelivery} onChange={handleDelivery} className="mx-4"/>
        <p>Fast delivery</p>
        {/* <select >
            { optionList.map(item=><option key={item.type}  onChange={handleDelivery}>{item.label}</option>)}
        </select> */}
        </p>
    </div>
  )
}

export default Filters