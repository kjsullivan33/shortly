import React, { useState } from "react";
import "./LinkList.css";

import LinkListItem from "./LinkListItem/LinkListItem";

type LinksProps = {
	links: { id: number; shortLink: string; longLink: string }[];
	deleteLink: (id: number) => void;
};

interface ICopied {
	key: number;
	copied: boolean;
}
function LinkList({ links, deleteLink }: LinksProps) {
	const [copied, setCopied] = useState<ICopied | undefined>(undefined);
	const copyToClipBoard = (link: string, key: number) => {
		console.log(link);
		navigator.clipboard
			.writeText(link)
			.then(() => setCopied({ key, copied: true }))
			.then(() => {
				console.log(copied);
			});
	};
	return (
		<div>
			{links.length > 0 &&
				links.map((link, index) => (
					<LinkListItem
						key={index}
						id={link.id}
						longLink={link.longLink}
						shortLink={link.shortLink}
						buttonText={copied && copied.key === index ? "Copied" : "Copy"}
						buttonColor={
							copied && copied.key === index ? "secondary" : "primary"
						}
						copy={copyToClipBoard}
						deleteLink={deleteLink}
					/>
				))}
		</div>
	);
}

export default LinkList;
