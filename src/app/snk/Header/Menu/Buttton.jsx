'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Button({ isActive, toggleMenu }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        top: isActive ? '-100%' : '0%',
        duration: 0.5,
        ease: 'power4.inOut',
      });
    }
  }, [isActive]);

  return (
    <div className="absolute top-0 right-6 w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden z-100">
      <div
        ref={sliderRef}
        className="relative w-full h-full"
        style={{ position: 'relative', top: '0%' }}
      >
        <div className="el w-full h-full bg-red-400" onClick={toggleMenu}>
          <PerspectiveText label="Menu" />
        </div>
        <div className="el w-full h-full bg-black text-red-400" onClick={toggleMenu}>
          <PerspectiveText label="Close" />
        </div>
      </div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className="perspectiveText font-Inter">
      <p className="primary">{label}</p>
      <p className="secondary">{label}</p>
    </div>
  );
}
