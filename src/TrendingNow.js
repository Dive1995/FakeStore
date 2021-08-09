import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ProductItem from './ProductItem';
import {getProducts} from './redux/productSlice'

function TrendingNow() {

    const products = useSelector(state => state.products.products)
    const isLoading = useSelector(state => state.products.status)
    const trendingProducts = products.filter(product => product.id % 2 === 0 && product.id < 10)
    console.log(trendingProducts);


    // if(isLoading === "loading"){
    //     return <div className="loading"></div>
    // }

    return (
        <div className="trending">
            <div className="title">
                <h4>Trending now</h4>
                <div className="title-underline"></div>
            </div>
            <div className="trending-products cards">
                {trendingProducts.map(product => <ProductItem {...product}/>)}
            </div>
        </div>
    )
}

export default TrendingNow

