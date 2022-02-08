import React, { createContext, useState } from 'react';

const ErrContext = createContext();

function ErrContextProvider({ children }) {
    const [error, setError] = useState('');

    return (
        <ErrContext.Provider value={{ error, setError }}>
            {children}
        </ErrContext.Provider>
    );
}

export default ErrContextProvider;
export { ErrContext };
