import React from 'react'
import Layout from '../../components/layouts/Layout'
import { NavLink } from 'react-router-dom'
import Menu from './Menu'

export default function AdminDashboard() {
    return (
        <Layout >
            <div className='row w-100'>
                <div className='col-3'>
                    <Menu />
                </div>
                <div className='col-9'>
                    <h5>Admin Dashboard</h5>
                </div>
            </div>
        </Layout>
    )
}
