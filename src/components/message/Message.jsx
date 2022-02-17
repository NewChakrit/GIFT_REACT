import { useState } from 'react';
import timeSince from '../../services/timeSince';
import './Message.css';

function Message({ message, own, userData }) {
    const [toggle, setToggle] = useState(false);
    return (
        <div style={{ paddingBottom: '20px' }}>
            {toggle ? (
                <div className="time">{timeSince(message.time)}</div>
            ) : (
                <></>
            )}
            <div
                className={`main-message ${own ? 'own-message' : ''}`}
                onClick={() => setToggle(!toggle)}
            >
                <div className="profileCardImg messageImg">
                    <img
                        className="cardImg"
                        src={message.profileUrl}
                        alt="profileImg"
                    />
                </div>
                <div className={`message ${own ? 'ownptag' : 'ptag'}`}>
                    <p>{message.message}</p>
                </div>
            </div>
        </div>
    );
}

export default Message;

// <>
//     <div className="time">3 s</div>
//     <div className="main-message">
//         <div className="profileCardImg messageImg">
//             <img
//                 className="cardImg"
//                 src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1644400849/Gift/ufdu6jpnnx6hx47nezo1.jpg"
//                 alt="profileImg"
//             />
//         </div>
//         <div className="message ptag">
//             <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
//                 possimus quisquam fugit delectus reprehenderit minus suscipit
//                 saepe velit. Porro, pariatur?
//             </p>
//         </div>
//     </div>
//     <div className="main-message own-message">
//         <div className="profileCardImg messageImg">
//             <img
//                 className="cardImg"
//                 src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1644400849/Gift/ufdu6jpnnx6hx47nezo1.jpg"
//                 alt="profileImg"
//             />
//         </div>
//         <div className="message ownptag">
//             <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
//                 possimus quisquam fugit delectus reprehenderit minus suscipit
//                 saepe velit. Porro, pariatur?
//             </p>
//         </div>
//     </div>
// </>;
