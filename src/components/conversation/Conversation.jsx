import { useNavigate } from 'react-router-dom';
import './Conversation.css';

function Conversation({ room }) {
    const navigate = useNavigate();

    return (
        <div
            className="conversationCard"
            onClick={() => {
                navigate(`/messenger/${room.friendId}`);
            }}
        >
            <div className="profileCardImg">
                <img
                    className="cardImg"
                    src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1644400849/Gift/ufdu6jpnnx6hx47nezo1.jpg"
                    alt="profileImg"
                />
            </div>
            <div className="cardDetailContainer">
                <div className="cardNameAndLocation">
                    <p className="cardName">Jane</p>
                    <p className="cardLocation">15.00</p>
                </div>
                <div className="cardProfileCaption">How are you?</div>
            </div>
        </div>
    );
}

export default Conversation;
