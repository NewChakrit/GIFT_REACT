import './Footer.css';

function Footer() {
    return (
        <>
            <div className="main-footer">
                <div className="logo home">
                    <i className="bi bi-gift"></i>
                </div>
                <div className="logo map">
                    <i className="bi bi-geo-alt"></i>
                </div>
                <div className="logo message">
                    <i className="bi bi-chat-heart"></i>
                </div>
                <div className="logo profile">
                    <i className="bi bi-person"></i>
                </div>
            </div>
        </>
    );
}

export default Footer;
