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
        <div className="shadow-lg rounded-sm px-2 md:px-8 py-4">
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{price.split('.')[0]}</p>
            <div>{delivery ? <h2>Fast delivery</h2> : <h2>3 days delivery</h2>}</div>
           
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