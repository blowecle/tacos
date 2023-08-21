import React, { useEffect, useState, useRef } from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = ({show}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition > 1800) {
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

  return (
    <div className={`header ${isSticky ? 'fade-in' : 'desktop'}`}>
        <div className='header-wrapper'>
          <div className={`title text ${show || isSticky ? 'fade-in show-it' : 'dont-show'}`}>Tacos<br/>Traviesas</div>
      </div>
    </div>
  );
};

export default Header;
