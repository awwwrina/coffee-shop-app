import Navigation from '../navigation/Navigation';
import BlackBeans from '../blackBeans/BlackBeans';

import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <Navigation/>
            <BlackBeans/>
        </footer>
    )
}
export default Footer;