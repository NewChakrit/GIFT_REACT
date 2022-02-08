import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ErrContextProvider from './contexts/ErrContext';
import AuthContextProvider from './contexts/AuthContext';

ReactDOM.render(
    <BrowserRouter>
        <ErrContextProvider>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </ErrContextProvider>
    </BrowserRouter>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
