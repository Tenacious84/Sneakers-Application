import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById, createOrder } from '../api/api'
import { useParams } from 'react-router-dom'

function ProductDetails() {

    const { pid } = useParams()
    const [product, setProduct] = useState(null)
    const [size, setSize] = useState(null)

    useEffect(() => {
        async function load() {
            const res = await getProductById(pid)
            setProduct(res.data)
        }
        load()
    }, [])

    const buyNow = async () => {
        if (!size) return toast.warn("Select size!!!");

        try {
            await createOrder({
                "orderItems": [
                    {
                        "product": pid,
                        "size": size,
                        "qty": 1,
                        "price": product.price
                    }
                ],
                "totalPrice": product.price
            })
            toast.success("Order Placed!")
        }
        catch (err) {
            toast.error("Order failed")
        }
    }

    if (!product) return <div>Loading...</div>
    return (
        <div>
            ProductDetails Page

            <div className='p-4 max-w-xl mx-auto'>
                <img className='text-2xl font-bold mt-3' src={product.images?.[0]} alt="Sneaker image" />
                <h2 className='text-gray-500'>{product.name}</h2>
                <p className='text-xl font-semibold'>{product.price}</p>
                <p>{product.description}</p>

            </div>
            <div className='mt-4'>
                <h3 className='font-bold mb-2'>Select size</h3>
                <div flex gap-2>
                    {
                        [5, 6, 7, 8, 9, 10].map((s) => {
                            <button className={`p-2 border rounded m-1 ${size == s ? "bg-black text-white" : ""}`} key={s} onClick={() => setSize(s)} disabled={product.stock[String(s) === 0]}> {s}</button>

                        })
                    }
                </div>
                <button className='mt-4 bg-black text-white p-3' onClick={buyNow}>Buy now</button>
            </div>

        </div>
    )
}

export default ProductDetails