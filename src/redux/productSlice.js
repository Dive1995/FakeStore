import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const url = 'https://fakestoreapi.com/products'

export const getProducts = createAsyncThunk('products/getProducts',async (url) => {
    try{
        const resp = await fetch(url);
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

export const getProductCategory = createAsyncThunk('products/getProductCategory',
    async (url,category) => {
        try{
            const resp = await fetch(`${url}/category/${category}`)
            if(!resp.ok){
                throw new Error(`Error occured ${resp.status}`);
            }

            const result = await resp.json()
            return result;

        }catch(error){
            console.log(error);
        }
    }
)

export const getLimittedProducts = createAsyncThunk(
    "products/getLimittedProducts",
    async (url,limitNumber) => {
        try{
            const resp = await fetch(`${url}?limit=${limitNumber}`);
            const result = await resp.json();
            return result;
        }catch(err){
            console.log(err);
        }
    }
)


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
        // [getProductCategory.pending] : (state, action) => {
        //     state.status = 'loading'
        // },
        // [getProductCategory.fulfilled] : (state, action) => {
        //     state.status = "success"
        //     state.category.push(...action.payload)
        //     // return action.payload.result
        // },
        // [getLimittedProducts.pending] : (state, action) => {
        //     state.status = "loading";
        // },
        // [getLimittedProducts.fulfilled] : (state, action) => {
        //     state.limitted.push(action.payload);
        // }
    }
})

// export const {getProducts} = productSlice.actions;

export default productSlice.reducer;