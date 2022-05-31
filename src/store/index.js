import { configureStore } from "@reduxjs/toolkit";
import beans from '../components/pages/coffeeBeans/coffeeBeansSlice';
import currentBlend from '../components/full-card-page/fullCardSlice';
import cart from '../components/pages/cart/cartSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};


const store = configureStore({
    reducer: {beans, currentBlend, cart},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;