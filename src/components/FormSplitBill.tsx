import { useState, FormEvent } from "react";
import Button from "./Button";

type Friend = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

type FormSplitBillProps = {
  selectedFriend: Friend;
  onSplitBill: (value: number) => void;
};

function FormSplitBill({ selectedFriend, onSplitBill }: FormSplitBillProps) {
  const [bill, setBill] = useState<number | "">("");
  const [paidByUser, setPaidByUser] = useState<number | "">("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - Number(paidByUser) : 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -Number(paidByUser));
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🕴 Your expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > Number(bill)
              ? paidByUser
              : Number(e.target.value)
          )
        }
      />

      <label>👭 {selectedFriend.name} expense</label>
      <input type="number" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
