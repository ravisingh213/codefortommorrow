import React from 'react'
import Layout from '../components/layouts/Layout'

export default function PageNotFound() {
    return (
        <Layout title={"Go Back - Page Not Found"}>
            <div className=''>
                <h1 className='error-page-heading'>404 Error</h1>
                <p className='error-page-para'>Oops! Page not found.</p>
            </div>
        </Layout>
    )
}
