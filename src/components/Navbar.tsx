import React from 'react'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../context/appContext'
import {BsFillCartFill} from "react-icons/bs"

const Navbar = () => {
  const { state } = useShoppingCart()
  return (
    <nav className='px-16 text-2xl md:px-32 bg-primary-color text-white md:flex justify-between  w-full h-16 items-center'>
      <Link to="/"><h1>Shopping Spree</h1></Link>
      <Link to="/cart">
        <div className='flex'>
          <div><BsFillCartFill/></div>
          <p>{state.cart.length}</p>
        </div>

      </Link>

    </nav>
  )
}

export default Navbar