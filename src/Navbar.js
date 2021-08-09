import React from 'react'

function Navbar() {
    return (
        <div className="nav-container">
            <div className="navbar">
                {/* logo */}
                <div className="nav-logo">
                    <h2>Fake<span className="primary">Store</span></h2>
                </div>
                {/* menu items */}
                <div>
                <ul className="nav-menu">
                    <li className="list">Home</li>
                    <li className="list">Products</li>
                    <li className="list">Contact</li>
                    <li className="list">About us</li>
                </ul>
                </div>
                
                {/* login / cart */}
                <div className="nav-login">
                    <a className="login" href="#">Login</a>
                </div>

            </div>

        </div>
    )
}

export default Navbar
