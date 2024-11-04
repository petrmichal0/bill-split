import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../../App";

describe("App", () => {
  test("renders friend list", () => {
    render(<App />);
    const friendList = screen.getByRole("list");
    expect(friendList).toBeInTheDocument();
  });

  test("toggles add friend form when button is clicked", async () => {
    render(<App />);
    const addButton = screen.getByRole("button", { name: /add friend/i });

    await user.click(addButton);
    const nameInput = screen.getByLabelText(/friend name/i);
    expect(nameInput).toBeInTheDocument();

    await user.click(addButton);
    expect(nameInput).not.toBeInTheDocument();
  });
});
