import { useSelector } from "react-redux";

import Navigation from '../../navigation/Navigation';
import BlackBeans from "../../blackBeans/BlackBeans";
import RegistrationForm from "../../registrationForm/RegistrationForm";
import SuccessfulRegistration from "../../successfulRegistration/SuccessfulRegistration";

import './registration.scss';

const Registration = () => {
    
    const { requestSendingStatus } = useSelector(state => state.registration);
    return (
        <>
            <section className="header header__registration">
                <Navigation registration={true}/>
                <h1 className="title">Create account</h1>
            </section>

            <section className="registration">
            <h2 className="title">User registration form</h2>
            <BlackBeans/>

            {requestSendingStatus !== 'success' && <RegistrationForm/>}
            {requestSendingStatus === 'success' && <SuccessfulRegistration/>}
            </section>
        </>  
    )
}


export default Registration;