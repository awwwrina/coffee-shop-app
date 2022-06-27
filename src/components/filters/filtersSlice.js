import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [
        {"filter": "All"},
        {"filter": "Brazil"},
        {"filter": "Kenya"},
        {"filter": "Columbia"}
    ],
    activeFilter: 'All'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload;
        }    
    }
})

const {actions, reducer} = filtersSlice;

export default reducer;

export const {
    activeFilterChanged
} = actions;