import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getCarts=createAsyncThunk("users/getCarts",async()=>{
    const response= await axios.get("https://dummyjson.com/users");
    return response.data;
});
const CartsSlice=createSlice({
    name:"carts",
    initialState:{
        users:[],
        loading:false,
        Error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCarts.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getCarts.fulfilled,(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        });
    },

});
export default CartsSlice.reducer;