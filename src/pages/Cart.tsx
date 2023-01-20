import React,{useState, useEffect} from 'react'

import { useShoppingCart } from '../context/appContext'
import { ProductsProps } from '../model/types'
import { ActionTypes } from '../model/types'
import Empty from './Empty'

interface CartProps {
  cartItem: ProductsProps
}
export const CartCard = ({cartItem}:CartProps) =>{
  const { name, image, price, delivery } = cartItem
  console.log(cartItem)
  const [count,setCount] = useState(1)
  const {dispatch} = useShoppingCart()
  const removeItem = (cartItem:ProductsProps) =>{
    dispatch({
      type: ActionTypes.Delete,
      payload: cartItem
    })
  }
  //grid grid-cols-1 gap-8 md:grid-cols-5

  return <div className='shadow-lg rounded-md w-full bg-white  px-8 py-4   mb-8'>
  <div className='grid grid-cols-1 gap-8 md:grid-cols-5 h-auto items-center text-center '>
    <div >
    <img src={image} alt={name} className="w-full"/>
    </div>

    <p >{name}</p>
    <p>{`${price}`}</p>
    <p >{delivery ? 'Fast delivery' :'3 days delivery'}</p>
    <div className='grid grid-cols-3  '>
      
      <p>{count}</p>
      
    </div>
    

  </div>
  <div className='mt-4 mb-2'>
    <button onClick={() => removeItem(cartItem)}>Remove from cart</button>
  </div>
  </div>
  
}
const Cart = () => {
  const {state:{cart}} = useShoppingCart()
  const [subTotal,setSubTotal] = useState(0)
  useEffect(()=>{
    const getTotal = cart.reduce((acc, curr)=>(acc + Number(curr.price)),0)
    setSubTotal(getTotal)
  },[cart])
  return (
    <>
    {!cart.length ? <Empty title="Cart is empty.."/>:<div className='md:flex gap-16 mt-8  '>
      <div className=' w-full md:w-[80%] ' >
        {cart.length && cart.map(item =><CartCard key={item.id} cartItem={item}/>)}
      </div>
      <div className='w-full md:w-[20%] h-52 bg-primary-color text-white shadow-lg p-4'>
        <h3>Sub total</h3>
        <p>{`$${subTotal}.00`}</p>
        <button className='bg-white w-full mt-16 text-primary-color'>Checkout</button>
      </div>
    </div>}
    
    </>
    
  )
}

export default Cart