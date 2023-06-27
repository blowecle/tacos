import React, { useEffect } from "react";
import Header from "./Header";

const Menu = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
            <Header show={true}/>
            <div className='menu content'>
            <div className='menu-wrapper'>
            <div className='content-header-menu'>MENU</div>
            <div className='menu-item'>Cochinita Pibil</div>
            <div className='item-description'>achiote braised pork belly, pickled onion, radish</div>
            <div className='menu-item'>Barbacoa</div>
            <div className='item-description'>braised beef brisket in adobo, onion, cilantro, radish</div>
            <div className='menu-item'>Roasted Cauliflower</div>
            <div className='item-description'>with smokey chipotle, radish</div>
            <div className='menu-item'>Chicken or Bean Tostada</div>
            <div className='item-description'>black bean, cabbage, radish, onion, cilantro, crema, cotija</div>
            <div className='content-header sides'>Sides</div>
            <div className='menu-item'>{`Arroz (tasty rice!)`}</div>
            <div className='menu-item'>{`Refried Beans (with cotija)`}</div>
            <div className='lime'>Everything Served with Lime!</div>
            </div>
            </div>
        </>
    )
}

export default Menu;