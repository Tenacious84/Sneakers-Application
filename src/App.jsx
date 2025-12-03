import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/navBar'
import { Outlet } from 'react-router-dom'
import { getProducts } from './api/api'
import ProductCard from './components/ProductCard'


function App() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    async function load() {
      const res = await getProducts()
      setProducts(res.data)
      console.log(res)
    }
    load()
  }, [])

  return (
    <>
      <Navbar />
      {
        products.map((p) => {
          <ProductCard product={p} key={p._id} />
        })
      }

      < Outlet />
    </>
  )
}

export default App