import { configurestore } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice";
export const store = configurestore({
    reducer:{
        search:searchReducer,
    }
})