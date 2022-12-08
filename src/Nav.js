import React from "react";
import './Nav.css'

const Nav = () => {
    return (<nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Tacos Traviesas</label>
        <ul>
          <li className='list-item'><a href="/">Home</a></li>
            <li className='list-item'><a href="/menu">MENU</a></li>
          <li className='list-item'><a href="/services">Services</a></li>
          <li className='list-item'><a href="">Contact</a></li>
          <li className='list-item'><a href='https://twitter.com/tacostraviesas1'>Twitter</a></li>
        </ul>
      </nav>)
}

export default Nav;