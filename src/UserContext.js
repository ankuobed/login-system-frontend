import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={useState('')}>
            { children }
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)