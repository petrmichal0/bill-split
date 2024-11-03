import Friend from "./Friend";

type FriendType = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

type FriendListProps = {
  friends: FriendType[];
  selectedFriend: FriendType | null;
  onSelection: (friend: FriendType) => void;
};

function FriendList({ friends, selectedFriend, onSelection }: FriendListProps) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export default FriendList;
