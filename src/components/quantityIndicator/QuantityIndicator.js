import { useSelector } from 'react-redux';
import './quantityIndicator.scss';


const QuantityIndicator = ({id}) => {

    const cartItems = useSelector(state => state.cart.blends);
    const index = cartItems.findIndex(item => item.id === id)
    let quantity;
    if ( index === -1) {
        quantity = 0;
    } else {
        quantity = cartItems[index].quantity;
    }
    return(
        <> { index !== -1 && 
            <input 
                readOnly   
                className="quantity-indicator" 
                type="text" 
                name="quantity" 
                value={`+ ${quantity}`} />}

        </>
    )
}

export default QuantityIndicator;