import React,{useState, useEffect} from 'react'
import MainProductList from './MainProductList'
import Sidebar from './Sidebar'
import {useSelector} from 'react-redux'


function Products() {
    const products = useSelector(state => state.products.products)
    // console.log(products);
    const categories = [...new Set(products.map(item => item.category))]
    const [categorizedProducts, setcategorizedProducts] = useState([])
    const [currentCategory,setCurrentCatogory] = useState('')
    const isLoading = useSelector(state => state.products.status)

    const setProducts = (category) => {
        const prod = products.filter(item => item.category === category);
        setcategorizedProducts(prod)
        setCurrentCatogory(category)
    }

    const filterProductsByPrice = (lower, upper) => {
        const filteredProd = products.filter(prod => prod.price <= upper && prod.price > lower && prod.category === currentCategory)
        setcategorizedProducts(filteredProd)
    }

    useEffect(() => {
        setProducts(categories[0])
    }, [products])

    const handleCategories = (category) => {
        setProducts(category)
    }

    // console.log(categorizedProducts);

    // if(isLoading === "loading"){
    //     return <div className="loading"></div>
    // }

    return (
        <div className="products">
            <div className="product-container">
                <div className="product-sidebar">
                    <Sidebar filterProductsByPrice={filterProductsByPrice} categories={categories} handleCategories={handleCategories}/>
                    {/* <h3>Side Bar</h3> */}
                </div>
                <div className="product-main-content">
                    <div className="content">
                        <h3>{currentCategory}</h3>
                        {categorizedProducts.length < 1 && <h5>No products found</h5>}
                        {categorizedProducts && categorizedProducts.map(item => <MainProductList {...item}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products