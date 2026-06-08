import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const levels = [
  { lvl: '01', company: 'Wipro', role: 'Operations Foundation',
    desc: 'Front-line fraud operations for Google Pay — transaction monitoring, chargeback analysis, CNP fraud detection.',
    achievement: 'Fraud Operations Rookie', color: '#22D3EE', side: 'left' },
  { lvl: '02', company: 'UnitedHealth', role: 'Process Quality & Risk Awareness',
    desc: 'Risk & compliance operations (via Aston Carter) — case management, data integrity, regulatory reporting & QA.',
    achievement: 'Risk & Compliance Analyst', color: '#34D399', side: 'right' },
  { lvl: '03', company: 'TCS · YouTube TV', role: 'Trust & Safety Operations',
    desc: 'Content & account policy enforcement, escalations, SOP documentation, quality calibration & team training.',
    achievement: 'Trust & Safety Operative', color: '#A78BFA', side: 'left' },
  { lvl: '04', company: 'Futuresoft · PwC · USAA Bank', role: 'Fraud Investigation Analyst',
    desc: 'Investigated fraud for USAA Bank, KYC re-verification, beneficial ownership research, P0/P1 escalation queue.',
    achievement: 'Fraud Investigation Analyst', color: '#60A5FA', side: 'right' },
  { lvl: '05', company: 'Cognizant · Google Pay', role: 'Process Specialist – Data (SME, T&S Payments)',
    desc: 'SME leading ATO investigations, AML/KYC due diligence, OFAC/EU/UN/HMT screening, SAR/STR drafting & mentoring.',
    achievement: 'Google Pay SME', color: '#D4AF37', side: 'left' },
];

const LevelCard = ({ data, index, onUnlock }) => {
  const ref = useRef(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !unlocked) {
        setUnlocked(true);
        onUnlock(data.achievement);
        ob.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [unlocked, data.achievement, onUnlock]);

  const left = data.side === 'left';

  return (
    <div ref={ref} className={`relative flex items-center ${left ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}>
      {/* node on center line */}
      <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={unlocked ? { scale: 1 } : { scale: 0.7 }}
          className="w-11 h-11 rounded-full flex items-center justify-center font-black text-xs text-white"
          style={{ background: unlocked ? data.color : '#CBD5E1', boxShadow: unlocked ? `0 0 0 6px ${data.color}22, 0 8px 24px ${data.color}66` : 'none' }}>
          {data.lvl}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: left ? -40 : 40 }}
        animate={unlocked ? { opacity: 1, x: 0 } : { opacity: 0.3, x: left ? -40 : 40 }}
        transition={{ duration: 0.6 }}
        className={`glass rounded-3xl p-6 w-full lg:w-[44%] ml-16 lg:ml-0 relative overflow-hidden`}>
        <div className="absolute top-0 left-6 right-6 h-1 rounded-full" style={{ background: data.color, opacity: 0.6 }} />
        <div className="flex items-center justify-between mb-2">
          <span className="mono text-[10px] tracking-widest" style={{ color: data.color }}>LEVEL {data.lvl}</span>
          <span className="mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${data.color}1a`, color: data.color }}>
            {unlocked ? 'CLEARED' : 'LOCKED'}
          </span>
        </div>
        <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-2xl font-black text-slate-900">{data.company}</h3>
        <p className="text-sm font-semibold mb-3" style={{ color: data.color }}>{data.role}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{data.desc}</p>
      </motion.div>
    </div>
  );
};

const Career = () => {
  const [toast, setToast] = useState(null);
  const onUnlock = (name) => {
    setToast(name);
    setTimeout(() => setToast(null), 2600);
  };

  return (
    <section id="career" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #EDE9FE 0%, #F8FAFC 100%)' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-4 mono text-[11px] tracking-[0.2em] text-[#9a7b1f]">
            CAREER LEVEL MAP
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl md:text-5xl font-black text-slate-900">
            5+ Years · <span className="text-gold-gradient">5 Levels Cleared</span>
          </h2>
          <p className="text-slate-500 mt-3">Scroll to unlock each level and earn achievements.</p>
        </div>

        <div className="relative space-y-10">
          {/* center line */}
          <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 rounded-full"
            style={{ background: 'linear-gradient(180deg, #22D3EE, #34D399, #A78BFA, #60A5FA, #D4AF37)' }} />
          {levels.map((l, i) => (
            <LevelCard key={l.lvl} data={l} index={i} onUnlock={onUnlock} />
          ))}
        </div>
      </div>

      {/* Achievement toast */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9000]">
            <div className="glass-gold rounded-2xl px-6 py-3.5 flex items-center gap-3 glow-gold">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="mono text-[10px] text-[#9a7b1f]">ACHIEVEMENT UNLOCKED</p>
                <p className="font-black text-slate-800">{toast}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Career;
