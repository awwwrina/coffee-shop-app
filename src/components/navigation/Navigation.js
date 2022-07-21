import './navigation.scss';

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';
const Navigation = ({color='black', registration = false}) => {
	const isAuth = sessionStorage.getItem('token');
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 901px)'})

	return (
		<> 
			{
				isDesktop && 
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
			}
			{
				isMobile && 
				<Menu left width={'75%'} isOpen id={'overlay'} >
					<nav className={`navigation__sidebar ${color}`}>
						<ul className='navbar navbar__element'>
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
							<li>
								<NavLink 
									style={({isActive}) => ({color: isActive ? '#fcc07c' : ''})}
									to={registration ? '/registration' : (isAuth ? '/account' : '/login')}>My account</NavLink>	

							</li>
							<li>
								<NavLink 
									style={({isActive}) => ({color: isActive ? '#fcc07c' : ''})}
									to="/cart">Shoping Cart</NavLink>	
							</li>
						</ul>
					</nav>
					
				</Menu>
			}
		</>		
	);
}


export default Navigation;
