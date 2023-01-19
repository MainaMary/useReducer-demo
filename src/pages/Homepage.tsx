import React from 'react'
import ProductCard from '../components/ProductCard'
import { useShoppingCart } from '../context/appContext'
import Filters from '../components/Filters'
import { useEffect } from 'react'
const Homepage = () => {
  const { state: { products }, filters:{searchParam, fastDelivery} } = useShoppingCart()
  let productList = products
  useEffect(()=>{

  },[])
  const updatedProducts =()=>{
   
    if(searchParam){
     productList = products.filter(label =>label.name.toLowerCase().includes(searchParam))
    }
    if(fastDelivery){
      productList = productList.filter(item =>item.delivery)
    }
    
    return productList
  }

  return (
    <>
    <Filters/>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-16 mt-3 '>
        {updatedProducts().map(product => <ProductCard key={product.id} {...product} product={product} />)}
      </div>
    </>

  )
}

export default Homepage