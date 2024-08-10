import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between'>
        <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"/>
        <div>
            <p>HOME</p>
            <div><FaShoppingCart /></div>
        </div>

    </div>
  )
}

export default Navbar