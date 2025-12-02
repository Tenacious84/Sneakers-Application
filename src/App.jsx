import { useState } from 'react'
import './App.css'
import Navbar from './Components/navBar'
import { Outlet } from 'react-router-dom'


function App() {
  

  return (
    <>
      <Navbar/>
    <b>NAME IS TENACIOUS!</b>
 < Outlet/>
    </>
  )
}

export default App
