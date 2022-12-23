import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "./slices/historyData/HistorySlice";
import PayloadReducer from "./slices/payloadData/PayloadSlice";
export const store = configureStore({
    reducer:{
        'history':historyReducer,
        'payload':PayloadReducer
    }
})