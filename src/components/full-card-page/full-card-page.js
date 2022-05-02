import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import useCoffeeService from "../../services/CoffeeService";

import Spinner from "../spinner/Spinner";
import Navigation from "../navigation/navigation";
import BlackBeans from "../black-beans/black-beans";
import Footer from "../footer/footer";

import './full-card-page.scss';

const FullCardPage = () => {
    const {productId} = useParams();
    
    const [product, setProduct] = useState(null);

    const {getProduct, loading} = useCoffeeService();

    useEffect(() => {
        getProduct(productId)
            .then(onDataLoaded)
    }, [productId])

    const onDataLoaded = (product) => {
        setProduct(product);
    }

    console.log(product);

    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || !product) ?  <View product={product}/> : null;


    return (
        <>
            <section className="header">
                <Navigation color='white'/> 
                <h1 className="title">Our Coffee</h1>
            </section>
            {spinner}
            {content}
            <Footer />
        </>
    )


}

const View = ({product}) => {
    const {name, country, price, img, description, weight} = product;
    return(
        <section className="full-card">
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
                    {weight}
                </div>
                <div className="item_price">
                    <span>Price: </span> 
                    {price}$
                </div>
            </div>
        </section>
    )
}

export default FullCardPage;