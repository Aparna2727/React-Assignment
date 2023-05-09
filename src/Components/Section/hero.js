import React from 'react'
import styles from "./hero.module.css"

export function HeroSection(){
    return (
        <div>
        <div className={styles.container}>
            <div className={styles.content}>
           <h1>Be there</h1>
           <p>Deliver brilliant messages in the moments that truly define your brand.</p>
           <button>See More</button>
           </div>
        </div>
        <img src="https://images.pexels.com/photos/12736878/pexels-photo-12736878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
    )
}