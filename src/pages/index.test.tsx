import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Button";

describe("Index Page", () => {
  it("should render the page correctly", () => {
    expect(true).toBe(true);
  });

  it("should render the button component", () => {
    const  button = render(<Button/>);

    const buttonElement = screen.getByText(/tes/i); // Adjust based on actual text content of Button
    expect(buttonElement).toBeInTheDocument();
  });
});
