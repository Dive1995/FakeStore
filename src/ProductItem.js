import React from 'react'

function ProductItem({id,title,image,price,description,category}) {
    return (
        <div className='product-item card' key={id}>
            <div className="card-image" >
                <img src={image} alt={title} className="img" />
            </div>
            <div className="card-gap"></div>
            <div className="card-content">
                <div className="card-title">{title}</div>
                <div className="card-desc">$ {price}</div>
            </div>
            {/* <div className="card-button"></div> */}
        </div>
    )
}

export default ProductItem
