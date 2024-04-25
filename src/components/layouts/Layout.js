import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children, title, desc, keywords, author }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={desc} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: '76vh' }} className='d-flex flex-column align-items-center justify-content-center'>
                <ToastContainer />
                {children}
            </main>
            <Footer />

        </div>
    )
}

Layout.defaultProps = {
    title: 'Ecommerce App',
    desc: "mern stack project",
    keywords: 'ecommerce, react, mern',
    auther: "ravi singh"
}
