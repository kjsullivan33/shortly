import React from "react";
import "./Card.css";

type CardProps = {
	title: string;
	description: string;
	image: string;
};

const Card = ({ title, description, image }: CardProps) => {
	return (
		<div className="card">
			<div className="card-icon">
				<img src={image} alt="card icon"></img>
			</div>
			<h5>{title}</h5>
			<p>{description}</p>
		</div>
	);
};

export default Card;
