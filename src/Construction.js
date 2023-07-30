import React from "react";
import './construction.css'
import Header from "./Header";
import Nav from "./Nav";
import { useState } from "react";

const Construction = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='construction-wrapper'>
            <div className='nav-container-one'>
          <div className='nav-hamburger' onClick={() => setVisible(!visible)}>
              <div className='nav-hamburger-line'></div>
              <div className='nav-hamburger-line'></div>
              <div className='nav-hamburger-line'></div>
          </div>
          <div className={visible ? 'nav' : 'nav invisible'}>
              <div className='nav-title text'>
                  Tacos Traviesas
              </div>
              <div className='nav-links'>
                  <div className='nav-link text'>
                      <a href='/'>Home</a>
                  </div>
                  <div className='nav-link text'>
                      <a href='/menu'>Menu</a>
                  </div>
                  <div className='nav-link text'>
                      <a href='/'>About</a>
                  </div>
                  <div className='nav-link text'>
                      <a href='/'>Contact</a>
                  </div>
              </div>
            </div>
          </div>
            <Header/>
            <div className='top-div'>
                <div className='blurb-wrapper'>
                    <div className='blurb'>Tacos Traviesas, An Authentic Mexican Taco Truck Offering Fresh-Made Corn Tortillas Daily</div>
                </div>
                <div className='desktop-image-wrapper'>
                    <img className='desktop-tacos desktop-image' src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684951070/tacos/IMG_0267_mapprj.jpg' alt='desktop-tacos'/>
                    <img className='desktop-salsa desktop-image' src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684962541/tacos/IMG_0608_ipatr4.jpg' alt='desktop-salsa'/>
                </div>
            </div>
            <div className='desktop-wrapper'>
                <div className='slider'>
                    <div className='slides'>
                        <div className='slide'>
                            <img src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684951073/tacos/IMG_0223_sdsk2z.jpg' alt='taco'/>
                        </div>
                        <div className='slide'>
                            <img src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684951073/tacos/IMG_0252_yvi6ju.jpg' alt='taco'/>
                        </div>
                        <div className='slide'>
                            <img src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684951069/tacos/IMG_0244_d6cqrw.jpg' alt='taco'/>
                        </div>
                        <div className='slide'>
                            <img src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684951071/tacos/IMG_0337_jrbpep.jpg' alt='taco'/>
                        </div>
                        <div className='slide'>
                            <img src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684951069/tacos/IMG_0244_d6cqrw.jpg' alt='taco'/>
                        </div>
                    </div>
                </div>
                <img className='tortillas-image' src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684938372/tacos/IMG_0942_r6a1vx.jpg' alt='tortillas'/>
                <div className='tortilla-blurb'>
                Discover taco perfection with our homemade corn tortillas at Tacos Traviesas. Made with fresh, stone-ground corn masa, these authentic gems are soft, flavorful, and pure taco bliss. Elevate your taste buds and experience the true essence of Mexican cuisine with our incredible homemade corn tortillas.
                </div>
            </div>
            <div className='truck-wrapper'>
                <img className='truck-image' src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684960996/tacos/70263335613__B49FC130-29C9-45F8-BE55-3D82F2B9DCC7_e3xsaq.jpg' alt='truck' />
                <img className='menu-image' src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684963622/tacos/IMG_0230_y4fbco.jpg' alt='menu'/>
            </div>
            <div className='truck-blurb'>
            For more about what we've been doing and where we are popping up, check us out on:
            </div>
            <div className='socials'>
                <a href='https://www.instagram.com/tacostraviesas/' target='_blank' rel='noreferrer'>Instagram</a>
                <a href='https://twitter.com/tacostraviesas1' target='_blank' rel='noreferrer'>Twitter</a>
            </div>





        </div>
    )
}

export default Construction;