import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { fetchRegistration} from "../pages/registration/registrationPageSlice";
import Spinner from '../spinner/Spinner';
import { Link } from "react-router-dom";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const { requestSendingStatus } = useSelector(state => state.registration);
    const {error} = useSelector(state => state.registration);
    return(
        <>
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
                onSubmit = 
                {values => 
                    {dispatch(fetchRegistration(values))}}>

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
                    <div className="error__message form__email-error">
                        <ErrorMessage 
                            name="email"
                            component="div"/>
                        {requestSendingStatus === 'error' &&
                        <p>{error[0]}</p>}

                    </div>
                    
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
                
                    <button 
                        className="form__btn btn"
                        type="submit">Register</button>
                        {requestSendingStatus === 'request' && <Spinner/>}
                </Form>
            </Formik>
        </>
    )
}
export default RegistrationForm;