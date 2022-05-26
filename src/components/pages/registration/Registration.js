import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";

import Navigation from '../../navigation/navigation';
import BlackBeans from "../../black-beans/black-beans";

import './registration.scss';

const Registration = () => {
    return (
        <>
            <section className="header header__registration">
                <Navigation registration={true}/>
                <h1 className="title">Create account</h1>
            </section>

            <section className="registration">
            <h2 className="title">User registration form</h2>
            <BlackBeans/>
            <div className="registration registration__text">
                Please fill in form fields and push the button «Register».
            </div>
            <Formik
                initialValues = {{
                    name:'', 
                    email:'',
                    password:'',
                    passwordConfirmation:'',
                    terms: false
                }}
                validationSchema = {Yup.object({
                    name: Yup.string()
                            .required('Required field')
                            .min(2, 'Must be longer than 2 characters'),
                    email: Yup.string()
                            .required('Required field')
                            .email('Invalid email address'),
                    password: Yup.string()
                            .required('Required field')
                            .min(8, 'Must be longer than 8 characters'),
                    passwordConfirmation: 
                        Yup.string()
                        .required('Required field')
                        .oneOf([Yup.ref('password'), null], 'Passwords must match'), 
                    terms: Yup.boolean()
                            .oneOf([true],'Check this box if you want to proceed')
                })}
                onSubmit = {values => console.log(JSON.stringify(values, null, 2))}>

                <Form required className="registration form">
                    <div className="input-container form__name">
                        <label className="shift" htmlFor="name">Name</label>
                        <Field
                            className="input"
                            name="name" 
                            type="text"
                            autoComplete="on"/>
                            
                    </div>
                    <ErrorMessage 
                        name="name"
                        className="error__message form__name-error"
                        component="div"/>
                    
                    <div className=" input-container form__email">
                        <label className="shift" htmlFor="email">Email</label>
                        <Field
                            className="input"
                            name="email" 
                            type="email"
                            autoComplete="on"/>
                    </div>
                    <ErrorMessage 
                        name="email"
                        className="error__message form__email-error"
                        component="div"/>

                    <div className="input-container form__password">
                        <label className="shift" htmlFor="password">Password</label>
                        <Field 
                            className="input"
                            name="password" 
                            type="password"
                            autoComplete="off"/>
                    </div>
                    <ErrorMessage 
                        name="password"
                        className="error__message form__password-error"
                        component="div"/>

                    <div className="input-container form__confirmation">
                        <label className="shift" htmlFor="password">Password confirmation</label>
                        <Field 
                            className="input"
                            name="passwordConfirmation" 
                            type="password"
                            autoComplete="off"/>
                    </div>
                    <ErrorMessage 
                        name="passwordConfirmation"
                        className="error__message form__confirmation-error"
                        component="div"/>

                    <div className="form__agreement">
                        <Field 
                            name="terms"
                            type="checkbox"/>
                        <div className="form__agreement-text">I agree to the</div>
                        <Link to="/terms"> Terms & Conditions</Link>
                    </div>
                    <ErrorMessage 
                        name="terms"
                        className="error__message form__agreement-error"
                        component="div"/>
                   
                    <button className="form__btn btn">Register</button>
                </Form>
            </Formik>
            </section>
        </>  
    )
}

export default Registration;