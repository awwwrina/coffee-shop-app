import Navigation from "../navigation/navigation";
import BlackBeans from "../black-beans/black-beans";
import Footer from "../footer/footer";

import './full-card-page.scss';

const FullCardPage = () => {
    return (
        <>
            <section className="header">
                <Navigation color='white'/> 
                <h1 className="title">Our Coffee</h1>
            </section>

            <section className="full-card">
                <div className="item">
                    <img className="item_img" src="https://magiccoffee.in.ua/img/articles/stock-photo-the-chosen-one-30714029.jpg" alt="" />
                    <h2 className="item_title">About it</h2>
                    <BlackBeans />
                    <div className="item_country">
                        <span>Country: </span> 
                        Brasil 
                    </div>
                    <p className="item_descr">
                        <span>Discription: </span> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque numquam minus, alias perspiciatis id placeat necessitatibus iste, eum sit dignissimos minima odit optio dolorem nostrum quidem? Expedita officia consequatur sed.
                    </p>
                    <div className="item_price">
                        <span>Price: </span> 
                        16.99$
                    </div>
               </div>
            </section>

            <Footer />
        </>
    )
}

export default FullCardPage;