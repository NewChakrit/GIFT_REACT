import './Footer.css';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();
    console.log(location.pathname);

    if (location.pathname.includes('/chat')) {
        return <></>;
    }
    return (
        <>
            <div className="main-footer">
                <Link to="/">
                    <div className="logo home">
                        <i className="bi bi-gift"></i>
                    </div>
                </Link>
                <Link to="/">
                    <div className="logo map">
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </Link>
                <Link to="messenger">
                    <div className="logo message">
                        <i className="bi bi-chat-heart"></i>
                    </div>
                </Link>
                <Link to="profile">
                    <div className="logo profile">
                        <i className="bi bi-person"></i>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Footer;
