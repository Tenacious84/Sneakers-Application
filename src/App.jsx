import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/navBar'
import { Outlet } from 'react-router-dom'
import { getProducts } from './api/api'
import ProductCard from './components/ProductCard'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
      <ToastContainer />
      <Navbar />


      < Outlet />
    </>
  )
}

export default App