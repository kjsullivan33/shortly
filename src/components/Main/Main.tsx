import React from "react";
import "./Main.css";

import Shortener from "../Shortener/Shortener";
import CardContainer from "../CardContainer/CardContainer";
import BtnGetStarted from "../Buttons/BtnGetStarted/BtnGetStarted";

function Main() {
	return (
		<main>
			<section className="bg-primary">
				<Shortener />
				<h3>Advanced Statistics</h3>
				<p>
					Track how your links are performing across the web with our advanced
					statistics dashboard
				</p>
				<CardContainer />
			</section>
			<section className="bg-secondary">
				<h3>Boost your links today</h3>
				<BtnGetStarted />
			</section>
		</main>
	);
}

export default Main;
