import React from "react";
import "./LinkListItem.css";

type ItemProps = {
	longLink: string;
	shortLink: string;
	buttonText: string;
	buttonColor: string;
	copy: (link: string, key: number) => void;
	id: number;
	deleteLink: (id: number) => void;
};

const LinkListItem = ({
	longLink,
	shortLink,
	buttonText,
	buttonColor,
	copy,
	id,
	deleteLink
}: ItemProps) => {
	return (
		<div className="list-item">
			<p className="long-link">{longLink}</p>
			<a className="shortlink" href={shortLink} target="__blank">
				{shortLink}
			</a>
			<div className="buttons">
				<button className={buttonColor} onClick={() => copy(shortLink, id)}>
					{buttonText}
				</button>
				<button className="btn-delete" onClick={() => deleteLink(id)}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default LinkListItem;
