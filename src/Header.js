import React, { useEffect, useState } from 'react';
import './header.css'
import Nav from './Nav';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isSticky ? 'sticky fade-in' : ''}`}>
        <div className='header-wrapper'>
                <div className='title text'>
                    Tacos Traviesas
                </div>
            </div>
    </div>
  );
};

export default Header;
