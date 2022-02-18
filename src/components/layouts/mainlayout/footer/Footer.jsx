import './Footer.css';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../../contexts/UserContext';

function Footer() {
    const { userData } = useContext(UserContext);
    const location = useLocation();

    if (location.pathname.includes('/messenger/')) {
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
                <Link to="/search">
                    <div className="logo map">
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </Link>
                <Link to="messenger">
                    <div className="logo message">
                        <i className="bi bi-chat-heart"></i>
                    </div>
                </Link>
                <Link to={`profile/${userData.username}`}>
                    <div className="logo profile">
                        <i className="bi bi-person"></i>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Footer;
