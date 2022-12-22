import React from "react";
import './construction.css'

const Construction = () => {
    return (
        <div className='construction-wrapper'>
            <div className='title'>
                Home of Tacos Taviesas, coming soon!
            </div>
            <p className='p-tag'>In the meantime, checkout our instagram!</p>
            <a href="https://www.instagram.com/tacostraviesas/" className="fa fa-instagram"></a>
            <div className='image-wrapper'>
                <img className='construction-image' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1670023547/tacos/guinesstaco_tzufpw.jpg' alt='' />
            </div>
        </div>
    )
}

export default Construction;