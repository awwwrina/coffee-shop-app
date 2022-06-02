import Navigation from "../../navigation/Navigation";
import BlackBeans from "../../blackBeans/BlackBeans";
import Card from "../../miniCardItem/MiniCardItem";
import Footer from "../../footer/Footer";

import Cup from '../../../image/cup-of-coffee.jpg';

import './pleasure.scss';

const Pleasure = () => {
    return (
        <>
            <section className="header header_pleasure">
                <Navigation color='white'/> 
                <h1 className="title">For your pleasure</h1>
            </section>

            <section className="pleasure">
                <div className="wrapper">
                    <img src={Cup} alt="" />
                    <div className="title">About our goods</div>
                    <BlackBeans />
                    <p className="descr">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br /><br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        <br />
                        so questions. 
                        <br />
                        As greatly removed calling pleased improve an. 
                        <br />
                        Last ask him cold feel
                        <br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        <br />
                        is song that held help face.
                    </p>                   
                </div>

                <div className="divider"></div>
            </section>

            <section className="coffee_cards">
                <div className="container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section >

            <Footer/>
        </>
    )
}

export default Pleasure;