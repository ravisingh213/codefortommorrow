import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
export default function AdminProtectedRoutes() {

    const navigate = useNavigate()
    const location = useLocation()

    // console.log(location)

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
        if (localStorage.getItem('user').role !== 1) {
            navigate(location.pathname)
        }
    })
    return (
        <div>
            {/* {children} */}
            <Outlet />
        </div>
    )
}
