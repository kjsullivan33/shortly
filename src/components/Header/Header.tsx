import React from "react";
import "./Header.css";
import working from "../../assets/illustration-working.svg";

import BtnGetStarted from "../Buttons/BtnGetStarted/BtnGetStarted";

function Header() {
	return (
		<header className="page-header">
			<div className="header-image">
				<img src={working} alt="person working on laptop"></img>
			</div>
			<div className="header-text">
				<h1>More than just shorter links</h1>
				<p>
					Build your brand's recognition and get detailed insights on how your
					links are performing.
				</p>
				<BtnGetStarted />
			</div>
		</header>
	);
}

export default Header;
