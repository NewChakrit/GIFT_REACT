import './FooterChat.css';

function FooterChat({ handleChangeTyping, inputText }) {
    return (
        <div className="main-footer footer-chat">
            <input
                type="text"
                className="form-control"
                placeholder="Aa"
                aria-label="Aa"
                aria-describedby="addon-wrapping"
                value={inputText}
                onChange={handleChangeTyping}
            />
            <i className="bi bi-arrow-up-square"></i>
        </div>
    );
}

export default FooterChat;
