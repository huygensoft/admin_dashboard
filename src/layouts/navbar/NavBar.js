import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='nav-bar'>
        <div><Link to='/dashboard'>DASHBOARD</Link></div>
        <div><Link to='/signup'>LOGIN</Link></div>
    </div>
  )
}
