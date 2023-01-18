import React from 'react'
import ProductCard from '../components/ProductCard'
import { useShoppingCart } from '../context/appContext'
const Homepage = () => {
  const {state:{products}}= useShoppingCart()
   
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 '>{products.map(product=><ProductCard key={product.id} {...product} product={product}/>)}</div>
  )
}

export default Homepage