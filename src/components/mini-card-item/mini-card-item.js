import './mini-card-item.scss';

const Card = ({img, name, country, price}) => {
    return (
        <li className="wrapper">
            <div className="item">
            <img src={img} alt={name} />
            <div className="item_title">{name}</div>
            <div className="item_country">{country}</div>
            <div className="item_price">{price}$</div>
            </div>
        </li>
    )
}


export default Card;