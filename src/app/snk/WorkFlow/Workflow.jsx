'use client';
import React, { useEffect, useRef } from 'react';
import WorkflowSteps from './WorkData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import View from '@/app/components/View';

gsap.registerPlugin(ScrollTrigger);

const Workflow = () => {
  const stepsRef = useRef([]);
  const titlesRef = useRef([]);

  useEffect(() => {
    // Scroll animation for cards
    stepsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        );
      }
    });

    // Typewriter effect using GSAP (manual)
titlesRef.current.forEach((title, i) => {
  const chars = title.textContent.split(''); // use textContent here
  title.textContent = ''; // clear textContent
  gsap.to({}, {
    duration: 0.5,
    onComplete: () => {
      chars.forEach((char, idx) => {
        gsap.to({}, {
          duration: 0.02,
          delay: idx * 0.05,
          onComplete: () => {
            title.textContent += char;  // and here
          }
        });
      });
    },
    scrollTrigger: {
      trigger: stepsRef.current[i],
      start: 'top 80%',
    }
  });
});

  }, []);

  return (
    <section className='w-screen h-full relative overflow-hidden text-[#1c1c1c] bg-bg'>
      <div className='relative top-[1em] left-6 bg-blue-300 w-fit p-2 mb-20 lg:mb-0'>
        <h1 className='font-poppins text-xl lg:text-3xl'>OUR PRINCIPLE</h1>
      </div>
      <div className='flex flex-col  justify-center items-center'>
        {WorkflowSteps.map((step, index) => (
   <div
  key={step.step}
  ref={(el) => (stepsRef.current[index] = el)}
  className={`mb-10 workflow-step relative bg-[#2f332710] rounded-lg w-[70%] md:w-[60%] lg:w-[25%] h-fit lg:h-120 overflow-hidden group curve-img
    ${index % 2 === 0 ? ' lg:ml-[40vw]' : ' lg:mr-[40vw]'}`}
>

         <div className="relative mt-3 top-[13%] lg:top-[10%] w-full px-7 py-2 h-full lg:h-[90%] flex flex-col justify-between">
  <div>
    <h3 className="font-Inter text-lg lg:mt-0.5 mb-5 lg:text-xl bg-blue-300 w-fit p-2">
      {`0 ${step.step}`}
    </h3>
    <h1
      ref={(el) => (titlesRef.current[index] = el)}
      className="font-poppins text-xl lg:text-5xl uppercase "
    >
      {step.title}
    </h1>
 
  </div>
   
        <p className="font-Lora text-md lg:text-xl mt-7 w-full">
    {step.description}
  </p>


</div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
