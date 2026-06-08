import React from 'react';
import profileImage from '../assets/about/srividya.png';

const About = () => (
  <section id="about" className="py-28 relative overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #020817 0%, #04142B 50%, #020817 100%)' }}>
    <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none -translate-y-1/2"
      style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />

    <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
      <div className="grid lg:grid-cols-5 gap-10 items-center">

        {/* ID dossier card */}
        <div data-aos="fade-right" className="lg:col-span-2 flex justify-center lg:justify-start">
          <div className="glass rounded-3xl p-5 w-full max-w-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="mono text-[10px] text-white/40 tracking-widest">INVESTIGATOR ID</span>
              <span className="mono text-[10px] text-[#10b981] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-blink" /> VERIFIED
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden mb-4" style={{ border: '1px solid rgba(212,175,55,0.25)' }}>
              <img src={profileImage} alt="Sri Vidya Deshaboina" className="w-full h-64 object-cover object-top" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,8,23,0.7), transparent 55%)' }} />
              <div className="absolute bottom-3 left-3">
                <p style={{ fontFamily: 'Playfair Display, serif' }} className="text-xl font-black text-white leading-none">Sri Vidya</p>
                <p className="mono text-[10px] text-[#D4AF37] mt-1">Lead Investigator</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mono text-[10px]">
              {[['CLEARANCE', 'Level 5'], ['EXPERIENCE', '5+ Years'], ['CASES', '1000+'], ['BASE', 'Hyderabad']].map(([k, v]) => (
                <div key={k} className="rounded-lg px-3 py-2 bg-white/[0.03] border border-white/5">
                  <p className="text-white/30">{k}</p>
                  <p className="text-white/70 font-bold text-xs mt-0.5">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text */}
        <div data-aos="fade-left" className="lg:col-span-3 space-y-7">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
              <span className="mono text-xs tracking-[0.3em] uppercase" style={{ color: '#D4AF37' }}>Profile</span>
            </div>
            <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl md:text-5xl font-black text-white leading-tight">
              The Investigator<br /><span className="text-gold-gradient">Behind the System</span>
            </h2>
          </div>

          <p className="text-white/55 leading-relaxed">
            I'm a Process Specialist in Trust &amp; Safety Payments at Cognizant, embedded within Google Pay's fraud
            operations. I investigate Account Takeovers, run AML/KYC due diligence, screen against global sanctions lists
            (OFAC, EU, UN, HMT), and file SARs/STRs — at the scale of one of the world's largest payment platforms.
          </p>
          <p className="text-white/40 leading-relaxed text-sm">
            Across five major engagements — PwC/USAA Bank, TCS/YouTube TV, Wipro/Google Pay and UnitedHealth —
            I've mastered the full fraud investigation lifecycle. Open to remote, hybrid, or relocation to UK / EU / US.
          </p>

          <div>
            <p className="mono text-[10px] text-white/25 tracking-widest uppercase mb-3">Trusted Across</p>
            <div className="flex flex-wrap gap-2.5">
              {['Google Pay', 'PwC / USAA', 'TCS', 'Wipro', 'UnitedHealth'].map(c => (
                <span key={c} className="glass px-4 py-2 rounded-full text-xs font-semibold text-white/55">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
