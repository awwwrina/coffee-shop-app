
import Navigation from '../../navigation/navigation';
import BlackBeans from '../../black-beans/black-beans';
import Card from '../../mini-card-item/mini-card-item';
import Footer from '../../footer/footer';
import ThreeBeans from '../../../image/three-beans.png'

import './main-page.scss'

const MainPage = () => {
    
    return (
        <>
            <section className="promo">
                <Navigation color={'white'}/>
                <h1 className='promo_header'>Everything You Love About Coffee</h1>
                <div className="bean">
                    <img src={ThreeBeans} alt="three beans" />
                </div>
                <h2 className='promo_subheader'>We makes every day full of energy and taste
                    <br /><br />
                    Want to try our beans?
                </h2>

                <button className='btn btn_light'>More</button>
            </section>

            <section className="about">
                <div className="about_header">About Us</div>
                <BlackBeans/>
                <p className="about_descr">
                    Our mission is to recommend what really matters. Each year, we independently test and review thousands of products to help you find just what you need. Our goal is to save you time and eliminate the stress of shopping, whether you’re looking for everyday gear or gifts for loved ones.  
                    <br/> <br/>
                    These are the same things we choose for ourselves and recommend to our family and friends. If we recommend that you spend your hard-earned money on something, we take it as seriously as if our own money were on the line.
                </p>
            </section>

            {/* <section className="best">
                    <div className="best_header">Our best</div>
                    <div className="coffee_cards ">
                        <Card />
                        <Card />
                        <Card />
                    </div>
            </section> */}

            <section className="blends">
                <p className="blends_header">Discover our most popular blends</p>
                <p className="blends_subheader">Treat your friends & family to freshly roasted coffee from around the globe</p>
                <button className="btn btn_light">Shop blends</button>
            </section>
            
            <Footer/>
        </>
    )
}
export default MainPage;