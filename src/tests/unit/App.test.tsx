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

  test("adds a new friend and displays it in the friend list", async () => {
    render(<App />);
    const addButton = screen.getByRole("button", { name: /add friend/i });

    await user.click(addButton);

    const nameInput = screen.getByLabelText(/friend name/i);
    const imageInput = screen.getByLabelText(/image url/i);
    await user.type(nameInput, "John Doe");
    await user.type(imageInput, "https://i.pravatar.cc/48?u=99999");
    const submitButton = screen.getByRole("button", { name: /add/i });
    await user.click(submitButton);

    const newFriend = screen.getByText("John Doe");
    expect(newFriend).toBeInTheDocument();
  });

  test("displays split bill form when a friend is selected", async () => {
    render(<App />);

    const selectButton = screen.getAllByRole("button", { name: /select/i })[0];
    await user.click(selectButton);

    const splitBillHeader = screen.getByText(/split a bill with/i);
    expect(splitBillHeader).toBeInTheDocument();
  });

  test("updates friend's balance after splitting a bill", async () => {
    render(<App />);

    const selectButton = screen.getAllByRole("button", { name: /select/i })[0];
    await user.click(selectButton);

    const billInput = screen.getByLabelText(/bill value/i);
    const userExpenseInput = screen.getByLabelText(/your expense/i);
    const splitButton = screen.getByRole("button", { name: /split bill/i });

    await user.type(billInput, "100");
    await user.type(userExpenseInput, "60");
    await user.click(splitButton);

    const friendBalances = screen.getByText("33€");
    expect(friendBalances).toBeInTheDocument();
  });
});
