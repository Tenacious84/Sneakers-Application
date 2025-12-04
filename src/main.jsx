import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import Home from './components/Home.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
import AdminDashboard from './Pages/AdminDashboard.jsx'


const router = createBrowserRouter([

  {
    path: '/',
    Component: App,
    children:[
  {
      path: '',
      Component: Home
    },
  {
    path: 'login',
    Component: Login
  },
  {
    path: 'signup',
    Component: Signup
  },
    {
      path: 'products/:pid',
      Component: ProductDetails
    },
    {
      path: 'orders',
      Component: Orders
    },
   {
     path:'admin',
     Component: AdminDashboard
   }


    ]
  },

  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
