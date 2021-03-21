import React, { useState } from "react";
import "./LinkInput.css";

type LinkProps = {
	loading: boolean;
	getShortLinks: (link: string) => void;
	error: string | undefined;
};

function LinkInput({ loading, getShortLinks, error }: LinkProps) {
	const [link, setLink] = useState<string>("");

	const handleChange = (value: string) => {
		setLink(value);
	};
	const handleClick = () => {
		getShortLinks(link);
		setLink("");
	};

	return (
		<div className="link-input">
			<div className="field">
				<input
					placeholder="Shorten a link here..."
					onChange={e => {
						handleChange(e.target.value);
					}}
					value={link}
					className={error ? "error" : ""}
				/>
				{error && (
					<div dangerouslySetInnerHTML={{ __html: `<p>${error}</p>` }}></div>
				)}
			</div>
			<button
				className="primary"
				disabled={loading}
				onClick={() => handleClick()}
			>
				{loading ? "Shortening..." : "Shorten It!"}
			</button>
		</div>
	);
}

export default LinkInput;
