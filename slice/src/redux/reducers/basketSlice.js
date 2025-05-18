import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketThunk = createAsyncThunk("api/getbasket", async() => {
    const response = await axios.get("http://localhost:5050/basket")
    return response.data
})
export const postBasketThunk = createAsyncThunk("api/postbasket", async(data) => {
    const response = await axios.post("http://localhost:5050/basket", data)
    return response.data
})
export const deleteBasketThunk = createAsyncThunk("api/deletebasket", async(id) => {
    const response = await axios.delete(`http://localhost:5050/basket/${id}`)
    return id
})


export const basketSlice = createSlice({
    name:"basket",
    initialState:{
        basket:[]
    },
    extraReducers:(builder) => {
        builder
        .addCase(getBasketThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.basket= action.payload
        })
        .addCase(getBasketThunk.pending, (state, action) => {
            state.loading = true;
          
        })
        .addCase(getBasketThunk.rejected, (state, action) => {
            state.loading = false;
            state.error= action.error
        })

        .addCase(postBasketThunk.fulfilled, (state, action) => {
            state.basket.push(action.payload)
        })

        .addCase(deleteBasketThunk.fulfilled, (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload)
        })
    }
})

export default basketSlice.reducer