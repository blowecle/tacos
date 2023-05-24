import React from "react";
import './construction.css'

const Construction = () => {
    return (
        <div className='construction-wrapper'>
            <div className='header-wrapper'>
                <div className='title text'>
                    Tacos Traviesas
                </div>
            </div>
            <div className='blurb-wrapper'>
                <div className='blurb'>Tacos Traviesas, An Authentic Mexican Taco Truck Offering Fresh-Made Corn Tortillas Daily</div>
            </div>
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
            <img className='truck-image' src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684960996/tacos/70263335613__B49FC130-29C9-45F8-BE55-3D82F2B9DCC7_e3xsaq.jpg' alt='truck' />
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