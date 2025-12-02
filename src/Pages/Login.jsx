import React, { useState } from 'react'
import {loginUser} from '../api/api'

function Login() {
    const [email, setEmail]=useState('')
    const [password, setPassword]= useState('')
  return (
    <div className='p-6 max-w-md mx-auto'>
        <h2 className='text-xl font-bold mb-4'>Login</h2>
        <input type="email" placeholder='Email...' onChange={(e)=>setEmail(e.target.value)}/>
           <input type="password" placeholder='Password...' onChange={(e)=>setPassword(e.target.value)}/>
        <button>Login</button>
        </div>
  )
}

export default Login