//import { Component } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from '../pages/main-page/main-page';
import OurCoffee from '../pages/our-coffee/our-coffee';
import FullCardPage from '../full-card-page/full-card-page';
import Pleasure from '../pages/pleasure/pleasure';

import './App.css';

const App = () => {
		return (
			<Router>
				<main>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/our-coffee" element={<OurCoffee />} />
						<Route path="/our-coffee/:productId" element={<FullCardPage />} />
						<Route path="/pleasure" element={<Pleasure />} />
					</Routes>
				</main>
			</Router>
		)
}

export default App;
