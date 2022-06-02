import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCurrentBlend } from "./fullCardPageSlice";
import { blendAdded } from "../cart/cartSlice";

import Spinner from "../../spinner/Spinner";
import Error from "../../error/Error";
import Navigation from "../../navigation/Navigation";
import BlackBeans from "../../blackBeans/BlackBeans";
import Footer from "../../footer/Footer";
import Chevron from '../../chevron/Chevron.js'
import QuantityIndicator from "../../quantityIndicator/QuantityIndicator";
import './fullCardPage.scss';

const FullCardPage = () => {
    const {productId} = useParams();
    
    const loadingStatus = useSelector(state => state.currentBlend.loadingStatus);
    const dispatch = useDispatch();
    const blend = useSelector(state => state.currentBlend.currentBlend);

    useEffect(() => {
        dispatch(fetchCurrentBlend(productId));
    }, [productId])

    return (
        <>
            <section className="header">
                <Navigation color='white'/> 
                <h1 className="title">Our Coffee</h1>
            </section>
            {loadingStatus === "loading" && <Spinner/>}
            {loadingStatus === "error" && <Error/>}
            <View blend={blend}/>
            <Footer />
        </>
    )


}

const View = ({blend}) => {
    const {name, country, price, img, description, weight} = blend;
    const itemCart = {
        id: blend.id,
        name: blend.name,
        img: blend.img,
        quantity: 1,
        weight: blend.weight,
        price : blend.price
    }
    const dispatch = useDispatch();
    return(
        <section className="full-card">
            <Link
                style={{textDecoration: 'none', color: 'black', marginLeft: '150px'}}
                to="/our-coffee">
                    <Chevron/>     
                    <div className="full-card_back">Back to List</div>        
            </Link>
            <div className="item">
                <img className="item_img" src={img} alt={name} />
                <h2 className="item_title"> {name}</h2>
                <BlackBeans />
                <div className="item_country">
                    <span>Country: </span> 
                    {country}
                </div>
                <p className="item_descr">
                    <span>Description: </span>
                    <br></br> 
                   
                   {description}
                </p>
                <div className="item_weight">
                    <span>Weight: </span> 
                    {weight} kg
                </div>
                <div className="item_price">
                    <span>Price: </span> 
                    {price}$
                </div>

                <button 
                    className="btn item_add"
                    onClick={() => dispatch(blendAdded(itemCart))}>Add to cart</button>
                <QuantityIndicator/>

            </div>

            
        </section>
    )
}

export default FullCardPage;