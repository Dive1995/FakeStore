import React, { useState } from 'react'
import { useEffect } from 'react';


function CartItem({id,title, image, price, count, increaseCount, decreaseCount}) {
    return (
        <div key={id} className="cart-item">
            <div className="cart-image">
                <img src={image} alt="" />
            </div>
            <div className="cart-details">
                <h5>{title}</h5>
                <h6>$ {price}</h6>
            </div>
            <div className="cart-count">
                <svg onClick={() => increaseCount(id, count)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>
                <h5>{count}</h5>
                <svg onClick={() => decreaseCount(id, count)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
            </div>
        </div>
    )
}

export default CartItem
