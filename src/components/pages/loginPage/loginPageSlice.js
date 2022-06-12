import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/useHttp";

const initialState = {
    email: null,
};

export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async (data, token) => {
        const {request} = useHttp();
        const url = 'http://localhost/';
        return await 
            request(
                `${url}api/auth/login`,
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
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
        },
        removeUser(state) {
            state.email = null;
        }

    }
})

const {actions, reducer} = loginPageSlice;

export const {
    setUser,
    removeUser
} = actions;

export default reducer;