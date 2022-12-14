import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getUsers=createAsyncThunk("users/getUsers",async()=>{
    const response= await axios.get("https://dummyjson.com/users");
    return response.data;
});
const UserSlice=createSlice({
    name:"users",
    initialState:{
        users:[],
        loading:false,
        Error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getUsers.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getUsers.fulfilled,(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        });
    },

});
export default UserSlice.reducer;