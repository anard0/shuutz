
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './Header';
import Hero from './Hero';
import HorizontalGallery from './HorizontalGallery';
import PortfolioGrid from './PortfolioGrid';
import ProcessSection from './ProcessSection';
import Footer from './Footer';
import { CONTACT_INFO } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const ShuutzStudio: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Shutter exit animation
    gsap.to('#shutter-iris', {
      y: "-100%",
      duration: 1.5,
      ease: 'expo.inOut',
      delay: 0.3
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative w-full bg-[#0B1222] text-[#E7E5E4] selection:bg-[#E7E5E4] selection:text-[#0B1222]">
      <Header />

      <main className="relative z-10">
        <Hero />

        {/* Studio Introduction */}
        <section className="py-20 md:py-48 px-6 md:px-12 bg-[#0B1222]">
          <div className="max-w-[1920px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 items-start border-t border-white/5 pt-12 md:pt-20">
              <div className="lg:w-1/3">
                <span className="mono text-[10px] md:text-[11px] font-bold text-[#E7E5E4]/20 uppercase tracking-[0.4em]">A bit about me</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-brand font-extrabold tracking-tighter leading-[0.9] uppercase mt-4 md:mt-8">Always<br />Learning</h2>
              </div>
              <div className="lg:w-2/3">
                <p className="text-lg md:text-2xl lg:text-4xl font-light leading-tight tracking-tight text-[#E7E5E4] max-w-4xl mt-6 lg:mt-0">
                  I'm {CONTACT_INFO.OWNER}. I don't follow a strict script—I just shoot what looks interesting. Whether it's the lines of a car, a bridge at sunset, or just the moon on a clear night, I'm out here trying to get it right. I'm based in {CONTACT_INFO.LOCATION} and I'm just enjoying the process of getting better at this.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />

        {/* Feature Horizontal Scroller */}
        <div id="works">
          <HorizontalGallery />
        </div>

        {/* Portfolio Index */}
        <PortfolioGrid />

        {/* CTA Section */}
        <section id="contact" className="py-32 md:py-80 px-6 md:px-12 text-center bg-[#0B1222] text-[#E7E5E4] relative overflow-hidden border-t border-white/5">
          <div className="max-w-6xl mx-auto relative z-10">
            <span className="mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] text-[#E7E5E4]/20 mb-8 md:mb-10 block">Get in touch</span>
            <h2 className="text-[12vw] xs:text-5xl md:text-7xl lg:text-9xl font-brand font-extrabold tracking-tighter mb-10 md:mb-12 leading-[0.85] uppercase italic whitespace-normal md:whitespace-nowrap">
              LET'S START<br />SOMETHING
            </h2>

            <div className="flex flex-col items-center gap-10">
              <a href="mailto:hello@shuutz.studio" className="inline-block group">
                <button className="mono text-[12px] font-bold uppercase tracking-[0.4em] bg-[#E7E5E4] text-[#0B1222] px-12 py-6 hover:bg-white transition-all rounded-full shadow-2xl group-hover:scale-105">
                  Send an Email
                </button>
              </a>
              <div className="flex flex-col gap-3 mt-12 bg-white/10 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm w-full max-w-lg">
                <div className="flex flex-col gap-1 mb-6">
                  <span className="text-[9px] md:text-[10px] mono uppercase tracking-[0.3em] text-[#E7E5E4]/20 text-left">Text or Call</span>
                  <p className="text-lg md:text-3xl font-brand font-bold tracking-tight text-[#E7E5E4] text-left">{CONTACT_INFO.PHONE}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] mono uppercase tracking-[0.3em] text-[#E7E5E4]/20 text-left">Find me here</span>
                  <p className="text-lg md:text-3xl font-brand font-bold tracking-tight text-[#E7E5E4] text-left">{CONTACT_INFO.INSTAGRAM}</p>
                </div>
              </div>
              <p className="mono text-[10px] font-bold tracking-[0.3em] text-[#E7E5E4]/20 uppercase mt-8">Living and working in {CONTACT_INFO.LOCATION}</p>
            </div>
          </div>
          {/* Subtle decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] border border-white/5 rounded-full pointer-events-none opacity-20" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShuutzStudio;
