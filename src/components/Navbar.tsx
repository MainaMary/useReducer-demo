import React from 'react'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../context/appContext'

const Navbar = () => {
  const {state} = useShoppingCart()
  return (
    <div className='px-16 md:px-32 md:flex justify-between  w-full h-16 items-center'>
        <p>Shopping Spree</p>
        <Link to="/cart">
        <p>Cart</p>
        <p>{state.cart.length}</p>
        </Link>
        
    </div>
  )
}

export default Navbar