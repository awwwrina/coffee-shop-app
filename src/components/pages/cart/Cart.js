import Navigation from '../../navigation/navigation';
import ShoppingCartItem from '../../shoppingCartItem/ShoppingCartItem';

import './cart.scss';

const Cart = () => {
    return(
        <>
            <section className="header header__cart">
                <Navigation color='white'/>
                <h1 className="title">Shopping cart</h1>
            </section>

            <section className="cart">
                
                <h2 className="cart__description">Description</h2>
                <h2 className="cart__weight">Weight</h2>
                <h2 className="cart__quantity">Quantity</h2>
                <h2 className="cart__price">Price</h2>
                <h2 className="cart__remove">Remove</h2>
                
                
                <div className="cart__items">
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                </div>

                <div className="cart__subtotal">
                    <div className="title">
                        Cart subtotal:
                    </div>
                    <div className="sum">$33.00</div>
                </div>
            </section>

            
        </>
    )
}


export default Cart;