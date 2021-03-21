import React from "react";
import "./LinkColumn.css";

type LinkColumnProps = {
	title: string;
	links: { title: string; url: string }[];
};

const LinkColumn = ({ title, links }: LinkColumnProps) => {
	return (
		<div className="column">
			<p>{title}</p>
			{links.map((link, index) => (
				<a key={index} className="footer-link fake-link" href={link.url}>
					{link.title}
				</a>
			))}
		</div>
	);
};

export default LinkColumn;
