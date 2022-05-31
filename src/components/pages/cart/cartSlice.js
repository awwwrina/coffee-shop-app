import { createSlice } from "@reduxjs/toolkit"
const initialState =  {
    blends: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        blendAdded(state, action) {
            state.blends = [...state.blends, action.payload]},
        quantityChanged(state,action) {
            const {id: actionId, count} = action.payload;
            const index = state.blends.findIndex(({id}) => id === actionId);
            state.blends[index].quantity = count;
        }
    }
})

const {actions, reducer} = cartSlice;

export default reducer;

export const {
    blendAdded,
    quantityChanged
} = actions;
