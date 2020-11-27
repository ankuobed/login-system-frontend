import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [user, setUser] = useState('')
    return (
        <StateContext.Provider value={[user, setUser]}>
            { children }
        </StateContext.Provider>
    );
}

export const useStateValue = () => useContext(StateContext);