import axios from 'axios';
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function CreateProduct(props) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [quatity, setQuatity] = useState('')
    const [price, setPrice] = useState('')
    const [photo, setPhoto] = useState('')
    const [catagory, setCatogary] = useState('')




    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create a FormData object to handle file uploads
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('category', catagory);
        formData.append('photo', photo);
        formData.append('quatity', quatity);
        formData.append('price', price);

        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/create-product`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": localStorage.getItem('token')
                }
            });
            console.log('Response:', response.data);
            setName('')
            setDescription('')
            setPhoto('')
            setPrice('')
            setQuatity('')
            setCatogary('')
            toast.success(response.data.message)
            props.onHide()

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
            setName('')
            setDescription('')
            setPhoto('')
            setPrice('')
            setQuatity('')
            setCatogary('')
        }
        // Add your form submission logic here, such as sending data to the server

    };
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create New Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="form-group">
                                    <label htmlFor="description">Description:</label>
                                    <input
                                        type="text"
                                        id="description"
                                        value={description}
                                        onChange={(e) => { setDescription(e.target.value) }}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="form-group">
                                    <label htmlFor="category">Category:</label>
                                    <select class="form-select" aria-label="Default select example" onChange={(e) => { setCatogary(e.target.value) }} s>
                                        <option selected>Select</option>
                                        {
                                            props.catogaryList.map((cat, ind) => {
                                                return (
                                                    <option value={cat._id}>{cat.name}</option>
                                                )
                                            })
                                        }

                                    </select>
                                    {/* <input
                                        type="text"
                                        id="category"
                                        value={catagory}
                                        onChange={(e) => { setCatogary(e.target.value) }}
                                        required
                                    /> */}
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="form-group">
                                    <label htmlFor="photo">Photo:</label>
                                    <input
                                        type="file"
                                        id="photo"
                                        // value={photo}
                                        onChange={(e) => { setPhoto(e.target.files[0]) }}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="form-group">
                                    <label htmlFor="quatity">Quatity:</label>
                                    <input
                                        type="number"
                                        id="quatity"
                                        value={quatity}
                                        onChange={(e) => { setQuatity(e.target.value) }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="form-group">
                                    <label htmlFor="price">Price:</label>
                                    <input
                                        type="number"
                                        id="price"
                                        value={price}
                                        onChange={(e) => { setPrice(e.target.value) }}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
