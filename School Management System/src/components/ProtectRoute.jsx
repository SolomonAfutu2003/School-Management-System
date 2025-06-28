import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate, Outlet } from 'react-router-dom'



const ProtectRoute = () => {
    const { user,loading } = useAuth()

    if (loading) {
        return <div>Loading...</div>;
      }

    return user ? <Outlet /> : <Navigate to="/auth/login-page" replace />;
}

export default ProtectRoute