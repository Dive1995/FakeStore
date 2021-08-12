import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import {useDispatch} from 'react-redux'
import {removeItem, increaseItemCount, decreaseItemCount} from './redux/productSlice'

function Cart() {
    let cart = []
    cart = useSelector(state => state.products.cart)
    const cartId = cart.map(item => item.id)
    const products = useSelector(state => state.products.products.filter(prod => cartId.includes(prod.id)))

    const dispatch = useDispatch()

    useEffect(() => {
       console.log("Cart rendered");
    })

    let combined = [];

    for(let i =0;i < cart.length; i++){
        combined[i] = {count:cart[i].count, ...products[i]}
    }


console.log(combined);

    const increaseCount = (id ,quantity) => {
        console.log(quantity);
        if(quantity <= 10){
            dispatch(increaseItemCount(id))
        }
    }

    const decreaseCount = (id, quantity) => {
        console.log(quantity);
        if(quantity == 1){
            dispatch(removeItem(id));
            // setCombined(combined.filter(item => item.id !== id))
        }
        else {
            dispatch(decreaseItemCount(id))
        }
    }

    if(cart.length < 1){
        return <div className="cart-page">No products in cart</div>
    }

    return (
        <div className="cart-page">
            {combined.map(item => <CartItem increaseCount={increaseCount} decreaseCount={decreaseCount} {...item}/>)}
            <div className="cart-footer">
                <div className="card-add-more">
                    <button className="btn ">Continue Shopping</button>
                </div>
                <div className="cart-checkout">
                    <button className="btn-outline">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
