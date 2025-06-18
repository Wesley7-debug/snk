'use client';

import { useState, useEffect, useRef } from 'react';
import Buttton from './Buttton';
import gsap from 'gsap';
import Nav from './Nav';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  // Detect window width for mobile responsiveness
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);

    checkMobile(); // initial check

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

const isInitialRender = useRef(true);

useEffect(() => {
  if (!menuRef.current) return;

  if (isInitialRender.current) {
    // On first render, set the styles immediately without animation
    gsap.set(menuRef.current, {
      width: isMobile ? (isActive ? '100vw' : '50px') : '480px',
      height: isMobile ? (isActive ? '60vh' : '50px') : '550px',
      top: isActive ? (isMobile ? '0' : '-5px') : '0px',
      opacity: isActive ? 1 : 0,
      right: isActive ? (isMobile ? '0' : '-5px') : '0px',
      position: 'fixed',
      zIndex: 99,
      overflow: 'hidden',
      backgroundColor: '#ef4444',
    });
    isInitialRender.current = false;  // Mark initial render done
  } else {
    // Animate only after initial render (on toggle)
    gsap.to(menuRef.current, {
      width: isActive ? (isMobile ? '100vw' : '480px') : (isMobile ? '50px' : '50px'),
      height: isActive ? (isMobile ? '60vh' : '550px') : (isMobile ? '50px' : '20px'),
      top: isActive ? (isMobile ? '0' : '-5px') : '0px',
      opacity: isActive ? 1 : 0,
      right: isActive ? (isMobile ? '0' : '-5px') : '0px',
      duration: 0.75,
      delay: isActive ? 0 : 0.35,
      ease: 'power4.inOut',
      position: 'fixed',
      zIndex: 99,
      overflow: 'hidden',
      backgroundColor: '#ef4444',
    });
  }
}, [isActive, isMobile]);


  return (
    <>
      <div
        ref={menuRef}
        className="menu bg-red-400 relative  overflow-hidden will-change-auto"
        style={{
          width: isMobile ? (isActive ? '100vw' : '50px') : '480px',
          height: isMobile ? (isActive ? '100%' : '50px') : '550px',
          borderRadius: isActive && !isMobile ? '25px' : '25px',
          position: 'fixed',
          top: 0,
          right: 0,
          overflow: 'hidden',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        }}
      >
        {isActive && <Nav />}
      </div>
      <Buttton isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
    </>
  );
};

export default Menu;
