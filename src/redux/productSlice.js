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
                id:Number(action.payload.id),
                count:Number(action.payload.count)
            }
            state.cart.push(product)
        },
        removeItem:(state, action) => {
            // console.log(action.payload.id);
            // void (state.cart = state.cart.filter(item => parseInt(item.id) !== action.payload.id))
            const index = state.cart.findIndex(item => Number(item.id) === action.payload)
            state.cart.splice(index,1)
        },
        increaseItemCount : (state, action) => {
            //     void (state.cart = state.cart.map(item => {
            //     if(parseInt(item.id) === action.payload.id){
            //         return {...item, count: parseInt(item.count) + 1}
            //     }
            //     return item
            // }))
            console.log(action.payload);
            const index = state.cart.findIndex(item => Number(item.id) === action.payload)
            console.log(index);
            state.cart[index].count = state.cart[index].count + 1;
        },
        decreaseItemCount : (state, action) => {
            // void (state.cart = state.cart.map(item => {
            //     if(parseInt(item.id) === action.payload.id){
            //         return {...item, count: parseInt(item.count) - 1}
            //     }
            //     return item
            // }))

            const index = state.cart.findIndex(item => Number(item.id) === action.payload)
            state.cart[index].count = state.cart[index].count - 1;
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

export const {addToCart, removeItem, increaseItemCount, decreaseItemCount} = productSlice.actions;

export default productSlice.reducer;