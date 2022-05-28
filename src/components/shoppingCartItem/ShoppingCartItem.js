import bin from '../../icons/bin.png';
import './shoppingCartItem.scss';

const ShoppingCartItem = () => {
    return(
        <>
            <div className="wrapper-item">
                <div className="description">
                    <img src="https://cdn.pixabay.com/photo/2016/09/30/11/13/coffee-tin-1705026_960_720.jpg" alt="" />
                    <div className="title">dgdsgdgfgfgggg</div>
                </div>
                <div className="weight">
                    1 kg
                </div>
                <div className="quantity">
                    <button className="quantity__modifier">
                        &mdash;
                    </button>
                    <input readonly className="quantity__input" type="text" name="quantity" value="1" />
                    <button className="quantity__modifier">
                        &#43;
                    </button>
                </div>
                <div className="price">$3.00</div>
                <button className="remove">
                    <img src={bin} alt="" />
                </button>
            </div>


        </>
    )
}

export default ShoppingCartItem;