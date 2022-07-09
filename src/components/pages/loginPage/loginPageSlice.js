import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../config";

const initialState = {
    email: null,
    name: null,
    error: null,
    loadingStatus: 'idle'
};
export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async (values, {rejectWithValue}) => {
        try {
            const response = await fetch(`${URL}/api/auth/login`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            if(!response.ok) {
                throw new Error(response.body)
            }
            const data = await response.json();

            console.log(data)

            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('name', data.user.name);

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
const loginPageSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state, action) => {
                state.loadingStatus = 'loading';
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.email = action.payload.user.email;
                state.name = action.payload.user.name;
                state.loadingStatus = 'idle'
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                console.log(action.payload);
                state.error = action.payload;
            })
    }
})

const {actions, reducer} = loginPageSlice;

export const {
    userFetching,
    userFetched,
    userFetchingError,
    setUser,
    removeUser
} = actions;

export default reducer;