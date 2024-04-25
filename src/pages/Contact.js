import React, { useState } from 'react'
import Layout from '../components/layouts/Layout'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted!");
    };
    return (
        <Layout title={"ecommerce App- Contact Us"}>
            <div className="contact-form-container ">
                <h2 className='text-center'>Contact Us</h2>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="image-container">
                            {/* Replace 'imageUrl' with the actual URL of your image */}
                            <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg" alt="Contact" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={handleMessageChange}
                                    required
                                />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
