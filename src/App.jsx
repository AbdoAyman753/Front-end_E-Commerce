/* eslint-disable no-unused-vars */
import React ,{ useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import NewPage from './pages/NewPage';
// import Header from './components/Header'
import Carousel  from "./components/Carousel";

import Slider from "./components/Slider";
// import About from "./components/About";


function App() {

	return (
		<>
			{/* <Header/> */}
			<Carousel />	
			<Slider/> 
		{/* <About/> */}
			
		</>
		
		
	);
}

export default App;
