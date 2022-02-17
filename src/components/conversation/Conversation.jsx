import { useNavigate } from 'react-router-dom';
import timeSince from '../../services/timeSince';
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
                    src={room.profileUrl}
                    alt="profileImg"
                />
            </div>
            <div className="cardDetailContainer">
                <div className="cardNameAndLocation">
                    <p className="cardName">{room.username}</p>
                    <p className="cardLocation">
                        {timeSince(room.updateTimeMessage)}
                    </p>
                </div>
                <div className="cardProfileCaption" style={{ width: '50vw' }}>
                    {room.message.length > 40
                        ? room.message.slice(0, 40) + '.....'
                        : room.message}
                </div>
            </div>
        </div>
    );
}

export default Conversation;
