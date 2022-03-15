import Navigation from '../../navigation/navigation';
import BlackBeans from '../../black-beans/black-beans';
import Footer from '../../footer/footer';
import Girl from '../../../image/girl.jpg'
import './our-coffee.scss';

const OurCoffee = () => {
    return (
        <>  
            <section className="header">
                <Navigation color='white'/> 
                <h1 className="title">Our Coffee</h1>
            </section>
           
           <section className="about-coffee">
               <div className="wrapper">
                    <img className="girl" src={Girl} alt="" />
                    <h2 className="about-coffee_title">About our beans</h2>
                    <BlackBeans />
                    <p className="about-coffee_descr">
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
            </section>

            <div className="divider"></div>

            <section className="coffee_cards">
                <div className="option">
                    <div className="search">
                        <label className="search_label">Looking for</label>
                        <input className="search_input" type="text" placeholder="start typing here..." name="" id="" value=""/>
                    </div>

                    <div className="filter">
                        <div className="filter_label">Or filter</div>
                        
                        <div className="countries">
                            <div className="filter_country">Brazil</div>
                            <div className="filter_country">Kenya</div>
                            <div className="filter_country">Columbia</div>
                        </div>
                    </div>
                </div>
            </section >

            <Footer/>
        </>
    )
}

export default OurCoffee;