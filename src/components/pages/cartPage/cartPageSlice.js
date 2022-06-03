import { createSlice } from "@reduxjs/toolkit"
const initialState =  {
    blends: JSON.parse(localStorage.getItem('cart'))
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        blendAdded(state, action) {
            // state.blends = [...state.blends, action.payload]
            const {id: actionId, count} = action.payload
            const index = state.blends.findIndex((item) => item.id === actionId);
            if (index === -1) {
                state.blends = [...state.blends, action.payload]
            } 
               else { state.blends[index].quantity += 1;
            }

        },
            
        quantityChanged(state, action) {
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
        },
        
        
    }
})

const {actions, reducer} = cartSlice;

export default reducer;

export const {
    blendAdded,
    quantityChanged,
    blendDeleted
} = actions;
