
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const steps = [
    { title: 'Choosing the Spot', desc: 'Finding the right angle where the light and the car (or building) look best.' },
    { title: 'Waiting for Light', desc: 'Patience is key. I wait for the sun to hit just right before I even pull the camera out.' },
    { title: 'The Shoot', desc: 'Taking my time to get a few good frames rather than a hundred bad ones.' },
    { title: 'Final Review', desc: 'I look through everything and pick the ones that really stand out.' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.method-step', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.method-grid',
          start: 'top 85%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-20 md:py-48 px-6 md:px-12 bg-[#0B1222] text-[#E7E5E4]">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-brand font-extrabold tracking-tighter uppercase leading-[0.9] text-[#E7E5E4] mb-8">
            How I <span className="italic opacity-30">work</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-[#E7E5E4]/60 leading-relaxed max-w-2xl">
            A simple way of doing things. I'm focusing on the basics and getting them right every time.
          </p>
        </div>

        <div className="method-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-20">
          {steps.map((step, idx) => (
            <div key={idx} className="method-step border-t border-white/5 pt-8">
              <span className="mono text-[10px] font-bold text-[#E7E5E4]/20 uppercase tracking-widest block mb-4">0{idx + 1}</span>
              <h3 className="text-xl md:text-2xl font-brand font-bold uppercase tracking-tighter text-[#E7E5E4] mb-4 leading-tight">{step.title}</h3>
              <p className="text-[#E7E5E4]/40 text-sm md:text-base leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
