/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState} from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

import Logo from "../Logo/Logo";

function Navbar() {

  const [isOpen, setOpen] = useState<boolean>(false);

 
  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  const closeMenu = () => {
    setOpen(false);
  }


	return (
    
		<nav>
      {isOpen && <div className="overlay" onClick={closeMenu}>
      </div>}
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
				<div className="mobile-menu">
					<FontAwesomeIcon onClick={toggleMenu} icon={faBars} className="fas"/>
          {isOpen && <div className="mobile-menu-items" onClick={toggleMenu}>
            <a className="" href="#">
						Features
					</a>
					<a className="" href="#">
						Pricing
					</a>
					<a className="" href="#">
						Resources
					</a>
          <a className="" href="#">
						Login
					</a>
					<a className="" href="#">
						Sign Up
					</a></div>}
				</div>
      </div>
		</nav>
    
	);
}

export default Navbar;
