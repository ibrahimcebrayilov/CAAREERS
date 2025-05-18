import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk("api/getproduct", async() => { 
    const response = await axios.get("http://localhost:5050/products")
    return response.data
})
export const postProductsThunk = createAsyncThunk("api/postproduct", async(data) => {
    const response = await axios.post("http://localhost:5050/products", data)
    return response.data
})
export const deleteProductsThunk = createAsyncThunk("api/deleteproduct", async(id) => {
    const response = await axios.delete(`http://localhost:5050/products/${id}`)
    return id
})


export const productsSlice = createSlice({
    name:"products",
    initialState:{
        products:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getProductsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.products= action.payload
        })
        .addCase(getProductsThunk.pending, (state, action) => {
            state.loading = true;
          
        })
        .addCase(getProductsThunk.rejected, (state, action) => {
            state.loading = false;
            state.error= action.error
        })

        .addCase(postProductsThunk.fulfilled, (state, action) => {
            state.products.push(action.payload)
        })

        .addCase(deleteProductsThunk.fulfilled, (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
        })
    }
})

export default productsSlice.reducer