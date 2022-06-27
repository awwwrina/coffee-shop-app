import { useSelector } from 'react-redux';
import Navigation from '../../navigation/Navigation';
import ShoppingCartItem from '../../shoppingCartItem/ShoppingCartItem';


import './cartPage.scss';

const CartPage = () => {
    const cart = useSelector(state => state.cart.blends);

    return(
        <>
            <section className="header header__cart">
                <Navigation color='white'/>
                <h1 className="title">Shopping cart</h1>
            </section>
            {cart.length !== 0 && <Cart/>}
            {cart.length === 0 && <EmptyCart/>}

        </>
    )
}

const Cart = () => {
    const blends = useSelector(state => state.cart.blends);
    const subtotal = useSelector(state => state.cart.subtotal)

    return(
        <>
            <section className="cart">
                
                <h2 className="cart__description">Description</h2>
                <h2 className="cart__weight">Weight</h2>
                <h2 className="cart__quantity">Quantity</h2>
                <h2 className="cart__price">Price</h2>
                <h2 className="cart__remove">Remove</h2>
                
                
                <div className="cart__items">
                    {blends.map(item => 
                        <ShoppingCartItem {...item} key={item.id} />)}
                </div>

                <div className="cart__subtotal">
                    <div className="title">
                        Cart subtotal:
                    </div>
                    <div className="sum">${subtotal}.00</div>
                </div>
            </section>
        </>
    )
}

const EmptyCart = () => {
    return(
        <h2 className="empty-cart">Your shopping cart is empty</h2>
    )
}



export default CartPage;