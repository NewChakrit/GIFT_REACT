import axios from "../config/axios";
import { createContext, useState, useEffect } from "react";
const ChatContext = createContext();

function ChatContextProvider(props) {
  // Get data profile
  const [chatRoom, setChatRoom] = useState([]);
  const [message, setMessage] = useState([]);
  const [toggledelete, setToggledelete] = useState(false);

  const fetchFriendList = async () => {
    const res = await axios.get(`/chat/room`);
    setChatRoom(res.data.rooms);
  };
  useEffect(() => {
    fetchFriendList();
  }, []);

  return (
    <ChatContext.Provider
      value={{
        chatRoom,
        setChatRoom,
        message,
        fetchFriendList,
        toggledelete,
        setToggledelete,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatContextProvider;
export { ChatContext };
