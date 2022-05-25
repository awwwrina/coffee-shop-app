import './navigation.scss';

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Navigation = ({color='black'}) => {
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
						to="/pleasure">For your pleasure</NavLink>
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
						to="/login"><FontAwesomeIcon icon={faUser} /></NavLink>	
				</li>
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
