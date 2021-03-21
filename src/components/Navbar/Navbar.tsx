/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";

import Logo from "../Logo/Logo";

function Navbar() {
	return (
		<nav>
			<div className="navbar-left">
				<Logo color="hsl(255, 11%, 22%)" />
				<div className="links">
					<a className="fake-link" href="#">
						Features
					</a>
					<a className="fake-link" href="#">
						Pricing
					</a>
					<a className="fake-link" href="#">
						Resources
					</a>
				</div>
			</div>
			<div className="navbar-right">
				<div className="links">
					<a className="fake-link" href="#">
						Login
					</a>
					<a className="btn-link" href="#">
						Sign Up
					</a>
				</div>
				<div className="mobile-menu">Menu</div>
			</div>
		</nav>
	);
}

export default Navbar;
