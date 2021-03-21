import React from "react";
import "./Footer.css";

import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

import Logo from "../Logo/Logo";
import LinkColumn from "./LinkColumn/LinkColumn";

let linkData: { title: string; links: { title: string; url: string }[] }[] = [
	{
		title: "Features",
		links: [
			{ title: "Link Shortening", url: "" },
			{ title: "Branded Links", url: "" },
			{ title: "Analytics", url: "" }
		]
	},
	{
		title: "Resources",
		links: [
			{ title: "Blog", url: "" },
			{ title: "Developers", url: "" },
			{ title: "Support", url: "" }
		]
	},
	{
		title: "Company",
		links: [
			{ title: "About", url: "" },
			{ title: "Our Team", url: "" },
			{ title: "Careers", url: "" },
			{ title: "Contact", url: "" }
		]
	}
];

function Footer() {
	return (
		<footer>
			<div className="footer-left">
				<Logo color="#fff" />
			</div>
			<div className="footer-center">
				{linkData &&
					linkData.map((link, index) => (
						<LinkColumn key={index} title={link.title} links={link.links} />
					))}
			</div>
			<div className="footer-right">
				<div className="icons">
					<img src={facebook} alt="facebook icon" />
					<img src={twitter} alt="twitter icon" />
					<img src={pinterest} alt="pinterest icon" />
					<img src={instagram} alt="instagram icon" />
				</div>
				<div className="attribution">
					Challenge by
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
						rel="noreferrer"
					>
						Frontend Mentor
					</a>
					. Coded by{" "}
					<a
						href="https://kristen-sullivan.com"
						target="_blank"
						rel="noreferrer"
					>
						Kristen Sullivan
					</a>
					.
				</div>
			</div>
		</footer>
	);
}

export default Footer;
