import React from "react";
import "./CardContainer.css";

import brand from "../../assets/icon-brand-recognition.svg";
import detailed from "../../assets/icon-detailed-records.svg";
import customizable from "../../assets/icon-fully-customizable.svg";

import Card from "./Card/Card";
let cardData: { title: string; description: string; image: string }[] = [
	{
		title: "Brand Recognition",
		description:
			"Boost your brand recognition with each click.  Generic links don't mean a thing. Branded links help instil confidence in your content.",
		image: brand
	},
	{
		title: "Detailed Records",
		description:
			"Gain insigts into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
		image: detailed
	},
	{
		title: "Fully Customizable",
		description:
			"Improve brand awareness and content discoverability through customizable links, superchargin audience engagement.",
		image: customizable
	}
];
function CardContainer() {
	return (
		<div className="card-container">
			{cardData &&
				cardData.map((card, index) => (
					<Card
						title={card.title}
						description={card.description}
						image={card.image}
						key={index}
					/>
				))}
		</div>
	);
}

export default CardContainer;
