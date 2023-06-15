import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import './Nav.css'
import Footer from './Footer';
import './Footer.css'
import Header from './Header';
import tortillas from './images/taco_hand_1_efvqt1.jpg'
import { Link } from 'react-router-dom';

function App() {

  const [visible, setVisible] = useState(false);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    const onLoad = () => {
    window.scrollTo(0, 0)
    }

    setTimeout(onLoad, 1000)
  }, [])

  const handleClick = (ref) => {
    if (ref.current) {
      const headerHeight = 0.10 * window.innerHeight;
      const elementTopOffset = ref.current.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
      if(visible) setVisible(false);

      window.scrollTo({
        top: scrollPosition + elementTopOffset - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='wrapper'>
      <div className='inner-wrapper'>
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
                    <div onClick={() => handleClick(ref2)}>About Us</div>
                    <div onClick={() => handleClick(ref1)}>Menu</div>
                    <div onClick={() => handleClick(ref3)}>Catering</div>
                    <div onClick={() => handleClick(ref4)}>Info</div>
                  </div>
              </div>
          </div>
        <Header/>
        <div className='logo-wrapper'>
          <img className='logo' src={tortillas} alt='tortillas'/>
        </div>
        <div className='content about'>
          <div className='content-wrapper'>
            <div ref={ref2} className='content-header'>ABOUT US</div>
            <div className='content-body-about'>Zöe Salcedo is a culinary expert with a wealth of experience in the food industry. With years of dedicated work in various high-end establishments, Zoe has honed her skills and developed a deep understanding of authentic Mexican cuisine. Her passion for creating flavorful dishes using traditional recipes and fresh ingredients has made her a renowned figure in the culinary world, and her rich industry experience shines through in every bite of her delicious creations.</div>
          </div>
        </div>
        <div className='content menu'>
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
        <div className='menu-wrapper'>
          <div ref={ref1} className='content-header-menu'>MENU</div>
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
        <div className='content catering'>
          <div className='cater-wrapper'>
            <div ref={ref3} className='content-header'>CATERING</div>
            <div className='content-body'>This is where the information about catering goes.  We have lots of catering.  Even our catering has catering.  Tortillas?  You know it.  Best fucking tortillas in all of Ireland, dawg.</div>
          </div>
        </div>
        <div className='content zoe-content'>
        <div className='zoe-wrapper'>
          <img className='zoe' src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684960996/tacos/70263335613__B49FC130-29C9-45F8-BE55-3D82F2B9DCC7_e3xsaq.jpg' alt='zoe'/>
        </div>
          <div ref={ref4} className='content-header-taco'>HOW TO GET YOUR TACOS</div>
            <div className='content-body-taco'>Check out our Twitter and Instagram for hours and locations!</div>
            <div className='social-wrapper'>
              <a href='https://www.instagram.com/tacostraviesas/'>
                <img className='social' src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1686836033/tacos/Instagram_icon_hl60eh.png' alt='insta'/>
              </a>
              <a href='https://twitter.com/tacostraviesas1'>
                <img className='social' src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1686836033/tacos/Twitter_icon_n10mmy.png' alt='twitter'/>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;