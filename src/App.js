import './App.css';
import { Toast } from 'bootstrap';
import { useContext, useEffect, useRef } from 'react';
import { ErrContext } from './contexts/ErrContext';
import RouteConfig from './routes/RouteConfig';
import { useLocation } from 'react-router-dom';

function App() {
    const { error } = useContext(ErrContext);
    const toastEl = useRef();
    const location = useLocation();

    useEffect(() => {
        if (error) {
            const toast = new Toast(toastEl.current);
            toast.show();
        }
    }, [error]);
    return (
        <>
            <div className="toast-container position-absolute p-3 me-5 start-50 bottom-0 translate-middle-x">
                <div
                    className={`toast align-items-center text-white bg-danger border-0`}
                    ref={toastEl}
                >
                    <div className="d-flex">
                        <div className="toast-body">
                            {location.pathname === '/'
                                ? 'Email or Password is incorect'
                                : 'Register fail'}
                        </div>

                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                        ></button>
                    </div>
                </div>
            </div>

            <RouteConfig />
        </>
    );
}

export default App;
