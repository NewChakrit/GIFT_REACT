import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    // const classes = useStyles();

    return (
        <div className="login">
            <div className="logo">
                <img
                    src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1644303690/Gift/Gift_v1_xq6xdr.jpg"
                    alt="Logo"
                />
            </div>
            <div className="loginForm">
                <form className="pt-3 p-5">
                    <div className="mb-3 pb-4">
                        <input
                            type="email"
                            className="form-control inputLogin"
                            id="exampleFormControlInput1"
                            placeholder="E-mail"
                        />
                        <i className="bi bi-envelope placeHolderEmail"></i>
                    </div>
                    <div className="mb-3 ">
                        <input
                            type="password"
                            className="form-control inputLogin"
                            id="exampleFormControlInput1"
                            placeholder="Password "
                        />
                    </div>
                    <div className="form-check pb-5">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                            style={{ border: 'none' }}
                        />
                        <i className="bi bi-eye-slash placeHolderPassword"></i>
                        {/* <i className="bi bi-eye placeHolderPassword"></i> */}
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
                        <a href="#">Sign up for Gift</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
