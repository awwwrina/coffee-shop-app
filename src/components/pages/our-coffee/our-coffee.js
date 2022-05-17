import { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';
import Card from '../../mini-card-item/mini-card-item';
import BlackBeans from '../../black-beans/black-beans';
import Footer from '../../footer/footer';
import Spinner from '../../spinner/Spinner';
import Error from '../../error/Error';

import Girl from '../../../image/girl.jpg'


import './our-coffee.scss';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBeans } from './coffeeSlice';

const OurCoffee = () => {
    const beansLoadingStatus = useSelector(state => state.beans.beansLoadingStatus);
    const showBtn = useSelector(state => state.beans.showBtn);
    const dispatch = useDispatch();

    const [start, setStart] = useState(0);

    const beans = useSelector(state => state.beans.beans)
 
    useEffect(() => {
        dispatch(fetchBeans(start));
    }, [start]);

    function renderItemList(arr) {
        const items = arr.map(item => {
            return(
                <Link 
                    style={{textDecoration: 'none', color: 'black'}}
                    to={`/our-coffee/${item.id}`}>
                    <Card {...item} key={item.id}/>
                </Link>
                
            )
        })

        return(
            <div className="container">
                {items}
            </div>
        )
    }
    
    const cards = renderItemList(beans);
    return (
        <>
            <section className="header">
                <Navigation color='white'/> 
                <h1 className="title">Our Coffee</h1>
             </section>
           
            <section className="about-coffee">
                <div className="wrapper">
                    <img src={Girl} alt="" />
                    <h2 className="title">About our beans</h2>
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
             </section>

            <div className="divider"></div>

            <section className="coffee_cards">
                <div className="option">
                    <div className="search">
                        <label className="search_label">Looking for</label>
                        <input className="search_input" type="text" placeholder="start typing here..." name="" id=""/>
                    </div>

                    <div className="filter">
                        <div className="filter_label">Or filter</div>
                    
                        <div className="countries">
                        <button className="filter_country">All</button>
                            <button className="filter_country">Brazil</button>
                            <button className="filter_country">Kenya</button>
                            <button className="filter_country">Columbia</button>
                        </div>
                    </div>
                </div>
                    {beans.length && cards}
                    {beansLoadingStatus === "loading" && <Spinner/>}
                    {beansLoadingStatus === "error" && <Error/>}
                    {showBtn && beans.length && <button 
                        className='btn btn_dark'
                        onClick={() => setStart((start) => start + 6)}
                        >More</button> }
            </section >
            <Footer/>
        </>   
    )
}

export default OurCoffee;