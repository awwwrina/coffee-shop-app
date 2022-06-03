
import './quantityCounter.scss';

const QuantityCounter = ({count, setCount}) => {

    const increment = () => {
        setCount(count => count + 1);
    }

    const decrement = () => {
        setCount(count => ( count > 1 ? count - 1 : 1));
    }


    return(
        <>
            <div className="quantity">
                <button 
                    className="quantity__modifier quantity__modifier_left"
                    onClick={()=> decrement()}>
                    &mdash;
                </button>
                <input readOnly className="quantity__input" type="text" name="quantity" value={count} />
                <button 
                    className="quantity__modifier quantity__modifier_right"
                    onClick={()=> increment()}>
                    &#43;
                </button>
            </div>
        </>
    )
}

export default QuantityCounter;