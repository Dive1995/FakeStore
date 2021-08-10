import React from 'react'
import {Link} from 'react-router-dom'

function ProductItem({id,title,image,price,description,category}) {
    return (
        <Link to={`/product/${id}`} className='product-item card' key={id}>
            <div className="card-image" >
                <img src={image} alt={title} className="img" />
            </div>
            <div className="card-gap"></div>
            <div className="card-content">
                <div className="card-title">{title}</div>
                <div className="card-desc">$ {price}</div>
            </div>
            {/* <div className="card-button"></div> */}
        </Link>
    )
}

export default ProductItem
