'use client';
import gsap from 'gsap';

import { Flip } from 'gsap/Flip';
import { SplitText } from 'gsap/SplitText';
import { useEffect } from 'react';

const Hero = () => {
  gsap.registerPlugin( SplitText, Flip);

  // CustomEase.create('hop', 'M0,0c0.355,0.22 0.448,0.079 0.5, 0.5 0.542, 0.846 0.615,1 .1,1');
  // CustomEase.create('hop2', 'M0,0 c0.078,0.617 0.716,0.255 0.8282, 0.373 0.922, 0.846 0.561,1 1,1');

  useEffect(() => {
 const linesElements = Array.from(document.querySelectorAll('.lines'));
const allSplitLines = [];

 linesElements.forEach((el) => {
  const split = new SplitText(el, {
    type: 'lines,chars',
    mask: 'lines',
    linesClass: 'line++',
  });
  
   // Set initial yPercent for each line
//   gsap.set(split.lines, { y: '200% '});

  // Collect lines in a master array
   allSplitLines.push(...split.lines);
 });
// const lines = document.querySelectorAll('.lines')
//   const splitTextHero = new SplitText(lines, { type: 'lines, chars',mask:'lines', linesClass: "line++", });
//   gsap.set(splitTextHero.lines, { yPercent: 100 }); 

    const scrolTl = gsap.timeline();
    const mainTl = gsap.timeline();
    const reavelerTl = gsap.timeline();

    // Show reavelers by setting opacity
  //gsap.set('.reavelers', { opacity: 1 });

const ctx = gsap.context(() => {
  window.scrollTo(0,0);
reavelerTl
  .to('.rf1', {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', // animates upward (top to top)
    duration: 1.5,
    ease:'power4.inOut',
  })
  .to('.rf2', {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', // animates downward (bottom to bottom)
    duration: 1.5,
    ease:'power4.inOut',
  }, '<'); // play at the same time


    scrolTl.to('.image1', { scale: 1, duration: 2, ease: 'power4.inOut' });

    document.querySelectorAll('.img:not(:first-child)').forEach((img) => {
      scrolTl.to(img, {
        opacity: 1,
        scale: 1,
        duration: 1.25,
        ease: 'power4.inOut',
      }, '>-0.5');
    });

    mainTl.add(reavelerTl).add(scrolTl, '-=1.25').add(() => {
      // Remove non-main images
      document.querySelectorAll('.img:not(.main)').forEach((img) => img.remove());

      // Flip state of main images
      const state = Flip.getState('.main');

      // Create stacked container
      const hero = document.querySelector('.hero');
      const stackedContainer = document.createElement('div');
      stackedContainer.classList.add('stacked-container');
      hero.appendChild(stackedContainer);

      // Wrap each main image inside a .stacked div
      document.querySelectorAll('.main').forEach((img, index) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('stacked');
        
        wrapper.appendChild(img);
        img.style.order =index;
        stackedContainer.appendChild(wrapper);
        img.style.order =index;
      });

      // Clear transform props
      gsap.set('.img.stacked', {
        clearProps: 'transform, top, left',
      });

      return Flip.from(state, {
        duration: 2,
        ease: 'hop2',
        absolute: true,
        stagger: {
          amount: -0.3,
        },
      });
    })
  gsap.from(allSplitLines, {
  y: 0,
   duration: 1,
  delay:3,
 stagger: 0.1,
  ease:'power4.inOut',
 });
})

  return () => ctx.revert(); 

  }, []);

  return (
    <section className="containesr w-screen h-screen relative overflow-hidden text-black">
      {/* Revealer */}
      <div className=" reavelers fixed top-0 left-0 w-screen h-screen flexs flex-col z-10 opacity-1 pointer-events-none">
        <div className="reavealer rf1 flex-1 w-full bg-white"></div>
        <div className="reavealer rf2 flex-1 w-full bg-white"></div>
      </div>

      {/* Images Layer */}
      <div className=" images absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full will-change-transform z-2">
        <div className="img image1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.5] w-full h-full visible will-change-transform">
          <img src="/images/load1.jpg" alt="" />
        </div>
        <div className="img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.5] w-full h-full visible opacity-0 will-change-transform">
          <img src="/images/load2.jpg" alt="" />
        </div>
        <div className="img main absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.5] w-full h-full visible opacity-0 will-change-transform">
          <img src="/images/load3.jpg" alt="" />
        </div>
        <div className="img main absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.5] w-full h-full visible opacity-0 will-change-transform">
          <img src="/images/load4.jpg" alt="" />
        </div>
        <div className="img main absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.5] w-full h-full visible opacity-0 will-change-transform">
          <img src="/images/load5.jpg" alt="" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="hero relative w-screen bg-bg h-screen px-2">


        <div className="cover-img absolute bottom-0 lg:right-[1em] w-full lg:w-[50%] lg:px-0 h-[40%] lg:h-auto">
          <img className="saturate-0" src="/images/snk.png" alt="" />
        </div>

        <div className="col w-full flex lg:gap-[15rem] items-start absolute top-[20%] lg:top-[35%] h-full lg:h-1/2 left-0 p-2 font-Lora text-xl lg:text-2xl">
          <div className="col">
            <div className="lines text-sm opacity-0 lg:opacity-100 lg:ml-10">2025</div>
          </div>
          <h2 className="lg:w-[29%] lines -mt-">
            SNK — a creative printing, branding, and signage studio based in Windhoek, Namibia.
          </h2>
        </div>

        <div className="site-info gap-1 md:justify-around flex font-Lora absolute top-[50%] lg:top-[85%] font-light opacity-[0.7] lg:opacity-100 text-[0.7rem] lg:text-sm w-full">
          <div className="row"><div className="col"><div className="line lg:opacity-0">2025</div></div></div>
          <div className="row flex lg:justify-around lg:absolute lg:text-[0.8rem] lg:bottom-[60%] lg:left-[25%]">
            <div className="col">
              <div className="address px-2">
                <div className="lines"><h1>SNK Printing</h1></div>
                <div className="lines"><h1>Windhoek, Namibia</h1></div>
                <div className="lines"><h1>+264 81 207 7714</h1></div>
                <div className="lines"><h1>+264 85 207 7714</h1></div>
              </div>
            </div>
            <div className="socials">
              <div className="lines"><h1 className="mb-2">snkprinting@gmail.com</h1></div>
              <div className="lines"><h1>INSTAGRAM</h1></div>
              <div className="lines"><h1>TWITTER</h1></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
