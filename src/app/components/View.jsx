'use client'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const View = ({ children, animateOnScroll = true, delay = 0 }) => {
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const splitTref = useRef([]);
  const linesRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reset all refs
    splitTref.current = [];
    elementRef.current = [];
    linesRef.current = [];

    let elements = [];
    if (containerRef.current.hasAttribute("data-copy")) {
      elements = Array.from(containerRef.current.children);
    } else {
      elements = [containerRef.current];
    }

    elements.forEach((element) => {
      elementRef.current.push(element);

      const split = new SplitText(element, {
        type: "lines",
        mask:"lines",
        linesClass: "line++",
      });
      splitTref.current.push(split);

      const computedStyles = window.getComputedStyle(element);
      const textIndent = computedStyles.textIndent;
      if (textIndent && textIndent === "0px") {
        if (split.lines.length > 0) {
          split.lines[0].style.paddingLeft = textIndent;
        }
        element.style.textIndent = "0";
      }

      linesRef.current.push(...split.lines);
    });

    // Set initial y
    gsap.set(linesRef.current, { y: '100%' });

    const animationProps = {
      y: '0%',
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: delay,
    };

    if (animateOnScroll) {
      gsap.to(linesRef.current, {
        ...animationProps,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          once: true,
        },
      });
    } else {
      gsap.to(linesRef.current, animationProps);
    }

    return () => {
      splitTref.current.forEach((split) => {
        if (split && split.revert) split.revert();
      });
    };
  }, [animateOnScroll, delay]);

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-copy="true">
      {children}
    </div>
  );
};

export default View;