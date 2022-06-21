import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/useHttp";

import {URL} from '../../../config';


const initialState = {
    beans: [], 
    beansLoadingStatus: 'idle',
    showBtn: true,
    offset: 0
}

export const fetchBeans = createAsyncThunk(
    'beans/fetchBeans',
    async (offset = 0) => {
        const {request} = useHttp();
        return await request(`${URL}/api/coffee/product?limit=${offset+6}&offset=${offset}`)
    }
);

const beansSlice = createSlice({
    name: 'beans',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBeans.pending, state => {state.beansLoadingStatus = 'loading'})
            .addCase(fetchBeans.fulfilled, (state, action) => {
                state.beansLoadingStatus = 'idle';
                state.beans = [...state.beans, ...action.payload];
                if (action.payload.length < 6) {
                    state.showBtn = false;
                }
                state.offset += 6;
            })
            .addCase(fetchBeans.rejected, state => {state.beansLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = beansSlice;

export default reducer;

export const {
    beansFetching,
    beansFetched,
    beansFetchingError
} = actions;