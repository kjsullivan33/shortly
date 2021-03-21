import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
	window.scrollTo(0, 0);
	return (
		<div className="App">
			<Navbar />
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
