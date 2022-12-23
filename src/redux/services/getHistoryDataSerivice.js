import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHistoryDataSerivice = createAsyncThunk(
    'space/history',
    async(_,{rejectWithValue})=>{
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_HISTORY}`
            )
            return data
        } catch (err) {
            return rejectWithValue(err?.response?.data?.errors[0])
        }
    }
)