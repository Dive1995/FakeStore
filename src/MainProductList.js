import React from 'react'
import {Link, useParams} from 'react-router-dom'

function MainProductList({id,price,title,description,image}) {

    return (
        <div key={id} className="main-product">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="content">
                <Link to={`/product/${id}`} className='see-product'>
                    <h4>{title}</h4>
                </Link>
                <h5>$ {price}</h5>
                <p>{description}</p>
                {/* <button className="btn-outline">See Product</button> */}
                <Link to={`/product/${id}`} className='see-product'>See product &lt;</Link>
            </div>
        </div>
    )
}

export default MainProductList
