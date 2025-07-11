import React, { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'

const authContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('authUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('authUser', JSON.stringify(userData))
    }
    const logout = () => setUser(null)

    return (
        <authContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext)

export default AuthProvider