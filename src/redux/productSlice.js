import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://fakestoreapi.com/products'

export const getProducts = createAsyncThunk('products/getProducts',async (id="") => {
    try{
        const resp = await fetch(`${url}/${id}`);
        if(!resp.ok){
            let msg = `Error ${resp.status} occured`
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
        status:null
    },
    // reducers:{
        
    // },
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

// export const {getProducts} = productSlice.actions;

export default productSlice.reducer;