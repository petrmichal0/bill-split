import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Friend from "../../../components/Friend";

const mockOnSelection = jest.fn();

const friend = {
  id: "1",
  name: "John Doe",
  image: "https://i.pravatar.cc/48?u=12345",
  balance: 0,
};

describe("Friend component", () => {
  test("renders friend with balance zero", () => {
    render(
      <Friend
        friend={friend}
        onSelection={mockOnSelection}
        selectedFriend={null}
      />
    );

    const name = screen.getByText("John Doe");
    const image = screen.getByAltText("John Doe");
    const balanceText = screen.getByText(/You and John Doe are even/i);
    const selectButton = screen.getByRole("button", { name: /select/i });

    expect(name).toBeInTheDocument();
    expect(image).toHaveAttribute("src", friend.image);
    expect(balanceText).toBeInTheDocument();
    expect(selectButton).toBeInTheDocument();
  });

  test("renders friend with positive balance", () => {
    render(
      <Friend
        friend={{ ...friend, balance: 10 }}
        onSelection={mockOnSelection}
        selectedFriend={null}
      />
    );

    const positiveBalanceText = screen.getByText("John Doe owes you");
    expect(positiveBalanceText).toBeInTheDocument();

    const amountText = screen.getByText("10€");
    expect(amountText).toBeInTheDocument();
  });

  test("renders friend with negative balance", () => {
    render(
      <Friend
        friend={{ ...friend, balance: -20 }}
        onSelection={mockOnSelection}
        selectedFriend={null}
      />
    );

    const negativeBalanceText = screen.getByText("You owe John Doe");
    expect(negativeBalanceText).toBeInTheDocument();

    const amountText = screen.getByText("20€");
    expect(amountText).toBeInTheDocument();
  });

  test("renders selected friend and shows 'Close' button", () => {
    render(
      <Friend
        friend={friend}
        onSelection={mockOnSelection}
        selectedFriend={friend}
      />
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    const listItem = screen.getByRole("listitem");

    expect(closeButton).toBeInTheDocument();
    expect(listItem).toHaveClass("selected");
  });

  test("calls onSelection when button is clicked", async () => {
    render(
      <Friend
        friend={friend}
        onSelection={mockOnSelection}
        selectedFriend={null}
      />
    );

    const selectButton = screen.getByRole("button", { name: /select/i });
    await user.click(selectButton);

    expect(mockOnSelection).toHaveBeenCalledWith(friend);
  });
});
