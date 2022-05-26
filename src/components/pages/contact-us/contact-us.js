import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import Navigation from "../../navigation/navigation";
import BlackBeans from "../../black-beans/black-beans";
import CoffeeNotes from '../../../image/coffeeNotes.jpg';
import Footer from '../../footer/footer';

import './contact-us.scss';
const ContactUs = () => {
    return(
        <>
            <section className="header header__contacts">
                <Navigation color='white'/> 
                <h1 className="title">Contact us</h1>
            </section>
           
            <section className="contacts">

                <h2 className="title">Contact our team</h2>
                <BlackBeans />
                <div className="container">
                    
                    <img src={CoffeeNotes} alt="CoffeeNotes" className="contacts__img"/>
                    
                    <p className="contacts__request">
                        Have a question? Concern? Request? We’d love to hear from you. Connect with us through the following ways.
                        <br /> <br />
                        You're not going to hit a ridiculously long phone menu when you call us. Your email isn't going to the inbox abyss, never to be seen or heard from again. We provide the exceptional service we'd want to experience ourselves!
                    </p>
                    <Formik
                        initialValues = {{
                            name:'', 
                            email:'',
                            text:''}}
                        validationSchema = {Yup.object({
                            name: Yup.string()
                                    .required('Required field')
                                    .min(2, 'Must be longer than 2 characters'),
                            email: Yup.string()
                                    .required('Required field')
                                    .email('Invalid email address'),
                            text: Yup.string()
                                    .required('Required field')
                        })}
                        onSubmit = {values => console.log(JSON.stringify(values, null, 2))}>
                    
                        <Form className="contacts__form" >
                            <div required className="input-container contacts__input_name">
                                <label className="shift" htmlFor="name">Name</label>
                                <Field 
                                    className="input"
                                    name="name" 
                                    type="text"
                                    autoComplete="off"/>
                            </div>
                            <ErrorMessage 
                                name="name" 
                                className="error__message contacts__error_name"
                                component="div"/>
                            <div required className="input-container contacts__input_email">
                                <label className="shift" htmlFor="email">Email</label>
                                <Field
                                    className="input"
                                    name="email" 
                                    type="email"
                                    autoComplete="off"/>
                            </div>
                            <ErrorMessage 
                                name="email" 
                                className="error__message contacts__error_email"
                                component="div"/>
                            <div className="input-container contacts__textarea">
                                <label className="shift" htmlFor="text">Message</label>
                                <Field 
                                className="input"
                                    name="text" 
                                    as="textarea"/>
                            </div>
                            <ErrorMessage 
                                name="text"
                                className="error__message contacts__error_textarea" 
                                component="div"/>
                            <button className="contacts__btn btn">Send</button>
                        </Form>
                    </Formik>
                </div>

                <div className="wrapper">
                    <div className="hours">
                        <h2 className="hours__header">Business hours:</h2>
                        <p className="hours__interval">8 a.m. to 4 p.m., Monday-Friday</p>
                    </div>
                    <div className="phone">
                        <h2 className="phone__header">Phone:</h2>
                        <a href="tel:+18475555555">1-847-555-5555</a>
                    </div>
                    <div className="email">
                        <h2 className="email__header">Email:</h2>
                        <a href="mailto:contactus@acr.com">contactus@acr.com</a>
                    </div>
                    <div className="address">
                        <h2 className="address__header">Address:</h2>
                        <address>
                            70 E Central St Suite 101B, 
                            <br />
                            Franklin, MA 02038
                        </address>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.200762194992!2d-71.39638178415312!3d42.08174787920661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e46f8d899cb041%3A0x50516d0c2f6339e7!2zNzAgRSBDZW50cmFsIFN0ICMxMDFiLCBGcmFua2xpbiwgTUEgMDIwMzgsINCh0KjQkA!5e0!3m2!1sru!2sru!4v1652874294630!5m2!1sru!2sru" width="100%" height="450"></iframe>
                

            </section>
            <Footer/>
        </>
    )

}


export default ContactUs;