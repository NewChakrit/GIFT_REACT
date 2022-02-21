import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { ErrContext } from '../../../contexts/ErrContext';
import './login.css';

function Login() {
    const { email, setEmail, password, setPassword, handleSubmitLogin } =
        useContext(AuthContext);
    const { error } = useContext(ErrContext);
    const [showPassword, setShowPassword] = useState(false);
    const [isRemember, setIsRemember] = useState(false);
    console.log(isRemember);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitLogin(isRemember);
    };

    return (
        <div className="login">
            <div className="logo">
                <img
                    src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1644303690/Gift/Gift_v1_xq6xdr.jpg"
                    alt="Logo"
                />
            </div>
            <div className="loginForm">
                <form className="pt-3 p-5" onSubmit={handleSubmit}>
                    <div className="mb-3 pb-4 position-relative">
                        <input
                            type="email"
                            className={`form-control inputLogin ${
                                error && !email ? 'is-invalid' : ''
                            }`}
                            id="emailInput"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Please fill your email.
                        </div>
                        {error && !email ? (
                            <></>
                        ) : (
                            <i className="bi bi-envelope placeHolderInput"></i>
                        )}
                    </div>
                    <div className="mb-3 position-relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className={`form-control inputLogin ${
                                error && !password ? 'is-invalid' : ''
                            }`}
                            id="passwordInput"
                            placeholder="Password "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Please fill your password.
                        </div>
                        {error && !password ? (
                            <></>
                        ) : (
                            <i
                                className={`bi bi-eye${
                                    showPassword ? '-slash' : ''
                                } placeHolderInput`}
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                        )}
                    </div>
                    <div className="form-check pb-5">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                            style={{ border: 'none' }}
                            onClick={() => setIsRemember(!isRemember)}
                        />
                        <label
                            className="form-check-label rememberme"
                            htmlFor="flexCheckChecked"
                        >
                            Remember Me
                        </label>
                    </div>
                    <button type="submit" className="btn loginButton">
                        Login
                    </button>
                    <div className="signUpLink">
                        <Link to={'/register'}>Sign up for Gift</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
