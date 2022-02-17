import './Messenger.css';
import Conversation from '../../components/conversation/Conversation';
import { UserContext } from '../../contexts/UserContext';
import { SocketContext } from '../../contexts/SocketContext';
import { ChatContext } from '../../contexts/ChatContext';
import { useContext } from 'react';

function Messenger() {
    const { userData } = useContext(UserContext);
    const { fetchMessage } = useContext(SocketContext);
    const { chatRoom } = useContext(ChatContext);
    return (
        <>
            <div
                className="messagePage"
                style={{
                    marginTop: '100px',
                    height: '100%',
                    width: '100vw',
                }}
            >
                {chatRoom.map((item) => (
                    <Conversation
                        room={item}
                        key={item.roomId}
                        userData={userData}
                        fetchMessage={fetchMessage}
                    />
                ))}
            </div>
        </>
    );
}

export default Messenger;
