import React ,{useState, useEffect} from 'react'
import { ProductsProps, ActionTypes } from '../model/types';
import { useShoppingCart } from '../context/appContext';

interface SingleProduct {
    product: ProductsProps
}
const ProductCard = ({ product }: SingleProduct) => {
    const [isInCart, setIsInCart] = useState(false)
    const { name, image, price, delivery ,id} = product
    const { state, dispatch } = useShoppingCart()
    const { cart } = state
    const handleAddToCart = (product: ProductsProps) => {
        dispatch({ type: ActionTypes.Add, payload: product })
    }
    const handleRemoveFromCart = (productId:string)=>{
        console.log(productId)
        dispatch({ type: ActionTypes.Delete, payload: productId })
    }
    useEffect(()=>{
        const productIsInCart = cart.find(product =>product.id === id)
        if(productIsInCart){
            setIsInCart(true)
        }else{
            setIsInCart(false)
        }

    },[cart, id])
    return (
        <div className="shadow-lg rounded-sm px-2 bg-white text-center md:text-start md:px-8 py-4">
            <img src={image} alt={name} className="w-full rounded-sm mb-2"/>
            <p>{name}</p>
            <p className='my-2'>{`$${price.split('.')[0]}.00`}</p>
            <div> <h3>{delivery ? 'Fast delivery':'3 days delivery'}</h3></div>
           
            <div>
                { 
                isInCart
                ? <button onClick={() =>handleRemoveFromCart(product.id)}>Remove from cart</button> :
                <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                
                }       
            </div>

        </div>


    )
}

export default ProductCard