import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../context/appContext'
import { ProductsProps } from '../model/types'
import { ActionTypes } from '../model/types'

interface CartProps {
  cartItem: ProductsProps
}
export const CartCard = ({cartItem}:CartProps) =>{
  const [count, setCount] =useState(1)
  const { name, image, price, delivery , id} = cartItem
  const {dispatch} = useShoppingCart()
  const removeItem = (id:string) =>{
    dispatch({
      type: ActionTypes.Delete,
      payload: id
    })
  }
  return <div className='shadow-lg rounded-md w-full'>
  <div className='grid grid-cols-1 md:grid-cols-5'>
    <img src={image} alt={name}/>
    <p>{name}</p>
    <p>{price}</p>
    <p>{delivery}</p>
    <div className='grid grid-cols-3 '>
      <p>+</p>
      <p>{count}</p>
      <p>-</p>
    </div>
    <></>

  </div>
  <div>
    <button onClick={() => removeItem(id)}>Remove from cart</button>
  </div>
  </div>
  
}
const Cart = () => {
  const {state:{cart}, dispatch} = useShoppingCart()
  return (
    <div className='flex gap-3'>
      <div className='w-[80%]'>
        {!cart.length ? <p>Cart is empty. <Link to="/">Add items</Link></p>:cart.map(item =><CartCard key={item.id} cartItem={item}/>)}
      </div>
      <div className='w-[20%]'>
        <p>Sub total</p>
      </div>
    </div>
  )
}

export default Cart