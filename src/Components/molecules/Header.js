import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { BiMenu } from "react-icons/bi";
import {Link} from 'react-router-dom'

export function Header() {
  const [menu, setMenu] = useState(false);

  useEffect(()=>{
   function handleResize(){
      if(window.innerWidth <= 608){
               setMenu(true)
      }
      else{
        setMenu(false)
      }
   }
   handleResize()
   window.addEventListener('resize', handleResize);
  },[])

  console.log(menu);
  return (
    <>
      <nav className={styles.Navbar_list}>
        <div className={styles.logo}>Logo</div>
        {!menu && (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <button > <Link  to="/login">Login</Link></button>
          </ul>
        )}
        {/* Menu button */}
        <div className={styles.Hum} onClick={() => setMenu(!menu)}>
          <BiMenu />
        </div>
      </nav>
    </>
  );
}
