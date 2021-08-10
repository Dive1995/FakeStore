import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const url = 'https://fakestoreapi.com/products'

export const getProducts = createAsyncThunk('products/getProducts',async (url) => {
    try{
        const resp = await fetch(url);
        if(!resp.ok){
            let msg = `Error ${resp.status} occured`
            throw new Error(msg)
        }else if(resp.status == 522){
            let msg = "Connection Time Out, Please try again later."
            throw new Error(msg)
        }
        const products = await resp.json();
        return products;

    }catch(error){
        console.log(error);
    }
})


export const productSlice = createSlice({
    name:"products",
    initialState:{
        products:[],
        cart:[],
        status:null
    },
    reducers:{
        addToCart : (state, action) => {
            const product = {
                id:action.payload.id,
                count:action.payload.count
            }
            state.cart.push(product)
        },

    },
    extraReducers:{
        [getProducts.pending] : (state, action) => {
            // return action.payload.products;
            state.status = "loading"
        },
        [getProducts.fulfilled] : (state, action) => {
            // return action.payload.products;
            state.status = "success"
            state.products.push(...action.payload)
        },
      
    }
})

export const {addToCart} = productSlice.actions;

export default productSlice.reducer;