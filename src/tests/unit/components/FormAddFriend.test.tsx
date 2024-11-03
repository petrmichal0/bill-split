import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import FormAddFriend from "../../../components/FormAddFriend";

const mockAddFriend = jest.fn();

describe("FormAddFriend", () => {
  beforeEach(() => {
    render(<FormAddFriend onAddFriend={mockAddFriend} />);
  });

  test("renders form elements", () => {
    const nameInput = screen.getByLabelText(/👩🏼‍🤝‍🧑🏼 Friend name/i);
    const imageInput = screen.getByLabelText(/🖼 Image URL/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    expect(nameInput).toBeInTheDocument();
    expect(imageInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test("submits form and calls onAddFriend with new friend", async () => {
    const nameInput = screen.getByLabelText(/👩🏼‍🤝‍🧑🏼 Friend name/i);
    const imageInput = screen.getByLabelText(/🖼 Image URL/i);
    const addButton = screen.getByRole("button", { name: "Add" });

    await user.type(nameInput, "John Doe");
    await user.type(imageInput, "https://i.pravatar.cc/48?u=12345");
    await user.click(addButton);

    expect(mockAddFriend).toHaveBeenCalledWith({
      id: expect.any(String),
      name: "John Doe",
      image: "https://i.pravatar.cc/48?u=12345",
      balance: 0,
    });
  });
});
