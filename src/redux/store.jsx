import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import UserReducer from "./UserSlice";
import CartsReducer from "./CartSlice";
const reducer=combineReducers({
    users:UserReducer,
    carts:CartsReducer
});
const store=configureStore({
    reducer,
});
export default store;