import { createContext, useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const SocketContext = createContext();

function SocketContextProvider(props) {
    const { socket, userData, setSocket } = useContext(UserContext);
    const [messages, setMessages] = useState([]);
    const [roomId, setRoomId] = useState([]);
    const [typingStatus, setTypingStatus] = useState(false);
    const [typingName, setTypingName] = useState(null);

    //receive message
    useEffect(() => {
        socket?.on('receive_message', ({ message }) => {
            setMessages((currentMessage) => [...currentMessage, ...message]);
        });
        socket?.on('room-data', ({ roomData, chatRoomId }) => {
            setRoomId(chatRoomId);
            const temp = roomData.map((item) => {
                return {
                    message: item.message,
                    userId: item.User.id,
                    profileUrl: item.User.profileUrl,
                    firstName: item.User.firstName,
                    lastName: item.User.lastName,
                    time: item.createdAt,
                };
            });
            setMessages(temp);
        });
        socket?.on('typing', ({ username }) => {
            setTypingStatus(true);
            setTypingName(username);
            setTimeout(() => {
                setTypingStatus(false);
                setTypingName('');
            }, 5000);
        });
    }, [socket]);

    // send message
    const sendMessage = ({ message, userId }) => {
        socket.emit('send_message', {
            message,
            userId,
        });
    };

    // join room
    const fetchMessage = async (id) => {
        await socket?.emit('join', { friendId: id });
    };

    return (
        <SocketContext.Provider
            value={{
                sendMessage,
                messages,
                fetchMessage,
                typingStatus,
                typingName,
            }}
        >
            {props.children}
        </SocketContext.Provider>
    );
}

export default SocketContextProvider;
export { SocketContext };
