import { createSlice } from "@reduxjs/toolkit";
import { getPayloadDataSerivice } from "../../services";
const initialState = {
    status:'idel',
    payloadData:null
}

const payloadSlice = createSlice({
    name:'payload',
    initialState,
    reducers:{},
    extraReducers:{
        [getPayloadDataSerivice.pending]: (state) => {
            state.status = 'pending'
        },
        [getPayloadDataSerivice.fulfilled]: (state,{payload}) => {
            state.status = 'resolved'
            state.payloadData = payload
        },
        [getPayloadDataSerivice.rejected]: (state) => {
            state.status = 'rejected'
        } 
    }
})


export default payloadSlice.reducer