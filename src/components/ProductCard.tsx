import React from 'react'
import { ProductsProps, ActionTypes } from '../model/types';
import { useShoppingCart } from '../context/appContext';

interface SingleProduct {
    product: ProductsProps
}
const ProductCard = ({ product }: SingleProduct) => {
    const { name, image, price, delivery } = product
    const { state, dispatch } = useShoppingCart()
    const { cart } = state
    const handleAddToCart = (product: ProductsProps) => {
        dispatch({ type: ActionTypes.Add, payload: product })
    }
    console.log(state)
    return (
        <div className="shadow-lg rounded-sm px-2 md:px-8 py-4">
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{price.split('.')[0]}</p>
            <div>{delivery ? <h2>Fast delivery</h2> : <h2>3 days delivery</h2>}</div>
            <div>
                {cart.length && cart.some(prod => prod.id !== product.id ? <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                    : <button>Remove from cart</button>)}
            </div>
        </div>


    )
}

export default ProductCard