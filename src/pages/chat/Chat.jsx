import './Chat.css';
import Message from '../../components/message/Message';
import FooterChat from './footerChat/FooterChat';
import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { ChatContext } from '../../contexts/ChatContext';
import { SocketContext } from '../../contexts/SocketContext';
import { useParams } from 'react-router-dom';

function Chat() {
    const [inputText, setInputText] = useState('');

    const { userData, socket } = useContext(UserContext);
    const { fetchFriendList } = useContext(ChatContext);
    const { sendMessage, messages, fetchMessage, typingStatus, typingName } =
        useContext(SocketContext);
    const chatboxRef = useRef(null);

    const handleClickSend = (e) => {
        e.preventDefault();
        sendMessage({ message: inputText, userId: userData.id });
        setInputText('');
        fetchFriendList();
    };

    const { id } = useParams();
    useEffect(() => {
        if (id) {
            fetchMessage(id);
        }
        fetchFriendList();
    }, [id]);

    useEffect(() => {
        chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
    });

    const handleChangeTyping = (e) => {
        setInputText(e.target.value);
        socket.emit('typing');
    };
    return (
        <form onSubmit={handleClickSend}>
            <div className="main-chat" style={{ paddingTop: '10px' }}>
                <div
                    className="chatBoxTop"
                    ref={chatboxRef}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>
                        {messages.map((item, index) => {
                            return (
                                <Message
                                    message={item}
                                    key={index}
                                    own={userData.id === item.userId}
                                    userData={userData}
                                />
                            );
                        })}
                    </div>
                    <div className="typingMessage">
                        {typingStatus ? `${typingName} is typing ...` : ''}
                    </div>
                </div>
                <FooterChat
                    handleChangeTyping={handleChangeTyping}
                    inputText={inputText}
                />
            </div>
        </form>
    );
}

export default Chat;
