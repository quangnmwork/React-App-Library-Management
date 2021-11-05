import { render, screen } from "@testing-library/react";
import Table from "./Table";

test("renders Table", () => {
  render(<Table />);
  const linkElement = screen.getByText(/Image URL/i);
  expect(linkElement).toBeInTheDocument();
});
