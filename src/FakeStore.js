import React, { useEffect } from 'react'
import {getProducts} from './redux/productSlice'
import {useSelector,useDispatch} from 'react-redux'


// const url = 'https://fakestoreapi.com/products';

function FakeStore() {
  
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    console.log(products);
    
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])



    return (
        <div>
            
        </div>
    )
}

export default FakeStore
