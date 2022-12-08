import React from "react";
import './App.css'
import Footer from "./Footer";

const Menu = () => {
    return (
        <div className='menu-wrapper'>
            <div className='menu-contents'>
            <div className='title'>BREAKFAST</div>
                <div className='menu-item'>PAPAS CON RAJAS 
                    <div className='menu-item-contents'>Moy Hill Farms Eggs, Potatoes and Peppers</div>
                </div>
                <div className='title'>TACOS</div>
                <div className='menu-item'>COCHINITA PIBIL 
                    <div className='menu-item-contents'>Achiote Braised Pork Belly, Pickled Onion, Radish</div>
                </div>
                <div className='menu-item'>BARBACOA 
                    <div className='menu-item-contents'>Braised Beef Brisket in Adobo, Onion, Radish</div>
                </div>
                <div className='menu-item'>CAMOTE 
                    <div className='menu-item-contents'>Sweet Potato, Black Bean, Radish, Cabbage, Cilantro, Salsa Macha</div>
                </div>
                <div className='title'>TOSTADAS</div>
                <div className='menu-item'>CHICKEN or BEAN
                    <div className='menu-item-contents'>Blackbean, Radish, Crema, Cabbage, Cotija, Cilantro</div>
                </div>
                <div className='title'>SOUP</div>
                <div className='menu-item'>POZOLE - PORKBELLY IN PEPPPER BROTH
                    <div className='menu-item-contents'>Hominy, Cabbage, Raddish, Onion</div>
                </div>
                <div className='title'>SIDES</div>
                <div className='menu-item'>REFRIED BEANS
                </div>
                <div className='menu-item'>AROSE - RED RICE
                </div>
            </div>
        </div>
    )
}

export default Menu;