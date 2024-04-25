import React, { useMemo, useState } from 'react'
import Layout from '../components/layouts/Layout'
import { useCart } from '../context/cartContext'

export default function CartPage() {
    const [cart, setCart] = useCart()
    const [showPrice, setShowPrice] = useState(true)

    const handleRemoveCartItem = (id) => {
        let cartData = [...cart]
        const cartFilterData = cartData.filter((cartItem, ind) => {
            return cartItem._id !== id
        })
        setCart([...cartFilterData])
    }

    const handleTotalPrice = () => {
        let total = 0
        cart.map((cartitem, ind) => {
            total = total + cartitem.price
        })
        return total
    }

    return (
        <Layout>
            <h1>Your Cart</h1>
            {cart.length > 0 ?
                <div className='row w-75 '>
                    <div className='col-9'>
                        <ul class="list-group">
                            {cart.map((cartItem, index) => {
                                return (
                                    <li key={index} class="list-group-item">
                                        <div className='row d-flex justify-content-center align-items-center'>
                                            <div className='col-3 border-end'>
                                                <img style={{ height: "70px" }} src='https://www.bhphotovideo.com/images/images2500x2500/apple_mj3t2ll_a_watch_sport_smartwatch_42mm_1187199.jpg' />
                                            </div>
                                            <div className='col-9'>
                                                <h5>{cartItem.name}</h5>
                                                <div>{cartItem.description}</div>
                                                <b className='text-success d-block'>Price : $ {cartItem.price}</b>
                                                <button className='btn btn-primary bg-danger' onClick={() => { handleRemoveCartItem(cartItem._id) }}>Remove</button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                    <div className='col-3'>
                        <div class="card">
                            <div className='card-header'>
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <div class="nav-link" aria-current="page" onClick={() => { setShowPrice(true) }} > Total Price</div>
                                    </li>
                                    <li class="nav-item">
                                        <div class="nav-link" onClick={() => { setShowPrice(false) }}>Payment</div>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body">
                                {showPrice ? `Price : $ ${handleTotalPrice()}` : "payment gatway"}
                            </div>
                        </div>
                    </div>

                </div>
                : "Cart Empty"}


        </Layout>
    )
}
