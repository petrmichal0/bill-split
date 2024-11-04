import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import FormSplitBill from "../../../components/FormSplitBill";

const mockSplitBill = jest.fn();

const selectedFriend = {
  id: "123",
  name: "Alice",
  image: "https://i.pravatar.cc/48?u=123",
  balance: 0,
};

describe("FormSplitBill", () => {
  beforeEach(() => {
    render(
      <FormSplitBill
        selectedFriend={selectedFriend}
        onSplitBill={mockSplitBill}
      />
    );
  });

  test("renders form elements with correct labels", () => {
    const billInput = screen.getByLabelText(/Bill value/i);
    const userExpenseInput = screen.getByLabelText(/Your expense/i);
    const friendExpenseInput = screen.getByLabelText(/Alice expense/i);
    const payerSelect = screen.getByLabelText(/Who is paying the bill?/i);
    const splitButton = screen.getByRole("button", { name: /split bill/i });

    expect(billInput).toBeInTheDocument();
    expect(userExpenseInput).toBeInTheDocument();
    expect(friendExpenseInput).toBeInTheDocument();
    expect(payerSelect).toBeInTheDocument();
    expect(splitButton).toBeInTheDocument();
  });

  test("submits form and calls onSplitBill with correct value", async () => {
    const billInput = screen.getByLabelText(/Bill value/i);
    const userExpenseInput = screen.getByLabelText(/Your expense/i);
    const splitButton = screen.getByRole("button", { name: /split bill/i });

    await user.type(billInput, "100");
    await user.type(userExpenseInput, "60");
    await user.click(splitButton);

    expect(mockSplitBill).toHaveBeenCalledWith(40);
  });
});
