import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/about/srividya.png';

const buildings = [
  { name: 'Fraud Agency', icon: '🕵️', href: '#mission-ato', color: 'from-rose-200 to-rose-50', h: 'h-40' },
  { name: 'AML Bank Tower', icon: '🏦', href: '#mission-aml', color: 'from-amber-200 to-amber-50', h: 'h-56' },
  { name: 'Google Pay Center', icon: '💳', href: '#mission-ato', color: 'from-blue-200 to-blue-50', h: 'h-64' },
  { name: 'Sanctions Shield', icon: '🛡️', href: '#mission-sanctions', color: 'from-violet-200 to-violet-50', h: 'h-48' },
  { name: 'Risk Analytics Lab', icon: '📊', href: '#mission-sar', color: 'from-emerald-200 to-emerald-50', h: 'h-52' },
  { name: 'Case File Museum', icon: '🗂️', href: '#career', color: 'from-sky-200 to-sky-50', h: 'h-44' },
  { name: 'Contact HQ', icon: '📡', href: '#contact', color: 'from-amber-100 to-white', h: 'h-36' },
];

const City = () => {
  const [start, setStart] = useState(false);
  useEffect(() => { const t = setTimeout(() => setStart(true), 2300); return () => clearTimeout(t); }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden pt-28"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #DBEAFE 55%, #EDE9FE 100%)' }}>

      {/* Sun glow */}
      <div className="absolute -top-32 right-10 w-[460px] h-[460px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,231,206,0.9) 0%, rgba(212,175,55,0.15) 40%, transparent 70%)' }} />

      {/* Clouds */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white/70 blur-2xl pointer-events-none"
          style={{ width: 200 + i * 70, height: 70 + i * 20, top: `${8 + i * 12}%`,
            animation: `drift ${36 + i * 8}s linear infinite`, animationDelay: `${i * -7}s` }} />
      ))}

      {/* Floating payment cards */}
      {[
        { t: '22%', l: '12%', d: 0, rot: -12, g: 'from-amber-300 to-amber-100' },
        { t: '30%', l: '82%', d: 1.2, rot: 10, g: 'from-blue-300 to-blue-100' },
        { t: '58%', l: '8%', d: 0.6, rot: 8, g: 'from-violet-300 to-violet-100' },
      ].map((c, i) => (
        <motion.div key={i} className="absolute hidden md:block pointer-events-none"
          style={{ top: c.t, left: c.l }}
          animate={{ y: [0, -18, 0] }} transition={{ duration: 6, repeat: Infinity, delay: c.d, ease: 'easeInOut' }}>
          <div className={`w-28 h-16 rounded-xl bg-gradient-to-br ${c.g} glow-soft border border-white/70 p-2.5 flex flex-col justify-between`}
            style={{ transform: `rotate(${c.rot}deg)` }}>
            <div className="w-6 h-4 rounded bg-white/60" />
            <div className="mono text-[7px] text-slate-600/70 tracking-widest">•••• 8821</div>
          </div>
        </motion.div>
      ))}

      {/* Floating Investigator ID badge */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.6, duration: 0.7 }}
        className="absolute top-28 left-6 md:left-12 z-20 hidden md:block">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="glass rounded-2xl p-3 w-48">
          <div className="flex items-center justify-between mb-2">
            <span className="mono text-[9px] text-slate-400 tracking-widest">INVESTIGATOR ID</span>
            <span className="mono text-[9px] text-emerald-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-blink" />LIVE
            </span>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/80 mb-2" style={{ boxShadow: '0 8px 24px rgba(15,23,42,0.12)' }}>
            <img src={profileImage} alt="Sri Vidya Deshaboina" className="w-full h-28 object-cover object-top" />
          </div>
          <p className="font-black text-slate-800 text-sm leading-none">Sri Vidya</p>
          <p className="mono text-[9px] text-[#9a7b1f] mt-1">Lead Investigator · Lvl 5</p>
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Headline */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: start ? 1 : 0, y: start ? 0 : 30 }}
          transition={{ duration: 0.9 }} className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-6 mono text-[11px] tracking-[0.2em] text-[#9a7b1f]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-blink" /> NOW ENTERING · PAYMENT CITY
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', lineHeight: 1.02 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-5">
            Welcome to <span className="text-gold-gradient">The Fraudverse</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8">
            An interactive financial-crime intelligence experience showcasing fraud investigation,
            AML/KYC, sanctions screening, Trust &amp; Safety, and regulatory escalation expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#mission-ato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-slate-900 bg-gold-gradient glow-gold shine hover:scale-105 transition-transform">
              ▶ Start Investigation
            </a>
            <a href="#career"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm text-slate-700 glass hover:scale-105 transition-transform">
              View Case Files
            </a>
          </div>
        </motion.div>

        {/* CITY SKYLINE — interactive buildings */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: start ? 1 : 0, y: start ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex items-end justify-center gap-2 md:gap-4 flex-wrap pb-10">
          {buildings.map((b, i) => (
            <a key={b.name} href={b.href} className="group relative flex flex-col items-center"
              style={{ width: 'clamp(86px, 12vw, 130px)' }}>
              {/* tooltip */}
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all z-20">
                <span className="glass rounded-full px-3 py-1.5 text-[11px] font-bold text-slate-700 whitespace-nowrap">
                  Enter ▶
                </span>
              </div>
              {/* tower */}
              <div className={`w-full ${b.h} rounded-t-2xl bg-gradient-to-b ${b.color} border border-white/80 relative overflow-hidden
                transition-all duration-300 group-hover:-translate-y-2 group-hover:glow-gold glow-soft`}>
                {/* windows */}
                <div className="absolute inset-0 p-2 grid grid-cols-3 gap-1 content-start opacity-60">
                  {[...Array(15)].map((_, k) => (
                    <div key={k} className="aspect-square rounded-[3px] bg-white/70" />
                  ))}
                </div>
                {/* shine sweep */}
                <div className="absolute inset-0 shine" />
                {/* icon medallion */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-11 h-11 rounded-xl glass flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  {b.icon}
                </div>
              </div>
              <span className="mt-2 text-[10px] md:text-xs font-bold text-slate-600 text-center leading-tight">{b.name}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* ground / road with moving transaction line */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-0"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(247,231,206,0.5))' }}>
        <svg className="absolute bottom-8 w-full h-8" preserveAspectRatio="none" viewBox="0 0 1200 20">
          <line x1="0" y1="10" x2="1200" y2="10" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="2"
            strokeDasharray="14 10" style={{ animation: 'flow 1s linear infinite' }} />
        </svg>
      </div>
    </section>
  );
};

export default City;
