//import { Component } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../pages/main-page/main-page';
import OurCoffee from '../pages/our-coffee/our-coffee';
import Pleasure from '../pages/pleasure/pleasure';

import './App.css';

const App = () => {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/our-coffee" element={<OurCoffee />} />
					<Route path="/pleasure" element={<Pleasure />} />
				</Routes>
			</BrowserRouter>
		)
}

export default App;
