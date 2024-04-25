import React from 'react'
import Menu from './Menu'
import Layout from '../../components/layouts/Layout'

export default function User() {
    return (
        <Layout >
            <div className='row w-100'>
                <div className='col-3'>
                    <Menu />
                </div>
                <div className='col-9'>
                    <h5>User</h5>
                </div>
            </div>
        </Layout>
    )
}
