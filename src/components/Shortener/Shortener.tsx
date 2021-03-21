import React, { useState, useEffect } from "react";
import "./Shortener.css";

import LinkInput from "./LinkInput/LinkInput";
import LinkList from "./LinkList/LinkList";

function Shortener() {
	const [links, setLinks] = useState<
		Array<{ id: number; shortLink: string; longLink: string }>
	>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | undefined>();

	const key: string = "links";

	useEffect(() => {
		const storage: string | null = localStorage.getItem(key);
		storage && setLinks(JSON.parse(storage));
	}, []);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(links));
	}, [key, links]);

	const getShortLinks = async (link: string) => {
		if (!link) {
			setError("Provide a valid URL");
			return;
		}

		setLoading(true);
		const response = await fetch(
			`https://api.shrtco.de/v2/shorten?url=${link}`
		);
		const data = await response.json();
		console.log(data);
		if (data && data.ok) {
			setLinks(links => [
				...links,
				{
					id: links.length,
					shortLink: data.result.full_short_link,
					longLink: link
				}
			]);
		} else if (data && !data.ok) {
			setError(
				'Provide a valid URL.  For more info see <a href="shtco.de/docs" target="__blank">shtco.de/docs</a>'
			);
			setLoading(false);
		}
	};

	useEffect(() => {
		setLoading(false);
		setError(undefined);
	}, [links]);

	const removeLink = (id: number) => {
		setLinks(links => links.filter(link => link.id !== id));
	};

	return (
		<div className="input-container">
			<LinkInput
				getShortLinks={getShortLinks}
				loading={loading}
				error={error}
			/>
			<LinkList links={links} deleteLink={removeLink} />
		</div>
	);
}

export default Shortener;
