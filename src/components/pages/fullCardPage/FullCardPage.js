import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCurrentBlend } from "./fullCardPageSlice";
import { blendAdded } from "../cartPage/cartPageSlice";

import { SERVER_ADDRESS, SERVER_PORT } from "../../../config";

import Spinner from "../../spinner/Spinner";
import Error from "../../error/Error";
import Navigation from "../../navigation/Navigation";
import BlackBeans from "../../blackBeans/BlackBeans";
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
        </>
    )


}

const View = ({blend}) => {
    const {name, country, price, id, description, weight} = blend;
    const path = `http://${SERVER_ADDRESS}:${SERVER_PORT}/${id}.jpg`;
    const itemCart = {
        id: blend.id,
        name: blend.name,
        img: blend.img,
        quantity: 1,
        weight: blend.weight,
        price : blend.price, 
        amount: 0
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return(
        <section className="full-card">
            <button className="full-card__back" onClick={goBack}>
                    <Chevron/>     
                    <div className="full-card__back-title">Go back</div>
            </button>

            <div className="item">
                <img className="item_img" src={path} alt={name} />
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


                <div className="item_add"><button 
                    className="btn btn_no-margin"
                    onClick={() => dispatch(blendAdded(itemCart))}>Add to cart</button>
                <QuantityIndicator id={itemCart.id}/></div>
                

            </div>

            
        </section>
    )
}

export default FullCardPage;