'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const Animated = () => {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    '.video-player',
    {
      clipPath: 'circle(0.9% at 50% 50%)',
      scale: 1.5,
    },
    {
      clipPath: 'circle(75% at 50% 50%)',
      scale: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.elem',
        start: 'top top',
        end: '+=400%', // same as window.innerHeight * 4 but relative
        scrub: true, // scrub true is usually better than 2 for smooth syncing
        pin: true,
        anticipatePin: 1,
      },
    }
  );

  // Optional: cleanup on unmount
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


  return (
    <>
    

      <div
        className="w-screen  overflow-hidden relative bg-black"
        ref={sectionRef}
      >


     <div className="elem w-screen h-screen gg-[#1c1c1c] relative p-4">
<div className='w-full h-full object-cover p-10 inset-0 absolute video-player'>

<video className='w-full h-full object-cover  object-center origin-center' src='/Video/SNK.mp4' autoPlay loop muted/>
</div>
          </div>
                </div>
    </>
  );
};

export default Animated;
