import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { quantityChanged } from '../pages/cart/cartSlice';
import QuantityCounter from '../quantityCounter/QuantityCounter';
import bin from '../../icons/bin.png';
import './shoppingCartItem.scss';

const ShoppingCartItem = ({id, img, name, weight, price}) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(quantityChanged({id, count}))
    }, [count])

    return(
        <>
            <div className="wrapper-item">
                <div className="description">
                    <img src={img} alt={name} />
                    <div className="title">{name}</div>
                </div>
                <div className="weight">
                    {weight} kg
                </div>
                <QuantityCounter count={count} setCount={setCount}/>
                <div className="price">${price}</div>
                <button className="remove">
                    <img src={bin} alt="removeItem" />
                </button>
            </div>


        </>
    )
}

export default ShoppingCartItem;