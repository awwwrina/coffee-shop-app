import './navigation.scss';

import { NavLink } from "react-router-dom";

const Navigation = ({color='black'}) => {
	return (
		<nav className={`navigation ${color}`}>
			<ul>
				<li>
					<NavLink 
						style={({isActive}) => ({color: isActive ? '#fcc07c' : ''})}
						to="/">Coffee house</NavLink>
				</li>
				<li>
					<NavLink 
						style={({isActive}) => ({color: isActive ? '#fcc07c' : ''})}
						to="/our-coffee">Our coffee</NavLink>
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
		</nav>
	);
}
export default Navigation;