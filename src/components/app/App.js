import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from '../pages/mainPage/MainPage';
import OurCoffee from '../pages/coffeeBeans/CoffeeBeans';
import FullCardPage from '../pages/fullCardPage/FullCardPage';
import ContactUs from "../pages/contactUs/ContactUs";
import Auth from '../pages/loginPage/LoginPage';
import Registration from "../pages/registration/Registration";
import Terms from "../pages/terms/Terms";
import CartPage from "../pages/cartPage/CartPage";
import PersonalAccountPage from "../pages/personalAccount/PersonalAccountPage";

import RequireAuth from "../hoc/RequireAuth";

import './App.css';

const App = () => {
		return (
				
			<Router>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/our-coffee" element={<OurCoffee />} />
						<Route path="/our-coffee/:productId" element={<FullCardPage />} />
						<Route path="/contact-us" element={<ContactUs/>} />
						<Route path="/login" element={<Auth/>} />
						<Route path="/registration" element={<Registration/>} />
						<Route path="/terms" element={<Terms />} />
						<Route path="/cart" element={<CartPage/>}/>
						<Route path="/account" element={
							<RequireAuth>
								<PersonalAccountPage/>
							</RequireAuth>
						}/>

					</Routes>
			</Router>
		)
}

export default App;
