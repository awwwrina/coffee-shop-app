import Navigation from '../../navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import './personalAccountPage.scss';
const PersonalAccountPage = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.setItem('token', '');
        navigate('/login');
    }
    return(
        <>
            <section className='header header__account'>
                <Navigation color='white'/> 
                <h1 className="title">Hello, {sessionStorage.getItem('name')}!</h1>
            </section>
            <section className="user">
                <p>Your name: {sessionStorage.getItem('name')}</p>
                <p>Your email: {sessionStorage.getItem('email')}</p>
            </section>
            <button className='btn btn_m40' onClick={() => handleLogout()}>Logout</button>
        </>
    )
}

export default PersonalAccountPage;