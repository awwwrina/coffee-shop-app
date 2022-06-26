import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/useHttp";

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
        const url = 'https://91nthnxin2.execute-api.us-east-2.amazonaws.com/';
        return await request(`${url}api/coffee/product?limit=${offset+6}&offset=${offset}`)
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

export const filteredCardsSelector = createSelector(
    state => state.filters.activeFilter,
    state => state.beans.beans,
    (filter, beans) => {
        if (filter === 'All') {
            return beans;
        } else {
            return beans.filter(item => item.country === filter);
        }
    }

)

const {actions, reducer} = beansSlice;

export default reducer;

export const {
    beansFetching,
    beansFetched,
    beansFetchingError
} = actions;