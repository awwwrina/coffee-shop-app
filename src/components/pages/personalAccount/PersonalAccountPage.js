import Navigation from '../../navigation/Navigation';
import { useNavigate } from 'react-router-dom';

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
            <button onClick={() => handleLogout()}>Logout</button>
        </>
    )
}

export default PersonalAccountPage;