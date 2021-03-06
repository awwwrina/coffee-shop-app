import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/useHttp";
import { URL } from "../../../config";

const initialState = {
    currentBlend: [],
    loadingStatus: 'idle'
}

export const fetchCurrentBlend = createAsyncThunk(
    'beans/fetchCurrentBlend',
    async (id) => {
        const {request} = useHttp();
        return await request(`${URL}/api/coffee/product/${id}`)
    }
)

const currentBlendSlice = createSlice({
    name: 'currentBlend',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentBlend.pending, state => {state.loadingStatus = 'loading'})
            .addCase(fetchCurrentBlend.fulfilled, (state, action) => {
                state.loadingStatus = 'idle';
                state.currentBlend = action.payload;
            })
            .addCase(fetchCurrentBlend.rejected, state => {state.loadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})
const {actions, reducer} = currentBlendSlice;

export default reducer;

export const {
    currentBlendFetching,
    currentBlendFetched, 
    currentBlendFetchingError
} = actions;