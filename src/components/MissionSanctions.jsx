import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MissionHeader } from './MissionATO';

const shields = [
  { id: 'OFAC', label: 'OFAC', sub: 'US Treasury', color: '#3B82F6' },
  { id: 'EU', label: 'EU', sub: 'European Union', color: '#8B5CF6' },
  { id: 'UN', label: 'UN', sub: 'Security Council', color: '#10B981' },
  { id: 'HMT', label: 'HMT', sub: 'UK Treasury', color: '#D4AF37' },
];

// approx city dots on a light world
const dots = [
  { x: 20, y: 38 }, { x: 30, y: 30 }, { x: 47, y: 28 }, { x: 50, y: 32 },
  { x: 60, y: 44 }, { x: 68, y: 46 }, { x: 75, y: 54 }, { x: 80, y: 40 }, { x: 86, y: 70 }, { x: 33, y: 64 },
];

const skills = [
  'Global Sanctions Screening', 'Cross-border Risk Review',
  'OFAC / EU / UN / HMT List Screening', 'PEP and Watchlist Review',
];

const MissionSanctions = () => {
  const [active, setActive] = useState([]);
  const allOn = active.length === shields.length;
  const toggle = (id) => setActive((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <section id="mission-sanctions" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #DBEAFE 0%, #F8FAFC 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <MissionHeader tag="MISSION 03" title="Sanctions" gold="World Shield"
          sub="A risky transaction is trying to cross borders. Activate all four screening shields to stop it." />

        <div className="grid lg:grid-cols-5 gap-6" data-aos="fade-up">
          {/* Globe */}
          <div className="lg:col-span-3 glass rounded-3xl p-6 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-white/80 overflow-hidden"
              style={{ aspectRatio: '16/10' }}>
              {/* radar rings */}
              {allOn && [0, 1, 2].map((i) => (
                <span key={i} className="absolute left-1/2 top-1/2 w-24 h-24 -ml-12 -mt-12 rounded-full border border-[#D4AF37]/40"
                  style={{ animation: 'pulse-ring 2.4s ease-out infinite', animationDelay: `${i * 0.8}s` }} />
              ))}

              <svg viewBox="0 0 100 62" className="w-full h-full relative">
                {/* dotted continents */}
                {[...Array(13)].map((_, r) =>
                  [...Array(22)].map((_, c) => (
                    <circle key={`${r}-${c}`} cx={c * 4.6 + 2} cy={r * 4.6 + 2} r="0.5" fill="#93C5FD" fillOpacity="0.35" />
                  ))
                )}
                {/* city nodes */}
                {dots.map((d, i) => (
                  <g key={i}>
                    <circle cx={d.x} cy={d.y} r="1.4" fill="#D4AF37" />
                    <circle cx={d.x} cy={d.y} r="2.6" fill="none" stroke="#D4AF37" strokeWidth="0.3" strokeOpacity="0.5" />
                  </g>
                ))}
                {/* shield arcs */}
                {shields.map((s, i) =>
                  active.includes(s.id) ? (
                    <motion.circle key={s.id} cx="50" cy="31" r={11 + i * 4.5} fill="none"
                      stroke={s.color} strokeWidth="0.7" strokeOpacity="0.7" strokeDasharray="3 2"
                      initial={{ pathLength: 0, rotate: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }}
                      style={{ transformOrigin: '50px 31px', animation: 'spinSlow 14s linear infinite' }} />
                  ) : null
                )}
                {/* crossing transaction */}
                <motion.circle r="1.1" fill={allOn ? '#10B981' : '#EF4444'}
                  animate={{ cx: allOn ? [20, 50] : [20, 86], cy: allOn ? [38, 31] : [38, 70] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
              </svg>

              <div className="absolute top-3 left-3 mono text-[10px] text-slate-400 flex items-center gap-1.5">
                <span className="status-live">SCREENING</span>
              </div>
              <div className="absolute bottom-3 right-3 mono text-[10px] text-slate-400">{active.length}/4 SHIELDS</div>
            </div>

            {allOn && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-2xl p-4 glow-green flex items-center justify-between"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(255,255,255,0.7))', border: '1px solid rgba(16,185,129,0.3)' }}>
                <div>
                  <p className="mono text-[10px] text-emerald-600 mb-0.5">SANCTIONS SCREENING COMPLETE</p>
                  <p className="font-black text-slate-800">Risk Entity Flagged · Escalation Required</p>
                </div>
                <span className="text-2xl">🛡️</span>
              </motion.div>
            )}
          </div>

          {/* Shields + skills */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {shields.map((s) => {
                const on = active.includes(s.id);
                return (
                  <button key={s.id} onClick={() => toggle(s.id)}
                    className="rounded-2xl p-4 text-left transition-all hover:scale-[1.03]"
                    style={{
                      background: on ? `linear-gradient(135deg, ${s.color}22, rgba(255,255,255,0.8))` : 'rgba(255,255,255,0.7)',
                      border: `1px solid ${on ? s.color + '66' : 'rgba(255,255,255,0.9)'}`,
                      boxShadow: on ? `0 10px 30px ${s.color}33` : '0 8px 24px rgba(15,23,42,0.06)',
                    }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg">{on ? '🛡️' : '⚪'}</span>
                      <span className="mono text-[9px]" style={{ color: on ? s.color : '#94A3B8' }}>{on ? 'ACTIVE' : 'OFF'}</span>
                    </div>
                    <p className="font-black text-slate-800">{s.label}</p>
                    <p className="mono text-[9px] text-slate-400">{s.sub}</p>
                  </button>
                );
              })}
            </div>

            <div className="glass rounded-2xl p-5">
              <p className="mono text-[11px] text-slate-400 mb-3">SKILLS UNLOCKED</p>
              <div className="space-y-2">
                {skills.map((s, i) => (
                  <motion.div key={s} animate={allOn ? { opacity: 1 } : { opacity: 0.4 }} transition={{ delay: allOn ? i * 0.1 : 0 }}
                    className="flex items-center gap-2.5 text-xs font-semibold">
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[9px] ${allOn ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-300'}`}>
                      {allOn ? '✓' : '🔒'}
                    </span>
                    <span className={allOn ? 'text-slate-800' : 'text-slate-400'}>{s}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSanctions;
