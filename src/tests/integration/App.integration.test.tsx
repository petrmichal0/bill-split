import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../../App";

describe("App Integration Test", () => {
  test("renders friend list and toggles add friend form", async () => {
    render(<App />);

    const friendList = screen.getByRole("list");
    expect(friendList).toBeInTheDocument();

    const addFriendButton = screen.getByRole("button", { name: /add friend/i });
    await user.click(addFriendButton);

    const nameInput = screen.getByLabelText(/friend name/i);
    expect(nameInput).toBeInTheDocument();

    await user.click(addFriendButton);
    expect(nameInput).not.toBeInTheDocument();
  });

  test("adds a new friend to the list", async () => {
    render(<App />);

    const addFriendButton = screen.getByRole("button", { name: /add friend/i });
    await user.click(addFriendButton);

    const nameInput = screen.getByLabelText(/friend name/i);
    const imageInput = screen.getByLabelText(/image url/i);
    await user.type(nameInput, "John Doe");
    await user.type(imageInput, "https://i.pravatar.cc/48?u=99999");

    const submitButton = screen.getByRole("button", { name: /add/i });
    await user.click(submitButton);

    const newFriend = screen.getByText("John Doe");
    expect(newFriend).toBeInTheDocument();
  });

  test("selects a friend and displays split bill form", async () => {
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

  test("closes split bill form when friend is deselected", async () => {
    render(<App />);

    const selectButton = screen.getAllByRole("button", { name: /select/i })[0];
    await user.click(selectButton);

    const splitBillHeader = screen.getByText(/split a bill with/i);
    expect(splitBillHeader).toBeInTheDocument();

    await user.click(selectButton);
    expect(splitBillHeader).not.toBeInTheDocument();
  });

  test("adds a friend and selects them for bill splitting", async () => {
    render(<App />);
    const addFriendButton = screen.getByRole("button", { name: /add friend/i });
    await user.click(addFriendButton);

    const nameInput = screen.getByLabelText(/friend name/i);
    const imageInput = screen.getByLabelText(/image url/i);
    await user.type(nameInput, "Alice Doe");
    await user.clear(imageInput);
    await user.type(imageInput, "https://i.pravatar.cc/48?u=88888");
    const submitButton = screen.getByRole("button", { name: /add/i });
    await user.click(submitButton);

    const newFriend = screen.getByText("Alice Doe");
    expect(newFriend).toBeInTheDocument();

    const selectButton = screen.getAllByRole("button", { name: /select/i })[3];
    await user.click(selectButton);

    const splitBillHeader = screen.getByText(/split a bill with Alice Doe/i);
    expect(splitBillHeader).toBeInTheDocument();
  });
});
