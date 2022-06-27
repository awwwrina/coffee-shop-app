import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../config";
import { useHttp } from "../../../hooks/useHttp";

const initialState = {
    email: null
};

export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async (data, token) => {
        const {request} = useHttp();
        return await 
            request(
                `${URL}api/auth/login`,
                'POST',
                JSON.stringify(data),
                {
                    'Authorization': `bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            )
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