import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import FriendList from "../../../components/FriendList";

const mockOnSelection = jest.fn();

const friends = [
  {
    id: "1",
    name: "John Doe",
    image: "https://i.pravatar.cc/48?u=1",
    balance: 0,
  },
  {
    id: "2",
    name: "Jane Smith",
    image: "https://i.pravatar.cc/48?u=2",
    balance: 10,
  },
];

describe("FriendList component", () => {
  test("renders a list of friends", () => {
    render(
      <FriendList
        friends={friends}
        selectedFriend={null}
        onSelection={mockOnSelection}
      />
    );

    const friendNames = friends.map((friend) => friend.name);
    friendNames.forEach((name) => {
      const friendElement = screen.getByText(name);
      expect(friendElement).toBeInTheDocument();
    });
  });

  test("calls onSelection when a friend is selected", async () => {
    render(
      <FriendList
        friends={friends}
        selectedFriend={null}
        onSelection={mockOnSelection}
      />
    );

    const selectButton = screen.getAllByRole("button", { name: /select/i })[0];
    await user.click(selectButton);

    expect(mockOnSelection).toHaveBeenCalledWith(friends[0]);
  });

  test("highlights the selected friend", () => {
    render(
      <FriendList
        friends={friends}
        selectedFriend={friends[0]}
        onSelection={mockOnSelection}
      />
    );

    const selectedFriend = screen.getByText(friends[0].name).closest("li");
    expect(selectedFriend).toHaveClass("selected");
  });
});
