import React from 'react'
import { useSelector } from 'react-redux'
import {useParams, Link, NavLink, useLocation} from 'react-router-dom'

function Navbar() {
    const cart = useSelector(state => state.products.cart.map(item => item.count))
    console.log(cart);
    let totalCount = cart.reduce((total, item) => {
        console.log(item);
        return parseInt(item) + total
    },0)


    return (
        <div className="nav-container">
            <div className="navbar">
                {/* logo */}
                <Link to="/" className="nav-logo">
                    <h2>Fake<span className="primary">Store</span></h2>
                </Link>
                {/* menu items */}
                <div>
                <ul className="nav-menu">
                    <li className="list">
                        <NavLink exact activeClassName="active" to="/">Home</NavLink> 
                    </li>
                    <li className="list">
                        <NavLink activeClassName="active" to="/products">Products</NavLink>
                    </li>
                    <li className="list">
                        <Link>Contact</Link>
                    </li>
                    <li className="list">
                        <Link>About us</Link>
                    </li>
                </ul>
                </div>
                
                {/* login / cart */}
                <div className="nav-login">
                    <NavLink to="/cart" activeClassName="cart-active" className="cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <p>{totalCount}</p>
                    </NavLink>
                    <a className="login" href="#">Login</a>
                </div>

            </div>

        </div>
    )
}

export default Navbar
