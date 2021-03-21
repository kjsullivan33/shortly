import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Header", () => {
	render(<App />);
	const headerElement = screen.getByText(/More than just shorter links/);
	expect(headerElement).toBeInTheDocument();
});
