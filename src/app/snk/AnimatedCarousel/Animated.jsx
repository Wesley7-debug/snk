'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const Animated = () => {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


//     gsap.fromTo ('.video-player',{
// clipPath:'polygon(40% 20%, 60% 20%, 60% 80%, 40% 80%)',
// scale:1.5,
//     },{
//       clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
// scale:1,
// ease:'power3.inOut',
// duration:1,
// scrollTrigger:{
//   trigger:'.elem',
//   start:'top top',
//   end:`${window.innerHeight * 4}`,
//   scrub:2,
//   pin:true,
// }
//     })
gsap.fromTo(
  '.video-player',
  {
    clipPath: 'circle(0.9% at 50% 50%)',
    scale: 1.5,
  },
  {
    clipPath: 'circle(75% at 50% 50%)', // Expand to cover area
    scale: 1,
    ease: 'power3.inOut',
    duration: 10,
    scrollTrigger: {
      trigger: '.elem',
      start: 'top top',
      end: `${window.innerHeight * 4}`,
      scrub: 2,
      pin: true,
    },
  }
);

  }, []);

  return (
    <>
    

      <div
        className="w-screen h-[110vh] overflow-hidden relative bg-black"
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
