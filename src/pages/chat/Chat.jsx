import "./Chat.css";
import Message from "../../components/message/Message";
import FooterChat from "./footerChat/FooterChat";

function Chat() {
  return (
    <div className="main-chat" style={{ paddingTop: "10px" }}>
      <Message />
      <Message />
      <FooterChat />
    </div>
  );
}

export default Chat;
