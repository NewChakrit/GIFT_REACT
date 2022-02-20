import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import "./login.css";

function Login() {
  const { email, setEmail, password, setPassword, handleSubmitLogin } =
    useContext(AuthContext);

  return (
    <div className="login">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/do58tgs2e/image/upload/v1645345853/gift_plmqmv.png"
          alt="Logo"
        />
        <img
          className="sparkle"
          //   src="https://media.giphy.com/media/WNwLx0skSQOPCgbxNL/giphy.gif"
          src="https://media.giphy.com/media/Y4hQj1h0eVbE3rIInW/giphy.gif"
        />
      </div>
      <div className="loginForm">
        <form className="pt-3 p-5" onSubmit={handleSubmitLogin}>
          <div className="mb-3 pb-4">
            <input
              type="email"
              className="form-control inputLogin"
              id="emailInput"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bi bi-envelope placeHolderEmail"></i>
          </div>
          <div className="mb-3 ">
            <input
              type="password"
              className="form-control inputLogin"
              id="passwordInput"
              placeholder="Password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check pb-5">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              style={{ border: "none" }}
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
            <Link to={"/register"}>Sign up for Gift</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
