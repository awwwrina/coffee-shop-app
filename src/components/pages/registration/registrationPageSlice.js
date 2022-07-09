import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../config";

const initialState = {
    requestSendingStatus: 'idle',
    error: null
};

export const fetchRegistration = createAsyncThunk(
    'registration/fetchRegistration',
    async (values, {rejectWithValue}) => {
        try {
            const response = await fetch(`${URL}/api/auth/registration`,
            {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            if(!response.ok) {
                throw new Error(await response.text())
            }
            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const registrationPageSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegistration.pending, state => {state.requestSendingStatus = 'request'})
            .addCase(fetchRegistration.fulfilled, (state, action) => {state.requestSendingStatus = 'success'; state.request = action.payload})
            .addCase(fetchRegistration.rejected, (state, action) => {
                state.requestSendingStatus = 'error'; 
                state.error = JSON.parse(action.payload)
            })
            .addDefaultCase(() => {})
    }   
})

const {actions, reducer} = registrationPageSlice;

export const {
    registrationFetching,
    registrationFetched,
    registrationFetchingError,
} = actions;

export default reducer;