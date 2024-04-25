import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useCart } from '../../context/cartContext';

export default function Header() {

    const [cart] = useCart()

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        toast('logout successfully')
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand"> <FaShoppingCart /> Ecommerce App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to='/category'>Categroy</NavLink>
                            </li>
                            {
                                localStorage.getItem('token') ? <>
                                    <li className="nav-item dropdown">
                                        {/* <a href='#' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                                        <div className='nav-link'>{JSON.parse(localStorage.getItem('user')).name}</div>
                                        {/* </a> */}
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" onClick={handleLogout} >Logout</NavLink>
                                    </li>
                                </> :
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to='/signup'>Signup</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to='/login'>Login</NavLink>
                                        </li></>
                            }
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/cart'>Cart
                                    <span class="position-absolute top-4 start-97 translate-middle badge rounded-pill bg-danger">
                                        {cart.length}
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
