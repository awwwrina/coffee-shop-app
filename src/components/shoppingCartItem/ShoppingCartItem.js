import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCurrentBlend } from '../pages/fullCardPage/fullCardPageSlice';
import { quantityChanged, blendDeleted } from '../pages/cartPage/cartPageSlice';
import { SERVER_ADDRESS, SERVER_PORT } from '../../config';
import QuantityCounter from '../quantityCounter/QuantityCounter';
import bin from '../../icons/bin.png';
import './shoppingCartItem.scss';

import { useSelector } from 'react-redux';
const ShoppingCartItem = ({id, name, weight, price}) => {

    const cartItems = useSelector(state => state.cart.blends);
    const index = cartItems.findIndex(item => item.id === id);
    const currentItem = cartItems[index];
    const quantity = currentItem.quantity

    const [count, setCount] = useState(quantity);
    const dispatch = useDispatch();
    const path = `http://${SERVER_ADDRESS}:${SERVER_PORT}/${id}.jpg`;

    const {productId} = useParams();

    useEffect(() => {
        dispatch(quantityChanged({id, count, price}));
        dispatch(fetchCurrentBlend(productId));
    }, [count])

    

    return(
        <>
            <div className="wrapper-item">
                <Link 
                    style={{textDecoration: 'none', color: 'black'}}
                    to={`/our-coffee/${id}`}>
                <div className="description">
                    <div className="img-wrapper">
                        <img src={path} alt={name} />
                    </div>

                    <div className="title">{name}</div>
                </div>
                </Link>
               
                <div className="weight">
                    {weight} kg
                </div>
                <QuantityCounter count={count} setCount={setCount} id={id}/>
                <div className="price">${price}.00</div>
                <button 
                    className="remove"
                    onClick={() => dispatch(blendDeleted({id}))}>
                    <img src={bin} alt="removeItem" />
                </button>
            </div>


        </>
    )
}

export default ShoppingCartItem;