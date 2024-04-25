import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function ProtectedRoutes({ children }) {

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
    })
    return (
        <div>
            {children}
            <Outlet />
        </div>
    )
}
