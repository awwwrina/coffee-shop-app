import Navigation from "../../navigation/navigation";
import BlackBeans from "../../black-beans/black-beans";
import CoffeeNotes from '../../../image/coffeeNotes.jpg';
import './contact-us.scss';
const ContactUs = () => {
    return(
        <>
            <section className="header header_contacts">
                <Navigation color='white'/> 
                <h1 className="title">Contact us</h1>
            </section>
           
            <section className="contacts">

                    <h2 className="title">Contact our team</h2>
                    <BlackBeans />
                    <div className="container">
                        
                        <img src={CoffeeNotes} alt="CoffeeNotes" className="contacts__img"/>
                        
                        <p className="contacts__request">
                            You're not going to hit a ridiculously long phone menu when you call us. Your email isn't going to the inbox abyss, never to be seen or heard from again. We provide the exceptional service we'd want to experience ourselves!
                        </p>
                        <form action="#" className="contacts__form">
                            <div required class="contacts__input contacts__input_name">
                                <input name="name" id="name" type="text"/>
                                <label for="name">Name</label>
                            </div>
                            <div required class="contacts__input contacts__input_email">
                                <input name="email" id="email" type="email"/>
                                <label for="email">Email</label>
                            </div>
                            <div class="contacts__textarea">
                                <textarea name="text" id="text"></textarea>
                                <label for="text">Message</label>
                            </div>
                            <button class="contacts__btn btn">Send</button>
                        </form>
                    </div>
                    

             </section>
        </>
    )

}


export default ContactUs;