import React from 'react'
import Layout from '../components/layouts/Layout'

export default function About() {
    return (
        <Layout title={'About us -Ecommerce App'}>
            <div className="about-form-container ">
                <h2 className='text-center'>About Us</h2>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <div className="image-container">
                            {/* Replace 'imageUrl' with the actual URL of your image */}
                            <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg" alt="Contact" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <p>Connect emotionally: Share the brand's story or the product's origin to create a personal connection with customers.
                            Highlight values: Showcase the brand's mission, values, or commitment to sustainability, social responsibility, etc.
                            Engage the audience: Use storytelling techniques to captivate readers and keep them invested in the brand narrative.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
