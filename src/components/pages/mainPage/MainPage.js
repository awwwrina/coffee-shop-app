import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";
import 'swiper/css';
import "swiper/css/effect-coverflow";


import Navigation from '../../navigation/Navigation';
import BlackBeans from '../../blackBeans/BlackBeans';
import Footer from '../../footer/Footer';
import ThreeBeans from '../../../image/three-beans.png'

import './mainPage.scss'

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

                {/* <button className='btn btn_light'>Shop now</button> */}
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

            <section className="blends">
                <h2 className="blends_header">Discover our most popular blends</h2>
                <div className="bean">
                    <img src={ThreeBeans} alt="three beans" />
                </div>
                <p className="blends_subheader">Treat your friends & family to freshly roasted coffee from around the globe</p>
                
            </section>

            <section className="difference">
                <div className="difference_header">What makes us different?</div>
                <BlackBeans/>
                <p className="difference_descr">
                    Like so many other down-to-earth coffee lovers, we were tired of choosing between stale but inexpensive grocery store coffee and painfully overpriced boutique brews. Setting gimmicks and pop-culture trendiness aside, our direct to consumer model and common sense commitment to roast-to-order freshness makes quality coffee accessible to anyone with a computer and a mailbox.
                    <br /><br />
                    Even the highest grade coffee will taste bad if it is old. With that concern in mind, we roast our craft coffees all day long.
                    <br /><br />
                    By trading directly with you online, we ensure orders travel straight from our roaster to your doorstep. That way, your coffee arrives as close to its roast date as possible.
                </p>
            </section>

            <section className="opinions">
                <h2 className="opinions__header">Real customers about us</h2>

                <div className="bean">
                    <img src={ThreeBeans} alt="three beans" />
                </div>

                <Swiper
                    autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                    }}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    grabCursor={true}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    navigation={false}
                    className="carousel"
                    >
                    <SwiperSlide>
                        <div className="card">
                            <div className="card__header">Great coffee at a great price!</div>
                            <p className="card__descr">
                            I'm enjoying a gigantic mug of this coffee right now! About a year ago I bought a 5lb bag of <span>Fazenda Furnas</span> based on the positive reviews, but accidentally chose the ground product instead of the whole bean. I almost returned it but thought, what the heck, I'll give the burr grinder a break for a few weeks. I'm so glad I did: it is now one of my go-to coffees. This coffee, though a dark roast, is remarkably balanced- the aroma is tobacco and chocolate, and the palate is robust, but definitely not burnt. To me, the palate is also on the sweet side, but it is balanced by mild acidity and clean bitterness.
                            </p>
                            <div className="card__name">Amanda S.</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card__header">Amazing Coffee</div>
                            <p className="card__descr">
                            This truly is one of the best coffees I have ever had. I am in the travel biz and have literally tried coffee from all over the world. This one is definitely in the Top 5. It is rich with notes of chocolate. But the beauty of this is it is strong but not overpowering like many dark roasts seem to be these days. Highly recommended. I love it and will be buying this again for myself, and as a gift for my coffee loving friends so they can share in the amazingness.
                            </p>
                            <div className="card__name">Taylor F.</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card__header">Great beans for coffeemaker</div>
                            <p className="card__descr">
                            The <span>Finca El Arcangel</span> beans have been great for use in our Jura coffeemaker. One concern I have always had with the types of beans we buy is the amount of oil on the bean. I have read that too much oil will damage high end coffe makers that grind whole beans. The <span>Finca El Arcangel</span> do not have excessive oil and are perfect for our coffeemaker.
                            My wife and I have two or 3 cups per day so the bulk pricing on this is very attractive.
                            The taste of the beans are exceptional so with all this, I will continue to buy these and I would recommend them for others to try.
                            </p>
                            <div className="card__name">Nicole F.</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card__header">Great coffee for the price</div>
                            <p className="card__descr">
                                I have been buying this brand for years now and have never been disappointed. I love to grind my own coffee fresh daily and I also love a bargain. If you have a vacuum packer then buying these large packages is a great way to save money. I portion it out, seal it in the bags, and freeze it until use. Word of advice, just be sure to let the bag completely thaw before opening to avoid getting the coffee wet from condensation. Why would anyone drive all the way to an expensive coffee shop to get their morning coffee when you can brew high quality coffee at home and be drinking it before you could even be ready to leave the house? I'm drinking a mug now. Ahhhh, that's good.
                            </p>
                            <div className="card__name">David P.</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card__header"> Good coffee, decently priced</div>
                            <p className="card__descr">
                                I am pleasantly surprised with the aroma while grinding and brewing. The flavor is good, it's a nice medium roast coffee blend. If you just want to enjoy a decent cup of coffee, and you don't want to stand in line behind coffee snobs for a cup of coffee in the morning, buy this and get your morning started at home. It stands up well to milk, half and half, cream, and flavored creamers, and it tastes fine with none as well. This is going on my Christmas list as gifts for coffee loving family and friends.
                            </p>
                            <div className="card__name">Philip D.</div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            
            <Footer/>
        </>
    )
}
export default MainPage;