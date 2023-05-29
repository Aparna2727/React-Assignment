import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

export function Navbar(){
    return(
        <div className='Navbar-container'>
            <div className='Logo-container'>Dashboard|</div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/admin">Admin</Link>
                </li>
                <li>
                <Link to="/student">Student</Link>
                </li>
                <li>
                <Link to="/exam">Exam</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    )
}