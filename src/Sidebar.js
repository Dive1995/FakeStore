import React from 'react'


function Sidebar({categories,handleCategories,filterProductsByPrice}) {

    return (
        <div className="sidebar">
            <div className="sidebar-category">
                <h5>Categories</h5>
                <ul>
                    {categories.map(item => <li><a onClick={() => handleCategories(item)}>{item}</a></li>)}

                </ul>
            </div>
            <div className="sidebar-price">
                <h5>Price</h5>
                <ul>
                    <li><a onClick={() => filterProductsByPrice(0, 100)}>less than $100</a></li>
                    <li><a onClick={() => filterProductsByPrice(100, 200)}>$100 - $200</a></li>
                    <li><a onClick={() => filterProductsByPrice(200, 300)}>$200 - $300</a></li>
                    <li><a onClick={() => filterProductsByPrice(300, 400)}>$300 - $400</a></li>
                    <li><a onClick={() => filterProductsByPrice(400, 10000)}>above $400</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
