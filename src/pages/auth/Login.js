import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, formData)
            console.log(res)
            setFormData({
                email: "",
                password: ""
            })
            setLoading(false)
            console.log(res.data.user)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            toast.success(res.data.massage)
            if (res.data.user.role === 1) {
                console.log(res.data.user.role)
                navigate('/dashboard')
            } else {
                navigate('/')
            }
        } catch (error) {
            setLoading(false)
            toast.error(error.response.data.massage)
        }
        // Add your form submission logic here, such as sending data to the server

    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/')
        }
    }, [])

    return (
        <Layout>
            <div className="card shadow m-1" style={{ minWidth: "50vw" }}>
                <h4 className="text-center mb-3 bg-light shadow p-3 text-danger">Login Form</h4>
                <form className="p-3" onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div class="col-12 mb-3">
                            <label for="email" class="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div class="col-12">
                            <label for="password" class="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                class="form-control"
                                id="password"
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" disabled={loading}>
                        {!loading ? "Login" : <div class="spinner-border spinner-border-sm" role="status"></div>}
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default Login
