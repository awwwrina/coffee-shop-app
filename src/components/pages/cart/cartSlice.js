import { createSlice } from "@reduxjs/toolkit"
const initialState =  {
    blends: JSON.parse(localStorage.getItem('cart'))
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        blendAdded(state, action) {
            state.blends = [...state.blends, action.payload]
            const {id: actionId} = action.payload
            const aa = state.blends.find(item => item.id)

            console.log(aa)

        },
            
        quantityChanged(state,action) {
            const {id: actionId, count} = action.payload;
            const index = state.blends.findIndex(({id}) => id === actionId);
            if (index === -1) {
                return;
            }
            state.blends[index].quantity = count;
        },
        blendDeleted(state, action) {
            const {id: actionId} = action.payload;
            const index = state.blends.findIndex(({id}) => id === actionId);
            if (index === -1) {
                return;
            }
            state.blends.splice([index], 1)
        }
        
    }
})

const {actions, reducer} = cartSlice;

export default reducer;

export const {
    blendAdded,
    quantityChanged,
    blendDeleted
} = actions;
