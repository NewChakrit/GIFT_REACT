import axios from '../config/axios';
import { createContext, useState, useEffect, useContext } from 'react';
import jwtDecode from 'jwt-decode';
// import * as localStorageService from '../services/localStorage';

const UserContext = createContext();

function UserContextProvider(props) {
    const [userData, setUserData] = useState('');

    // Get data profile
    const token = localStorage.getItem('token');
    const fetchUser = async (tokenInput) => {
        const a = jwtDecode(token || tokenInput);
        const res = await axios.get(`/user/${a.username}`);
        setUserData(res.data.user);
    };
    useEffect(() => {
        if (token) {
            fetchUser();
        }
    }, [token]);

    if (!userData) {
        return <></>;
    }

    return (
        <UserContext.Provider
            value={{
                userData,
                fetchUser,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
export { UserContext };
