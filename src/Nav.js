import React from "react";
import './Nav.css'

const Nav = () => {
    return (<nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars">test</i>
        </label>
        <label className="logo">DesignX</label>
        <ul>
          <li><a className="active" href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="feedback">Feedback</a></li>
        </ul>
      </nav>)
}

export default Nav;