import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "./slices/historyData/HistorySlice";
export const store = configureStore({
    reducer:{
        'history':historyReducer
    }
})