import { Link } from "react-router-dom";

import './successfulRegistration.scss';
const SuccessfulRegistration = () => {
    return (
        <>
            <p className="successful-registration ">
                Registration complete. 
                <br />
                New account was successfully registered.
            </p>
            <Link 
                to='/login'
                className="successful-registration__link ">
                    Go to the login page
            </Link>

        </>
    )
}

export default SuccessfulRegistration;