
import User from "./CounterSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store=configureStore({
    reducer:{
       UserReducer:User 
    }
})