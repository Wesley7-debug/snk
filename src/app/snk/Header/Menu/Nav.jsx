import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { footerLinks, links } from './NavData';

export default function Nav() {
  const containerRef = useRef(null);
  const linkRefs = useRef([]);
  const wrapperRefs = useRef([]);

  useEffect(() => {
    if (linkRefs.current.length) {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.set(linkRefs.current, {
        opacity: 0,
        rotateX: 90,
        y: 80,
        x: -20,
        transformOrigin: 'bottom center',
        perspective: 120,
      });

      linkRefs.current.forEach((el, i) => {
        tl.to(el, {
          opacity: 1,
          rotateX: 0,
          y: 0,
          x: 0,
          duration: 0.65,
          delay: 0.5 + i * 0.1,
        }, 0);
      });
    }

    if (wrapperRefs.current.length) {
      wrapperRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.75 + i * 0.1,
            ease: 'power1.out',
          }
        );
      });
    }
  }, []);

  return (
    <nav
      ref={containerRef}
      className="flex flex-col justify-between pt-[100px] pr-[40px] pb-[50px] pl-[40px] h-full box-border font-Lora"
    >
      <div className="flex flex-col gap-2.5">
        {links.map(({ title, href }, i) => (
          <div
            key={i}
            className="relative"
            style={{ perspective: '120px', perspectiveOrigin: 'bottom' }}
            ref={el => (linkRefs.current[i] = el)}
          >
            <a
              href={href}
              className="no-underline text-black text-[46px] block font-Lora"
              tabIndex={0}
            >
              {title}
            </a>
          </div>
        ))}
      </div>

      <div className="footer flex flex-wrap">
        {footerLinks.map(({ title, href }, i) => (
          <div
            key={`wrapper_${i}`}
            ref={el => (wrapperRefs.current[i] = el)}
            className="w-1/2 mt-[5px]"
          >
            <a href={href} tabIndex={0} className="block">
              {title}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
