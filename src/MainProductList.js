import React from 'react'

function MainProductList({id,price,title,description,image}) {

    return (
        <div key={id} className="main-product">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="content">
                <h4>{title}</h4>
                <h5>$ {price}</h5>
                <p>{description}</p>
                {/* <button className="btn-outline">See Product</button> */}
                <a href="" className='see-product'>See product > </a>
            </div>
        </div>
    )
}

export default MainProductList
