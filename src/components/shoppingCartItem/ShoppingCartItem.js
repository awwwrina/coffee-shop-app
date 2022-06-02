import { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { quantityChanged, blendDeleted } from '../pages/cartPage/cartPageSlice';
import { SERVER_ADDRESS, SERVER_PORT } from '../../config';
import QuantityCounter from '../quantityCounter/QuantityCounter';
import bin from '../../icons/bin.png';
import './shoppingCartItem.scss';

const ShoppingCartItem = ({id, img, name, weight, price, qw}) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const path = `http://${SERVER_ADDRESS}:${SERVER_PORT}/${id}.jpg`;

    useEffect(() => {
        dispatch(quantityChanged({id, count}))
    }, [count])


    return(
        <>
            <div className="wrapper-item">
                <div className="description">
                    <div className="img-wrapper">
                        <img src={path} alt={name} />
                    </div>

                    <div className="title">{name}</div>
                </div>
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