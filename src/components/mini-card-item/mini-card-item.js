import './mini-card-item.scss';

const Card = () => {
    return (
        <div className="wrapper">
            <div className="item">
            <img src="https://www.zastavki.com//pictures/640x480/2017/Food_Coffee_beans_close-up_117979_29.jpg" alt="" />
            <div className="item_title">Solimo Coffee Beans 2 kg</div>
            <div className="item_country"> Kenya </div>
            <div className="item_price">10.73$</div>
            </div>
        </div>
    )
}

export default Card;