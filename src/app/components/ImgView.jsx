'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ImgView = ({ children, animateOnScroll = true, delay = 0, duration = 1.2 }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current || !wrapperRef.current) return;

    // Start with triangle at top (reveals from top to bottom)
    gsap.set(contentRef.current, {
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0% 0)',
    });

    const animationProps = {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      ease: 'power4.inOut',
      duration,
      delay,
    };

    if (animateOnScroll) {
      gsap.to(contentRef.current, {
        ...animationProps,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 70%',
          once: true,
        },
      });
    } else {
      gsap.to(contentRef.current, animationProps);
    }
  }, [animateOnScroll, delay, duration]);

  return (
    <div ref={wrapperRef} className="overflow-hidden">
      <div ref={contentRef} className="w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default ImgView;
