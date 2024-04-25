import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function UpdateCatogaryModal(props) {
    const [catogaryName, setCatogaryName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/catogary/update-catogary/${props.catagory._id}`, { name: catogaryName }, {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            })
            console.log(res)
            toast.success(res.data.message)
            setCatogaryName('')
            props.onHide()

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
            setCatogaryName('')
        }
        // Add your form submission logic here, such as sending data to the server

    };

    useEffect(() => {
        setCatogaryName(props.catagory.name)
    }, [props.show])
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Catogary
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={catogaryName}
                            onChange={(e) => { setCatogaryName(e.target.value) }}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </Modal.Body>
        </Modal>
    )
}
