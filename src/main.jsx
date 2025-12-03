import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
    //   {
    //     path: 'home',
    //     Component: Home
    //   },
      {
        path: 'login',
        Component: Login
      }, 
      {
        path: 'signup',
        Component: Signup
      },
    //   {
    //     path: 'products/:pid',
    //     Component: ProductDetails
    //   },
    //   {
    //     path: 'orders',
    //     Component: Orders
    //   }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
