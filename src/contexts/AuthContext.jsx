import axios from '../config/axios';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import * as localStorageService from '../services/localStorage';
import { useContext } from 'react';
import { ErrContext } from '../contexts/ErrContext';
const AuthContext = createContext();

function AuthContextProvider(props) {
    const [user, setUser] = useState(null);
    const { error, setError } = useContext(ErrContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState(localStorageService.getRole());
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [gender, setGender] = useState('');
    const [interest, setInterest] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser(jwtDecode(token));
        }
    }, []);

    const handleSubmitLogin = async (e) => {
        try {
            e.preventDefault();
            console.log(5555);
            const res = await axios.post('/auth/login', { email, password });

            login(res.data.token);
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
            setTimeout(() => setError(''), 3000);
        }
    };
    const login = async (token) => {
        try {
            await localStorageService.setToken(token);
            setUser(jwtDecode(token));
            setRole('user');
            navigate('/');
            setEmail('');
            setPassword('');
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/auth/register', {
                firstName,
                lastName,
                username,
                email,
                password,
                confirmPassword,
                profileUrl: imageUrl,
            });

            await axios.post(`/about/${res.data.myUser.id}`, {
                gender,
                interest,
            });
            navigate('/login');
            setFirstName('');
            setLastName('');
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
            setTimeout(() => setError(''), 3000);
        }
    };

    const logout = () => {
        localStorageService.removeToken();
        setUser(null);
        setRole('guest');
        navigate('/login');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                email,
                setEmail,
                password,
                setPassword,
                error,
                setError,
                handleSubmitLogin,
                handleSubmitRegister,
                login,
                logout,
                firstName,
                setFirstName,
                lastName,
                setLastName,
                confirmPassword,
                setConfirmPassword,
                username,
                setUsername,
                role,
                setRole,
                loading,
                setLoading,
                imageUrl,
                setImageUrl,
                gender,
                setGender,
                interest,
                setInterest,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;
export { AuthContext };
