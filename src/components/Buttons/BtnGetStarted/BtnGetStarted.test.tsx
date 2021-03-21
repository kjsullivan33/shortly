import React from "react";
import { render, screen } from "@testing-library/react";
import BtnGetStarted from "./BtnGetStarted";

test("renders Button", () => {
	render(<BtnGetStarted />);
	const buttonElement = screen.getByText(/Get Started/);
	expect(buttonElement).toBeInTheDocument();
});
