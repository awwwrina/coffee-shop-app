import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';

import Navigation  from '../../navigation/Navigation';
import BlackBeans from '../../blackBeans/BlackBeans';
import { fetchLogin } from './loginPageSlice';

import './loginPage.scss';

const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit =  async values => {
        dispatch(fetchLogin(values));
        navigate('/account');
    }
    
    return (
        <>
            <section className='header header__auth'>
                <Navigation color='white'/> 
                <h1 className="title">Sign in to Aroma Coffee Roastery</h1>
            </section>

            <section className="auth">
            <Formik
                        initialValues = {{
                            email:'',
                            password:''}}
                        validationSchema = {Yup.object({
                            email: Yup.string()
                                    .required('Required field')
                                    .email('Invalid email address'),
                            password: Yup.string()
                                    .required('Required field')
                                    .min(8, 'Must be longer than 8 characters'),
                        })}
                        onSubmit = {
                            values => 
                                handleSubmit(values)}>
                                    
                        <Form className="auth__form" >
                            <div required className="input-container auth__input_email">
                                <label className="shift" htmlFor="email">Email</label>
                                <Field
                                    className="input"
                                    name="email" 
                                    type="email"
                                    autoComplete="on"/>
                            </div>
                            <ErrorMessage 
                                name="email" 
                                className="error__message auth__error_email"
                                component="div"/>
                            <a className="auth__link" href="#">Forgot password?</a>
                            <div required className="input-container auth__input_password">
                                <label className="shift" htmlFor="password">Password</label>
                                <Field 
                                    className="input"
                                    name="password" 
                                    type="password"
                                    autoComplete="on"/>
                            </div>
                            <ErrorMessage 
                                name="password"
                                className="error__message auth__error_password" 
                                component="div"/>
                                
                            <button type="submit" className="auth__btn btn" >Sign in</button>
                        </Form>
                    </Formik>
                    <BlackBeans/>
                    <div className="create">
                        <div className="create__question">New to Aroma Coffee Roastery?</div>
                        <Link to="/registration" className="create__link">Create an account.</Link>
                    </div>
            </section>
        </>
    )
}

export default Auth;