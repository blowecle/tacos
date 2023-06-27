import React, { useEffect, useState, useRef } from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = ({show}) => {
  const [isSticky, setIsSticky] = useState(false);

  const [visible, setVisible] = useState(false);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    if(show) setIsSticky(true);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div className={`header ${isSticky ? 'fade-in' : 'desktop'}`}>
        <div className='header-wrapper'>
          <div className={`title text ${show || isSticky ? 'fade-in show-it' : 'dont-show'}`}>Tacos Traviesas</div>
          <Link to='/menu'>
            <div className="desktop-link">Menu</div>
          </Link>
          <div className="desktop-link">Catering</div>
          <div className="desktop-link">Info</div>
      </div>
    </div>
  );
};

export default Header;
