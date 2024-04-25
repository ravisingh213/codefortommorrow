import React, { useEffect, useState } from 'react'
import Layout from '../components/layouts/Layout'
import axios from 'axios'
import { useCart } from '../context/cartContext'


export default function Home() {
    const [productList, setProductList] = useState([])
    const [catogaryList, setCatogaryList] = useState([])
    const [catogary, setCatogary] = useState('')
    const [cart, setCart] = useCart()


    const handleFilter = async (e) => {
        setCatogary(e.target.value)
        console.log(e.target.value)
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/filterByCatogary-product/${e.target.value}`);
            setProductList(data.products);
        } catch (error) {
            console.log(error);
        }
    }

    //get all [product]

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/list-product`);
            setProductList(data.products);
        } catch (error) {
            console.log(error);
        }
    }

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

    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <Layout title={"Ecommerce App - Best Product"}>
            <div className='row w-100'>
                <div className='col-md-3'>
                    <h4 className='text-center'>Filter By Catogary</h4>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <select class="form-select" aria-label="Default select example" onChange={(e) => { handleFilter(e) }} >
                            <option selected>Select</option>
                            {
                                catogaryList.map((cat, ind) => {
                                    return (
                                        <option value={cat._id}>{cat.name}</option>
                                    )
                                })
                            }

                        </select>
                    </div>
                </div>
                <div className='col-md-9'>
                    <h5 className='text-center'>All Products</h5>
                    <div className='row'>
                        {
                            productList?.length > 0 ? productList.map((product, ind) => {
                                return (
                                    <div key={ind} className='col-4 mb-2'>
                                        <div class="card" style={{ width: '18rem' }}>
                                            <img src={`https://www.bhphotovideo.com/images/images2500x2500/apple_mj3t2ll_a_watch_sport_smartwatch_42mm_1187199.jpg`} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{product.name}</h5>
                                                <p class="card-text border-bottom">{product.description}</p>
                                                <button class="btn btn-primary" onClick={() => { setCart([...cart, product]) }}>Add To Cart</button>
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
    )
}
