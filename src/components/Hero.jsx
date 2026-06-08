import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroCanvas from './HeroCanvas';
import useCountUp from '../hooks/useCountUp';

const Metric = ({ target, suffix, label, decimals = 0, start }) => {
  const v = useCountUp(target, 1800, start);
  return (
    <div className="glass rounded-xl p-3.5">
      <p className="text-2xl font-black text-gold-gradient mono leading-none">
        {v.toFixed(decimals)}{suffix}
      </p>
      <p className="text-[10px] text-white/40 mt-1.5 font-medium">{label}</p>
    </div>
  );
};

const tickerItems = [
  'ATO flagged · acct ****8821', 'SAR filed · case #4471', 'OFAC hit · review queued',
  'PEP match · EDD opened', 'Velocity alert · $14,750', 'Sanctions sweep · clean',
  'Chargeback · escalated P1', 'Device fingerprint · mismatch',
];

const Hero = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setTimeout(() => setStart(true), 2400);
    const clock = setInterval(() => setTime(new Date()), 1000);
    return () => { clearTimeout(t); clearInterval(clock); };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <HeroCanvas />
      <div className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #020817)' }} />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: start ? 1 : 0, y: start ? 0 : 30 }}
            transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-blink" />
              <span className="mono text-[11px] tracking-[0.2em] text-white/70">SYSTEM ONLINE · LEAD INVESTIGATOR</span>
            </div>

            <h1 style={{ fontFamily: 'Playfair Display, serif', lineHeight: 1.02 }}
              className="text-5xl md:text-6xl xl:text-7xl font-black mb-6">
              <span className="text-white">Fraud Intelligence</span><br />
              <span className="text-gold-gradient">Command Center</span>
            </h1>

            <p className="text-base md:text-lg text-white/50 font-light max-w-xl mb-8 leading-relaxed">
              Protecting global payment ecosystems through <span className="text-white/80">AML</span>,
              <span className="text-white/80"> KYC</span>, <span className="text-white/80">Trust &amp; Safety</span>,
              and financial crime investigations — at the scale of Google Pay.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#investigation"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-bold text-sm text-black transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D76E)', boxShadow: '0 8px 32px rgba(212,175,55,0.35)' }}>
                Launch Investigation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-sm text-white glass transition-all hover:scale-105">
                Contact Investigator
              </a>
            </div>

            <div className="mono text-xs text-white/30 flex items-center gap-4 flex-wrap">
              <span className="status-live">LIVE</span>
              <span>UTC {time.toUTCString().slice(17, 25)}</span>
              <span>·</span>
              <span>Hyderabad, India</span>
            </div>
          </motion.div>

          {/* RIGHT — Live Dashboard */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: start ? 1 : 0, scale: start ? 1 : 0.96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-5 md:p-6 relative overflow-hidden">
            {/* header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5D76E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                <span className="mono text-[11px] text-white/40 ml-2">intel_dashboard.exe</span>
              </div>
              <span className="mono text-[10px] text-[#10b981]">● REC</span>
            </div>

            {/* metrics grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <Metric target={5} suffix="+" label="Years Experience" start={start} />
              <Metric target={1000} suffix="+" label="Cases Reviewed" start={start} />
              <Metric target={4} suffix="" label="Sanctions Lists" start={start} />
            </div>

            {/* expertise bars */}
            <div className="space-y-2.5 mb-4">
              {[
                { k: 'AML / KYC Compliance', v: 96 },
                { k: 'Sanctions Screening', v: 92 },
                { k: 'SAR / STR Filing', v: 90 },
                { k: 'P0 / P1 Escalations', v: 94 },
              ].map((row, i) => {
                const w = useCountUp(row.v, 1600, start);
                return (
                  <div key={i}>
                    <div className="flex justify-between mono text-[10px] text-white/50 mb-1">
                      <span>{row.k}</span><span className="text-[#D4AF37]">{Math.round(w)}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-gold-gradient rounded-full" style={{ width: `${w}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* live ticker */}
            <div className="border-t border-white/5 pt-3">
              <p className="mono text-[10px] text-white/30 mb-2">LIVE ACTIVITY FEED</p>
              <div className="h-20 overflow-hidden relative">
                <motion.div animate={{ y: ['0%', '-50%'] }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}>
                  {[...tickerItems, ...tickerItems].map((t, i) => (
                    <div key={i} className="mono text-[10px] text-white/40 py-1 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#06B6D4]" /> {t}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
