import React, { useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import City from './components/City';
import MissionATO from './components/MissionATO';
import MissionAML from './components/MissionAML';
import MissionSanctions from './components/MissionSanctions';
import MissionSAR from './components/MissionSAR';
import Career from './components/Career';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  // Scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('aos-animate');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-aos]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mouse-follow soft spotlight
  useEffect(() => {
    const spot = document.getElementById('cursor-spotlight');
    if (!spot) return;
    const move = (e) => { spot.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`; };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <Preloader />

      <div id="cursor-spotlight"
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[1] hidden md:block"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 60%)', willChange: 'transform' }} />

      <Navbar />
      <main className="relative z-[2]">
        <City />
        <MissionATO />
        <MissionAML />
        <MissionSanctions />
        <MissionSAR />
        <Career />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
