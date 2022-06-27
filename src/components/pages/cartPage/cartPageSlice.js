import { createSlice } from "@reduxjs/toolkit"
const initialState =  {
    blends: JSON.parse(localStorage.getItem('cart')),
    subtotal: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        blendAdded(state, action) {
            const {id: actionId} = action.payload
            const index = state.blends.findIndex((item) => item.id === actionId);
            if (index === -1) {
                state.blends = [...state.blends, action.payload]
            } 
               else { state.blends[index].quantity += 1;
            }
        },
            
        quantityChanged(state, action) {
            const {id: actionId, count, price} = action.payload;
            const index = state.blends.findIndex(({id}) => id === actionId);
            if (index === -1) {
                return;
            }
            if (count === 0) {
                console.log(state.blends.splice([index], 1))
            } else {
                state.blends[index].quantity = count;
                state.blends[index].amount = price * state.blends[index].quantity
                state.subtotal = state.blends.map(item => item.amount).reduce((a,b)=>a+b);
            }

            
        },
        
        blendDeleted(state, action) {
            const {id: actionId} = action.payload;
            const index = state.blends.findIndex(({id}) => id === actionId);
            if (index === -1) {
                return;
            }
            state.blends.splice([index], 1)
            
            const amountArray =  state.blends.map(item => item.amount);
            if (amountArray.length === 0) {
                return;
            } else {
                state.subtotal = amountArray.reduce((a,b)=>a+b);
            }

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
