import { useNavigate } from 'react-router-dom';
import timeSince from '../../services/timeSince';
import './Conversation.css';
import { useContext } from 'react';
import { ChatContext } from '../../contexts/ChatContext';
import axios from '../../config/axios';

function Conversation({ room }) {
    const navigate = useNavigate();
    const { toggledelete, chatRoom, setChatRoom } = useContext(ChatContext);

    const handleClickDeleteChat = async () => {
        try {
            await axios.delete(`/chat/${room.roomId}`);
            const newChatRoom = chatRoom.filter(
                (item) => item.roomId !== room.roomId
            );
            setChatRoom(newChatRoom);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div
            className="conversationCard"
            onClick={() => {
                toggledelete ? <></> : navigate(`/messenger/${room.friendId}`);
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
                    <div className="d-flex ">
                        {toggledelete ? (
                            <div onClick={handleClickDeleteChat}>
                                <i className="bi bi-trash3"></i>
                            </div>
                        ) : (
                            <p className="cardLocation">
                                {timeSince(room.updateTimeMessage)}
                            </p>
                        )}
                    </div>
                </div>
                <div className="cardProfileCaption" style={{ width: '50vw' }}>
                    {room?.message?.length > 20
                        ? room.message.slice(0, 20) + '...'
                        : room.message}
                </div>
            </div>
        </div>
    );
}

export default Conversation;
