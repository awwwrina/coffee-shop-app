import './mini-card-item.scss';

const Card = ({img, name, country, price}) => {
    let slicedName =  name.slice(0, 20);
    if(slicedName.length < name.length) {
        slicedName += '...'
    }
    return (
        <li className="wrapper">
            <div className="item">
            <img src={img} alt={name} />
            <div className="item_title">{slicedName}</div>
            <div className="item_country">{country}</div>
            <div className="item_price">{price}$</div>
            </div>
        </li>
    )
}


export default Card;