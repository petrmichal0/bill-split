import Button from "./Button";

type FriendType = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

type FriendProps = {
  friend: FriendType;
  onSelection: (friend: FriendType) => void;
  selectedFriend: FriendType | null;
};

function Friend({ friend, onSelection, selectedFriend }: FriendProps) {
  const { image, name, balance, id } = friend;
  const isSelected = selectedFriend?.id === id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance < 0 && (
        <p className="red">
          You owe {name} <strong>{Math.abs(balance)}€</strong>
        </p>
      )}

      {balance > 0 && (
        <p className="green">
          {name} owes you <strong>{Math.abs(balance)}€</strong>
        </p>
      )}

      {balance === 0 && <p>You and {name} are even.</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
