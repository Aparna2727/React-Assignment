import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

export function Home(){
    return(
        <>
        <h1>This is Home page</h1>
        <div className="container">
            <h1 className='heading'>Be there</h1>
            <p>Deliver brilliant messages in the moments that truly define your brand.</p>
            <button className='See-more-btn'> <Link  to="/about">See more</Link></button>

            <img src="https://images.pexels.com/photos/12736878/pexels-photo-12736878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>


       
        </>
    )
}