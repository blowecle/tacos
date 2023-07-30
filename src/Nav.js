import React from "react";
import { useState } from "react";

const Nav = ({handleClick, ref1, ref2, ref3, ref4}) => {
    const [visible, setVisible] = useState(false);

    return(
        <div className='nav-wrapper'>
          <div className={!visible ? 'nav-hamburger' : 'invisible'} onClick={() => setVisible(!visible)}>
              <div className='nav-hamburger-line'></div>
              <div className='nav-hamburger-line'></div>
              <div className='nav-hamburger-line'></div>
          </div>
            <div className={visible ? "visible sidebar" : 'non-side' }>
                <div className="sidebar-header">
                    <h3>Welcome!</h3>
                    <p id="x" onClick={() => setVisible(false)}>x</p>
                </div>

                <div className="sidebar-contents">
                  <div onClick={() => handleClick(ref1)}>Menu</div>
                  <div onClick={() => handleClick(ref2)}>About Us</div>
                  <div onClick={() => handleClick(ref3)}>Events</div>
                  <div onClick={() => handleClick(ref4)}>Info</div>
                </div>
            </div>
        </div>)
//     return (
//         <div className='nav-container'>
          // <div className='nav-hamburger' onClick={() => setVisible(!visible)}>
          //     <div className='nav-hamburger-line'></div>
          //     <div className='nav-hamburger-line'></div>
          //     <div className='nav-hamburger-line'></div>
          // </div>
//           <div className={visible ? 'nav' : 'invisible'}>
//               <div className='nav-title text'>
//                   Tacos Traviesas
//               </div>
//               <div className='nav-links'>
//                   <div className='nav-link text'>
//                       <a href='/'>Home</a>
//                   </div>
//                   <div className='nav-link text'>
//                       <a href='/menu'>Menu</a>
//                   </div>
//                   <div className='nav-link text'>
//                       <a href='/'>About</a>
//                   </div>
//                   <div className='nav-link text'>
//                       <a href='/'>Contact</a>
//                   </div>
//               </div>
//             </div>
//           </div>
//     )
}

export default Nav;