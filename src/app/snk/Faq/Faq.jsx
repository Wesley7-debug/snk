'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import faqData from './data';

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      // Close current
      gsap.to(contentRefs.current[index], {
        height: 0,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => setActiveIndex(null),
      });
    } else {
      if (activeIndex !== null) {
        // Close previous
        gsap.to(contentRefs.current[activeIndex], {
          height: 0,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
      // Open new
      setActiveIndex(index);
      gsap.fromTo(
        contentRefs.current[index],
        { height: 0 },
        {
          height: 'auto',
          duration: 0.4,
          ease: 'power2.out',
        }
      );
    }
  };

  return (
    <div className="w-[90%] mx-auto mt-2 p-4 font-Lora">
      {faqData.map((item, i) => {
        const isActive = i === activeIndex;
        return (
          <div key={i} className="border-b border-gray-300 text-[#1c1c1c]">
            <button
              onClick={() => toggleAccordion(i)}
              className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
              aria-expanded={isActive}
              aria-controls={`faq-content-${i}`}
              id={`faq-header-${i}`}
            >
              <span className="text-lg font-semibold">{item.question}</span>

              {/* Plus icon made with spans */}
              <span
                className={`relative w-3 h-3 flex-shrink-0 transition-transform duration-300 ${
                  isActive ? 'rotate-45' : 'rotate-0'
                }`}
                aria-hidden="true"
              >
                {/* vertical bar */}
                <span className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform -translate-x-1/2"></span>
                {/* horizontal bar */}
                <span className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 transform -translate-y-1/2"></span>
              </span>
            </button>

            <div
              ref={(el) => (contentRefs.current[i] = el)}
              id={`faq-content-${i}`}
              role="region"
              aria-labelledby={`faq-header-${i}`}
              className="overflow-hidden"
              style={{ height: 0 }}
            >
              <p className="pb-4 ">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
