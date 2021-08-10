import React, { useState } from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import ProductItem from './ProductItem';
import {getProductCategory, getProducts} from './redux/productSlice'
import Categories from './Categories'


function FeaturedProducts() {

    const products = useSelector(state => state.products.products)
    const isLoading = useSelector(state => state.products.status)
    const categories = [...new Set(products.map((item) => item.category))];
    const [activeTab,setActiveTab] = useState('')
    // const [categories,setCategories] = useState(allCategories);

    const [categorizedProducts,setCategorizedProducts] = useState([])

// console.log(categories[0]);
    
    useEffect(() => {
        filterProducts(categories[0]);
        setActiveTab(categories[0]);
    },[products])

    const filterProducts = (category) => {
        const prod = products.filter(product => product.category === category)
        setCategorizedProducts(prod)
    }

    const handleCategories = (category) => {
        filterProducts(category)
        setActiveTab(category)
    }
    

    if(isLoading === "loading"){
        return <div className="loading"></div>
    }

    return (
        <div className="feature">
            <div className="title">
                <h4>Featured Products</h4>
                <div className="title-underline"></div>
                <div className="category-tabs">
                    {/* display all categories */}
                    {categories.map((category, index) => <Categories key={index} activeTab={activeTab} handleCategories={handleCategories} category={category}/>)}
                </div>
                <div className="cards">
                    {categorizedProducts.map(product => <ProductItem key={product.id} {...product}/>)}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
