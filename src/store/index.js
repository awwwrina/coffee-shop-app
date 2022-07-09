import { configureStore } from "@reduxjs/toolkit";
import beans from '../components/pages/coffeeBeans/coffeeBeansSlice';
import currentBlend from '../components/pages/fullCardPage/fullCardPageSlice';
import cart from '../components/pages/cartPage/cartPageSlice';
import registration from '../components/pages/registration/registrationPageSlice';
import filters from '../components/filters/filtersSlice';
import user from '../components/pages/loginPage/loginPageSlice';

const store = configureStore({
    reducer: {beans, currentBlend, cart, registration, filters, user},
    devTools: process.env.NODE_ENV !== 'production',
})

const saveCart = () => {
    let oldCart = window.localStorage.getItem('cart');

    return () => {
        const cart = store.getState().cart.blends || [];
        const serialCart = JSON.stringify(cart);

        if (cart !== oldCart) {
            window.localStorage.setItem('cart', serialCart);
        }
        oldCart = serialCart;
    };
};

store.subscribe(saveCart());

export default store;