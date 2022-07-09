import './navigation.scss';

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Navigation = ({color='black', registration = false}) => {
	const isAuth = sessionStorage.getItem('token');

	return (
		<nav className={`navigation ${color}`}>
			<ul className='navbar navbar__element navbar__element_left'>
				<li>
					<NavLink 
						style={({isActive}) => ({color: isActive ? '#fcc07c' : ''})}
						to="/">Aroma Coffee Roastery</NavLink>
				</li>
				<li>
					<NavLink 
						style={({isActive}) => ({color: isActive ? '#fcc07c' : ''})}
						to="/our-coffee">Coffee beans</NavLink>
				</li>
				<li>
					<NavLink 
						style={({isActive}) => ({color: isActive ? '#fcc07c' : ''})}
						to="/contact-us">Contact Us</NavLink>
				</li>
			</ul>
			<ul className='navbar navbar__element navbar__element_right'
			>
				<li>
					<NavLink 
						style={({isActive}) => ({color: isActive ? '#fcc07c' : ''})}
						// to={registration ? '/registration' : '/login'}><FontAwesomeIcon icon={faUser} style={{textAlign:'left'}}/></NavLink>	
						to={registration ? '/registration' : (isAuth ? '/account' : '/login')}><FontAwesomeIcon icon={faUser} style={{textAlign:'left'}}/></NavLink>	

				</li>
				<li className="navbar navbar__divider">/</li>
				<li>
					<NavLink 
						style={({isActive}) => ({color: isActive ? '#fcc07c' : ''})}
						to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>	
				</li>
			</ul>
		</nav>
	);
}
export default Navigation;
