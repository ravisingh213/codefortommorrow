import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <div className="list-group">
            <NavLink to='/dashboard' className="list-group-item " aria-current="true">AdminDashboard</NavLink>
            <NavLink to='/user' className="list-group-item">User</NavLink>
            <NavLink to='/catogary' className="list-group-item">Catogary</NavLink>
            <NavLink to='/product' className="list-group-item">Product</NavLink>
        </div>
    )
}
