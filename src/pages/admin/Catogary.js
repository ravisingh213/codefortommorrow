import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Layout from '../../components/layouts/Layout'
import axios from 'axios'
import CreateCatogaryModal from './CreateCatogaryModal'
import UpdateCatogaryModal from './UpdateCatogaryModal'
import Pagination from '../../components/layouts/Pagination'

export default function CreateCatogary() {
    const [catogaryList, setCatogaryList] = useState([])
    const [openCreateModal, setOpenCreateModal] = useState(false)
    const [catagory, setCatogary] = useState('')
    const [openUpdateModal, setOpenUpdateModal] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [currentPage, setCurrentPage] = useState(0); // or whatever default page you want
    // const [data, setData] = useState([]); // your paginated data
    const itemsPerPage = 5; // number of items per page

    // Function to handle page change
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    // Function to get the current page data
    const getCurrentPageData = () => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return catogaryList.slice(startIndex, endIndex);
    };

    const setHandleDeleteCatagry = async (id) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/catogary/delete-catogary/${id}`, {
                headers: {
                    // "Content-Type":"application/json",
                    "Authorization": localStorage.getItem('token')
                }
            })
            setDeleted(!deleted)
        } catch (error) {
            console.log(error)
        }
    }

    const setHandleUpdateCatogryModal = async (slug) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/catogary/single-catogary/${slug}`, {
                headers: {
                    // "Content-Type":"application/json",
                    "Authorization": localStorage.getItem('token')
                }
            })
            setCatogary(res.data.catogary)
            setOpenUpdateModal(true)
        } catch (error) {
            console.log(error)
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
    }, [openCreateModal, openUpdateModal, deleted])

    return (
        <>
            <CreateCatogaryModal show={openCreateModal} onHide={() => setOpenCreateModal(false)} />
            <UpdateCatogaryModal show={openUpdateModal} onHide={() => setOpenUpdateModal(false)} catagory={catagory} />
            <Layout >
                <div className='row w-100'>
                    <div className='col-3'>
                        <Menu />
                    </div>
                    <div className='col-9'>
                        <div className='mb-5 bg-dark  text-info'>
                            <h3 className='d-inline' style={{ float: "left" }}>Catogary</h3>
                            <button className='btn btn-success' style={{ float: "right" }} onClick={() => { setOpenCreateModal(true) }}>Create +</button>
                        </div>
                        <div className='table-responsive'>
                            <table class="table table-bordered ">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Slug</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        catogaryList?.length > 0 ? getCurrentPageData().map((catagory, ind) => {
                                            return (
                                                <tr key={ind}>
                                                    <th scope="row">{ind + 1}</th>
                                                    <td>{catagory.name}</td>
                                                    <td>{catagory.slug}</td>
                                                    <td>
                                                        <button className='btn btn-info mx-2' onClick={() => { setHandleUpdateCatogryModal(catagory.slug) }}>Edit</button>
                                                        <button className='btn btn-danger' onClick={() => { setHandleDeleteCatagry(catagory._id) }}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        }) : <h6>List Empaty</h6>
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Pagination
                            pageCount={Math.ceil(catogaryList.length / itemsPerPage)}
                            onPageChange={handlePageChange}
                        />

                    </div>
                </div>
            </Layout>
        </>

    )
}
