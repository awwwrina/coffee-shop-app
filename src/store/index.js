import { configureStore } from "@reduxjs/toolkit";
import beans from '../components/pages/coffeeBeans/coffeeBeansSlice';
import currentBlend from '../components/pages/fullCardPage/fullCardPageSlice';
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

const saveCart = () => {
    let oldCart = window.localStorage.getItem('cart');

    return () => {
        const cart = store.getState().cart.blends;
        const serialCart = JSON.stringify(cart);

        if (cart !== oldCart) {
            window.localStorage.setItem('cart', serialCart);
        }
        oldCart = cart;
    };
};

 store.subscribe(saveCart());

export default store;