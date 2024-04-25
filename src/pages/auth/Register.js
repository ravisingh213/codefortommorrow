import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
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
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, formData)
            setFormData({
                name: "",
                email: "",
                password: "",
                phone: "",
                address: "",
            })
            setLoading(false)
            navigate('/login')
            toast.success(res.data.message)
        } catch (error) {
            setLoading(false)
            toast.error(error.response.data.message)
        }
        // Add your form submission logic here, such as sending data to the server

    };
    return (
        <Layout>

            <div className="card shadow m-1" style={{ minWidth: "50vw" }}>
                <h4 className="text-center mb-3 bg-light shadow p-3 text-danger">Registeration Form</h4>
                <form className="p-3" onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div class="col-md-6">
                            <label for="name" class="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div class="col-md-6">
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
                    </div>
                    <div className="row mb-3">
                        <div class="col-md-6">
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
                        <div class="col-md-6">
                            <label for="phone" class="form-label">
                                Phone
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="phone"
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div class="col-md-6">
                            <label for="name" class="form-label">
                                Address
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="address"
                                name='address'
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" disabled={loading}>
                        {!loading ? "Submit" : <div class="spinner-border spinner-border-sm" role="status"></div>}
                    </button>
                </form>
            </div>

        </Layout>
    );
}

export default Register;
