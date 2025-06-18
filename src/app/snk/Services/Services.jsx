'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useEffect, useRef } from "react";
import ServiceCopy from "./ServiceCopy";

const Services = () => {
  const ProgressRef = useRef(null);
  const stickySection = useRef(null);
  const indicatorRef = useRef(null);
  const servieImg = useRef(null);
  const currentCount = useRef(null);
  const serviceCopy = useRef(null);

  const currentIndex = useRef(0);
  const serviceHeight = 38;
  const imgHeight = 250;

  gsap.registerPlugin(ScrollTrigger, SplitText);

  useEffect(() => {
    const services = document.querySelectorAll('.services');
    if (!services.length || !serviceCopy.current) return;

    let currentSplitText = new SplitText(serviceCopy.current, {
      type: 'lines',
      linesClass: 'lineChildren'
    });

    const maskedContainer = document.createElement('div');
    maskedContainer.style.cssText = `
      position:absolute;
      visibility:hidden;
      height:auto;
      width:auto;
      white-space: nowrap;
      font-size: 60px;
      text-transform: uppercase
    `;
    document.body.appendChild(maskedContainer);

    const serviceWidths = Array.from(services).map(service => {
      maskedContainer.textContent = service.textContent;
      return maskedContainer.clientWidth;
    });
    document.body.removeChild(maskedContainer);

    gsap.set(indicatorRef.current, {
      width: serviceWidths[0],
      xPercent: -50,
      left: '50%'
    });

    const scrollPerService = window.innerHeight;

    const animateText = (index) => {
      return new Promise((resolve) => {
        gsap.to(currentSplitText.lines, {
          opacity: 0,
          y: '-100%',
          duration: 0.5,
          stagger: 0.03,
          ease: 'power3.inOut',
          onComplete: () => {
            currentSplitText.revert();
            serviceCopy.current.textContent = ServiceCopy[index][0];
            currentSplitText = new SplitText(serviceCopy.current, {
              type: 'lines',
              linesClass: 'lineChildren'
            });

            gsap.set(currentSplitText.lines, { opacity: 0, y: '100%' });

            gsap.to(currentSplitText.lines, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.inOut',
              stagger: 0.03,
              onComplete: resolve
            });
          }
        });
      });
    };

    ScrollTrigger.create({
      trigger: stickySection.current,
      start: 'top top',
      end: `${scrollPerService * services.length +1}`,
      pin: true,
      scrub: 2,
      onUpdate: async (self) => {
        const progress = self.progress;
        gsap.set(ProgressRef.current, { scaleY: progress });

        const scrollPosition = Math.max(0, self.scroll() - window.innerHeight);
        const activeIndex = Math.floor(scrollPosition / scrollPerService);

        if (activeIndex >= 0 && activeIndex < services.length && currentIndex.current !== activeIndex) {
          currentIndex.current = activeIndex;

          services.forEach(service => service.classList.remove('active'));
          services[activeIndex].classList.add('active');

          await Promise.all([
            gsap.to(indicatorRef.current, {
              y: activeIndex * serviceHeight,
              width: serviceWidths[activeIndex],
              duration: 0.5,
              ease: 'power3.inOut'
            }),
            gsap.to(servieImg.current, {
              y: -(activeIndex * imgHeight),
              duration: 0.5,
              ease: 'power3.inOut'
            }),
            gsap.to(currentCount.current, {
              innerText: activeIndex + 1,
              snap: { innerText: 1 },
              duration: 0.3,
              ease: 'power3.inOut'
            }),
            animateText(activeIndex)
          ]);
        }
      }
    });

    // Make sure layout is updated correctly
    ScrollTrigger.refresh();
  }, []);

  return (
    <section
      ref={stickySection}
      className="relative w-screen h-screen flex flex-col lg:flex-row overflow-hidden bg-bg"
    >
      {/* LEFT COLUMN: Service Titles */}
      <div className="flex-1 flex-col flex justify-start lg:justify-center items-center pt-[25%] lg:pt-0">
        <div className="service relative flex flex-col items-center font-poppins font-bold text-[#d5d5d5] text-xl lg:text-2xl uppercase">
          <div
            ref={indicatorRef}
            className="indicator absolute top-0 left-0  h-[30px] bg-black -z-1 w-max"
          />
          {[
            "Custom Printing",
            "Branding Solutions",
            "Signage & Displays",
            "Promotional Items",
            "Corporate Gifts",
            "Branded Apparel",
            "Event Prints"
          ].map((item, i) => (
            <div
              key={i}
              className={`services w-max h-[38px] ${i === 0 ? "active text-white" : ""}`}
            >
              <h1>{item}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Image + Copy */}
      <div className="flex-1 flex  items-center justify-center lg:flex-col gap-4 lg:gap-0">
        <div className="img-wrapper relative w-[25%] lg:w-[60%] h-[256px] overflow-hidden">
          <div
            ref={servieImg}
            className="service-img w-full h-[2000px] translate-y-0 will-change-transform"
          >
            {[
              "/images/slide/slide-1.jpg",
              "/images/slide/slide-2.jpg",
              "/images/slide/slide-5.jpg",
              "/images/slide/slide-3.jpg",
              "/images/slide/slide-5.jpg",
              "/images/slide/slide-4.jpg",
              "/images/slide/slide-5.jpg"
            ].map((src, i) => (
              <div key={i} className="img w-full h-[250px]">
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="service-copy text-sm lg:text-xl font-Lora w-[60%] lg:mt-3">
          <p ref={serviceCopy} className="relative will-change-transform linex">
            {ServiceCopy[0][0]}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
        <div className="progress-bar absolute top-[5%] lg:top-1/2 left-1/2 -translate-1/2 w-[2.5px] bg-bg h-1/2  -rotate-90 lg:-rotate-0 lg:h-[60%]">
      <div ref={ProgressRef} className="progress absolute top-0 left-0 w-full h-full  origin-top scale-y-0 bg-black will-change-transform"></div>
    </div>

      {/* Index Counter */}
      <div className="imdex absolute tex-md md:top-auto top-[6%] md:bottom-[8%] left-1/2 bg-black text-white -translate-x-1/2 w-[65px] px-1 py-2 flex justify-between items-center">
        <span ref={currentCount}>1</span>
        <span className="seperator relative -top-px w-[20px] h-[2px] bg-red-500" />
        <span className="total">7</span>
      </div>
    </section>
  );
};

export default Services;
