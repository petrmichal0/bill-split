import Button from "../components/Button";

function Friend({ friend, onSelection, selectedFriend }) {
  const { image, name, balance, id } = friend;

  const isSelected = selectedFriend.id === id;

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
