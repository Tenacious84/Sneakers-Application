import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const token = localStorage.getItem('token')
    const logOut = () => {
        localStorage.removeItem('token')
        window.location.href = '/'
    }

    return (
        <nav className='p-4 bg-black text-white flex justify-between'  ><Link to={'/'}><b>COMFORT WITH WORLD CLASS CHARISMA</b> </Link>

            <div className='flex gap-4'>

                {!token ?
                    (<div>
                        <Link to={'/signup'}>Signup  </Link>
                        <Link to={'/login'}>Login  </Link>
                    </div>) :
                    (<div>
                        <Link to={'/orders'}>My Orders  </Link>
                        <button onClick={() => logOut()}> Logout </button>
                    </div>)
                }
            </div>


        </nav>
    )
}

export default Navbar