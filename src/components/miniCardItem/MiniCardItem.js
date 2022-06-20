import { SERVER_ADDRESS, SERVER_PORT } from '../../config';
import './miniCardItem.scss';

const Card = ({id, name, country, price}) => {
    const path = `${SERVER_ADDRESS}:${SERVER_PORT}/${id}.jpg`;
    let slicedName =  name.slice(0, 20);

    if (slicedName.length < name.length) {
        slicedName += '...'
    }
    return (
        <li className="wrapper">
            <div className="item">
                <img src={path} alt={name}/>
                <div className="item_title">{slicedName}</div>
                <div className="item_country">{country}</div>
                <div className="item_price">{price}$</div>
            </div>
        </li>
    )
}


export default Card;