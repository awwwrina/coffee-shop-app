import { Component } from 'react';

import Navigation from '../../navigation/navigation';
import BlackBeans from '../../black-beans/black-beans';
import Card from '../../mini-card-item/mini-card-item';
import Footer from '../../footer/footer';
import ThreeBeans from '../../../image/three-beans.png'

import './main-page.scss'

class MainPage extends Component {
    render() {
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

                    <button className='promo_btn'>More</button>
                </section>

                <section className="about">
                    <div className="about_header">About Us</div>
                    <BlackBeans/>
                    <p className="about_descr">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
                        <br /><br />
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.    
                    </p>
                </section>

                <section className="best">
                        <div className="best_header">Our best</div>
                        <div className="coffee_cards ">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}
export default MainPage;