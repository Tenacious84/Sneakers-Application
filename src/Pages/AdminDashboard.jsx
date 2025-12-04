import React, { useEffect, useState } from 'react'
import { getProducts, createProduct, updateProduct, deleteProduct } from '../api/api'

function AdminDashboard() {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ name: "", description: "", price: "", category: "", stock: { 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 }, images: [] });
    const [editId, setEditId] = useState(null);


    useEffect(() => {
        if (localStorage.getItem('role') !== 'admin') {
            window.location.href = '/'
            alert('Unauthorised!')
        }
        async function load() {
            const res = await getProducts()
            setProducts(res.data)
        }
        load()
    }, [])

    function handleChange(e) {
        setForm({ ...form, [e.target.placeholder]: e.target.value })
        console.log(form)
    }
    return (
        <div>

             <h1>Admin Dashboard</h1>

            <h2>Create/Update Product</h2>
            <div>
                <input type="text" value={form.name} placeholder='name' onChange={handleChange} className='p-2 border'/>
                <input type="text" value={form.description} placeholder='description' onChange={handleChange} className='p-2 border'/>
                <input type="number" value={form.price} placeholder='price' onChange={handleChange} className='p-2 border'/>
                <input type="text" value={form.category} placeholder='category' onChange={handleChange} className='p-2 border'/>

                {[5, 6, 7, 8, 9, 10 ].map(size => (
                    <input type="number" value={form.stock[size]} placeholder={`Size ${size} stock`} />
                ))}

                <button>{editId ? 'Update Product' : 'Create Product'}</button>
            </div>
        </div>
    )
}

export default AdminDashboard