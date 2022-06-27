import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../miniCardItem/MiniCardItem';
import Navigation from '../../navigation/Navigation';
import BlackBeans from '../../blackBeans/BlackBeans';
import Spinner from '../../spinner/Spinner';
import Error from '../../error/Error';
import Filters from '../../filters/Filters';

import Girl from '../../../image/girl.jpg'


import './coffeeBeans.scss';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBeans, filteredCardsSelector } from './coffeeBeansSlice';

const CoffeeBlends = () => {
    const {beansLoadingStatus, showBtn, beans, offset} = useSelector(state => state.beans);

    const dispatch = useDispatch();
    const filteredCards = useSelector(filteredCardsSelector);

    useEffect(() => {
        beans.length === 0 &&  dispatch(fetchBeans(offset))
    }, [])


    function renderItemList(arr) {
        const items = arr.map(item => {
            return(
                <Link  key={item.id}
                    style={{textDecoration: 'none', color: 'black'}}
                    to={`/our-coffee/${item.id}`}>
                    <Card {...item}/>
                </Link>
                
            )
        })

        return(
            <div className="container">
                {items}
            </div>
        )
    }
    
    const cards = renderItemList(filteredCards);
    
    return (
        <>
            <section className="header">
                <Navigation color='white'/> 
                <h1 className="title">Coffee blends</h1>
             </section>
           
            <section className="about-coffee">
                <div className="wrapper">
                    <img src={Girl} alt="" />
                    <h2 className="title">About our beans</h2>
                    <BlackBeans />
                    <p className="descr">
                    Explore rich, dark roasted coffee & expect strong, big-bodied brews with notes from smoky to sweet.
                    <br /><br />
                    From Brazil to Colombia, South American coffee is considered among the world’s finest. Explore the unique, distinctive tastes of this exceptional growing region. 
                    </p>
                </div>
             </section>

            <div className="divider"></div>

            <section className="coffee-cards">
                <Filters/>
                {beans.length && cards}
                {beansLoadingStatus === "loading" && <Spinner/>}
                {beansLoadingStatus === "error" && <Error/>}
                {showBtn && beans.length && 
                <button 
                    className='btn btn_mt40'
                    onClick={() =>  dispatch(fetchBeans(offset))}
                    >More</button> }
            </section >
        </>   
    )
}

export default CoffeeBlends;