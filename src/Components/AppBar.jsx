import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

function AppBar() {
  const [menu,setMenu]=useState(false);
  return (
    <div><nav className='nave-border'>

        <h3 >
          <span> <img width="30" height="30" src="https://img.icons8.com/pin/50/cake.png" alt="cake" /></span>
          <i> Flourish</i></h3>
          <button onClick={()=>{setMenu(!menu)}} className='menu-btn'>
            {menu?(<img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" alt="delete-sign"/>):(<img width="20" height="20" src="https://img.icons8.com/ios-filled/50/menu--v1.png" alt="menu--v1"/>)}
          </button>
        <ul className={`nav-ul ${menu ? "active" : ""} `}>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/aboutus">About Us</Link></li>
          <li><Link to ="/shop">Shop</Link></li>
          <li><Link to ="/form">Contact Us</Link></li>
          <li><Link to ="/cart" className='carticon '> <FaCartShopping  className='h-150 '/></Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default AppBar