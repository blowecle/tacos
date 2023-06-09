import React, { useRef, useState } from 'react';
import './App.css';
import './Nav.css'
import Footer from './Footer';
import './Footer.css'
import Header from './Header';

function App() {

  const [visible, setVisible] = useState(false);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const handleClick = (ref) => {
    if (ref.current) {
      const headerHeight = 0.15 * window.innerHeight;
      const elementTopOffset = ref.current.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
      window.scrollTo({
        top: scrollPosition + elementTopOffset - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (<>
    <div className='wrapper'>
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
        </div>
      <Header/>
      <div className='logo' onClick={() => handleClick(ref2)}>LOGO</div>
      <div className='content one'>
        <div ref={ref1} className='content-header'>MENU</div>
        <div className='content-body'>Etiam nec ipsum libero. Maecenas eu mi iaculis, blandit magna nec, pretium augue. Donec ut laoreet mauris. Praesent varius nibh mauris, at auctor neque sodales eget. Vestibulum lacus ipsum, posuere a maximus at, luctus et odio. Nunc eget elit libero. Etiam purus libero, efficitur et sem in, feugiat tempus lectus. Phasellus et pharetra risus.</div>
        </div>
      <img className='tortillas image' src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1686322908/tacos/taco_hand_tpuhpn.jpg' alt='tortillas'/>
      <div className='content two'>
        <div ref={ref2} className='content-header'>ABOUT US</div>
        <div className='content-body'>Morbi dignissim, augue gravida viverra feugiat, orci eros malesuada justo, luctus tincidunt magna lacus sit amet massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque interdum ipsum in nulla iaculis, a euismod diam cursus. Duis a tellus in massa vestibulum pulvinar vitae a arcu. Etiam eget dictum felis. Duis ornare pulvinar elementum. Phasellus aliquet turpis nisl, id auctor augue porttitor in. Morbi pharetra volutpat tempus. Ut facilisis cursus nulla at pulvinar. Maecenas dignissim auctor tortor in viverra. Vivamus porta velit quis purus rhoncus, vel congue lorem pellentesque.</div>
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
    </div>
    </>
  );
}

export default App;