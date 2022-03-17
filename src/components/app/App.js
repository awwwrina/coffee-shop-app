//import { Component } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../pages/main-page/main-page';
import OurCoffee from '../pages/our-coffee/our-coffee';
import FullCardPage from '../full-card-page/full-card-page';
import Pleasure from '../pages/pleasure/pleasure';

import './App.css';

const App = () => {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/our-coffee" element={<OurCoffee />} />
					<Route path="/pleasure" element={<Pleasure />} />
					<Route path="/full-card-page" element={<FullCardPage />} />
				</Routes>
			</BrowserRouter>
		)
}

export default App;
