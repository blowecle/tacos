import React from "react";
import './construction.css'

const Construction = () => {
    return (
        <div className='construction-wrapper'>
            <div className='title text'>
                Home of Tacos Traviesas, coming soon!
            </div>
            <div className='image-wrapper'>
                <img className='construction-image' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1670023547/tacos/guinesstaco_tzufpw.jpg' alt='' />
            </div>
            <p className='p-tag text'>In the meantime, checkout our instagram!</p>
            <img className="arrow" src='https://media3.giphy.com/media/5QQ6FpAQ0syYLkONPB/giphy.gif'/>
            <a href="https://www.instagram.com/tacostraviesas/" className="fa fa-instagram"></a>
        </div>
    )
}

export default Construction;