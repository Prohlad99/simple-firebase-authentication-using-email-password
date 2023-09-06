import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-center'>
      <nav>
        <ul className='flex gap-4 text-xl font-bold'>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
