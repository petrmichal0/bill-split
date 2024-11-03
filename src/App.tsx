import { motion, Variants } from "framer-motion";
import { useState } from "react";
import data from "./data";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

type Friend = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

const sidebarVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const buttonVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: { duration: 0.8, repeat: Infinity },
  },
};

const formVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

function App() {
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [friends, setFriends] = useState<Friend[]>(data);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  function handleShowAddFriend() {
    setShowAddFriend((prevShowAddFriend) => !prevShowAddFriend);
  }

  function handleAddFriend(friend: Friend) {
    setFriends((prevFriends) => [...prevFriends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend: Friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value: number) {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
      >
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && (
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <FormAddFriend onAddFriend={handleAddFriend} />
          </motion.div>
        )}

        <motion.div
          variants={buttonVariants}
          initial="initial"
          animate="animate"
        >
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
        </motion.div>
      </motion.div>

      {selectedFriend && (
        <motion.div variants={formVariants} initial="hidden" animate="visible">
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        </motion.div>
      )}
    </div>
  );
}

export default App;
