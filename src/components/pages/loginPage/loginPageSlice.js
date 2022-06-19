import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/useHttp";
import { useNavigate } from "react-router-dom";
const initialState = {
    email: null,
    name: null,
    error: null,
    loadingStatus: 'idle'
};

export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async (data, token, rejectWithValue) => {
        const url = 'http://localhost/';
        try {
            const response = await fetch(`${url}api/auth/login`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if(!response.ok) {
                throw new Error(response.body)
            }
            const data1 = await response.json();
            sessionStorage.setItem('token', data1.token)

            return data1;
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