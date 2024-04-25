import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Layout from '../../components/layouts/Layout'
import axios from 'axios'
import CreateProduct from './CreateProduct'

export default function Product() {
    const [productList, setProductList] = useState([])
    const [catogaryList, setCatogaryList] = useState([])
    const [openCreateModal, setOpenCreateModal] = useState(false)

    const fetchAllCatageryList = async () => {
        try {
            const Catogary = await axios.get(`${process.env.REACT_APP_API}/api/v1/catogary/list-catogary`, {
                headers: {
                    // "Content-Type":"application/json",
                    "Authorization": localStorage.getItem('token')
                }
            })
            if (Catogary.data.status) {
                setCatogaryList(Catogary.data.catogary)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchAllCatageryList()
    }, [])

    const fetchAllProductList = async () => {
        try {
            const product = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/list-product`, {
            })
            console.log(product)
            if (product.data.success) {
                setProductList(product.data.products)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchAllProductList()
    }, [openCreateModal])
    return (
        <>
            <CreateProduct show={openCreateModal} onHide={() => setOpenCreateModal(false)} catogaryList={catogaryList} />
            <Layout >
                <div className='row w-100'>
                    <div className='col-3'>
                        <Menu />
                    </div>
                    <div className='col-9'>
                        <div className='mb-5 bg-dark  text-info'>
                            <h3 className='d-inline' style={{ float: "left" }}>Product</h3>
                            <button className='btn btn-success' style={{ float: "right" }} onClick={() => { setOpenCreateModal(true) }}>Create +</button>
                        </div>

                        <div className='row mb-2'>
                            {
                                productList?.length > 0 ? productList.map((product, ind) => {
                                    return (
                                        <div key={ind} className='col-4 mb-2'>
                                            <div class="card" style={{ width: '18rem' }}>
                                                <img src={`https://www.bhphotovideo.com/images/images2500x2500/apple_mj3t2ll_a_watch_sport_smartwatch_42mm_1187199.jpg`} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{product.name}</h5>
                                                    <p class="card-text">{product.description}</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }) : <h6>List Empaty</h6>
                            }
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}
