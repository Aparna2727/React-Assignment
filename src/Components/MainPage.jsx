import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export function MainPage(){
    return(
        <div className='Navbar_list'>
         <div className='Logo'>Movies</div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>

        </div>

    )
}