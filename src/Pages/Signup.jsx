import React, { useState } from 'react'
import { signupUser } from '../api/api'

function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignup() {
    try {
      const res = await signupUser({name, email, password})
      localStorage.setItem('token', res.data.token)
      window.location.href='/'
    }
    catch (err) {
alert('Signup failed')
   }
    }
 


  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>Signup</h2>

      <input type="text" placeholder='Name...' onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
      <button className='bg-black text-white p-2 w-full' onClick={handleSignup}>Signup</button>


    </div>
  )
}

export default Signup