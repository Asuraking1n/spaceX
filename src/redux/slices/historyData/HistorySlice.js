import { createSlice } from "@reduxjs/toolkit";
import { getHistoryDataSerivice } from "../../services";
const initialState = {
    status:'idel',
    historyData:null
}

const historySlice = createSlice({
    name:'history',
    initialState,
    reducers:{},
    extraReducers:{
        [getHistoryDataSerivice.pending]: (state) => {
            state.status = 'pending'
        },
        [getHistoryDataSerivice.fulfilled]: (state,{payload}) => {
            state.status = 'resolved'
            state.historyData = payload
        },
        [getHistoryDataSerivice.rejected]: (state) => {
            state.status = 'rejected'
        } 
    }
})


export default historySlice.reducer