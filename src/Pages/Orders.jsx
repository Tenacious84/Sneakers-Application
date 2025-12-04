import React from 'react'
import { useEffect, useState } from 'react'
import { getOrders } from '../api/api'

function Orders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        async function load() {
            const res = await getOrders()
            setOrders(res.data)
        }
        load()
    }, [])

    return (
        <div className='p-4 max-w-xl mx-auto'>
            <h2 className='text-xl font-bold mb-4'>My Orders</h2>

            {
                orders.map((o) => (
                    <div key={o._id} className='shadow p-3 mb-3 rounded'>
                        <p>{o._id}</p>
                        <p>{o.status}</p>
                        <p>{o.orderItems?.[0].product.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Orders