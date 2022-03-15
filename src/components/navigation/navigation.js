import './navigation.scss';

import { Link } from "react-router-dom";

const Navigation = ({color='black'}) => {
	return (
		<nav className={`navigation ${color}`}>
			<ul>
				<li>
					<Link to="/">Coffee house</Link>
				</li>
				<li>
					<Link to="/our-coffee">Our coffee</Link>
				</li>
				<li>
					<Link to="/pleasure">For your pleasure</Link>
				</li>
			</ul>
		</nav>
	);
}
export default Navigation;
