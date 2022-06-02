import { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../miniCardItem/MiniCardItem';
import Navigation from '../../navigation/Navigation';
import ShoppingCartItem from '../../shoppingCartItem/ShoppingCartItem';

import './cart.scss';

const Cart = () => {
    const blends = useSelector(state => state.cart.blends);

    const [total, setTotal] = useState(0);
    const qw = (price) => {
        console.log(price);
        setTotal(total => total + price)
    }

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
                    {blends.map(item => <ShoppingCartItem {...item} key={item.id} qw={qw}/>)}
                </div>

                <div className="cart__subtotal">
                    <div className="title">
                        Cart subtotal:
                    </div>
                    <div className="sum">${total}.00</div>
                </div>
            </section>

            
        </>
    )
}


export default Cart;