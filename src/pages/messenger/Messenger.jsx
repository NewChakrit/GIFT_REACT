import "./Messenger.css";
import Conversation from "../../components/conversation/Conversation";

function Messenger() {
  return (
    <>
      <div
        className="messagePage"
        style={{
          marginTop: "100px",
          height: "100%",
        }}
      >
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
      {/* <div className="emptyBox">
        <img
          src="https://res.cloudinary.com/do58tgs2e/image/upload/v1644477095/empty-boxv1_kbygtb.png"
          alt="emptyBox"
        />{" "}
        <br />
        <br />
        <div className="emptyBox-message">
          <h3>
            <strong>It's nice to chat with someone</strong>
          </h3>

          <div></div>
          <p>
            Pick a person from left menu <br />
            and start your conversation
          </p>
        </div>
      </div> */}
    </>
  );
}

export default Messenger;
