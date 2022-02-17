import './Messenger.css';
import Conversation from '../../components/conversation/Conversation';

function Messenger() {
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
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
            </div>
        </>
    );
}

export default Messenger;
