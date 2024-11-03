import { useState, FormEvent } from "react";
import Button from "./Button";

type Friend = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

type FormAddFriendProps = {
  onAddFriend: (friend: Friend) => void;
};

function FormAddFriend({ onAddFriend }: FormAddFriendProps) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name || !image) return;

    const newFriend: Friend = {
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name,
      image,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friend-name">👩🏼‍🤝‍🧑🏼 Friend name</label>
      <input
        id="friend-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="image-url">🖼 Image URL</label>
      <input
        id="image-url"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
