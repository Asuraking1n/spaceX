import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPayloadDataSerivice = createAsyncThunk(
    'space/payload',
    async(_,{rejectWithValue})=>{
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PAYLOADS}`
            )
            return data
        } catch (err) {
            return rejectWithValue(err?.response?.data?.errors[0])
        }
    }
)