import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  'Account Takeover Investigation',
  'Google Pay Trust & Safety',
  'P0 / P1 Escalation Handling',
  'Fraud Ring Detection',
  'Payment Dispute Review',
];

const MissionHeader = ({ tag, title, gold, sub }) => (
  <div className="text-center mb-12" data-aos="fade-up">
    <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-4 mono text-[11px] tracking-[0.2em] text-[#9a7b1f]">
      {tag}
    </div>
    <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl md:text-5xl font-black text-slate-900">
      {title} <span className="text-gold-gradient">{gold}</span>
    </h2>
    {sub && <p className="text-slate-500 mt-3 max-w-xl mx-auto">{sub}</p>}
  </div>
);
export { MissionHeader };

const MissionATO = () => {
  const [phase, setPhase] = useState('idle'); // idle | scanning | done
  const [risk, setRisk] = useState(0);
  const timers = useRef([]);

  const run = () => {
    if (phase === 'scanning') return;
    setPhase('scanning'); setRisk(0);
    timers.current.forEach(clearTimeout); timers.current = [];
    let r = 0;
    const ramp = setInterval(() => { r += 7; setRisk(Math.min(r, 91)); if (r >= 91) clearInterval(ramp); }, 80);
    timers.current.push(setTimeout(() => setPhase('done'), 2600));
  };
  const reset = () => { timers.current.forEach(clearTimeout); setPhase('idle'); setRisk(0); };
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  return (
    <section id="mission-ato" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #EDE9FE 0%, #F8FAFC 40%)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <MissionHeader tag="MISSION 01" title="Account" gold="Takeover Attack"
          sub="A suspicious login just hit a Google Pay account. Investigate and neutralise the threat." />

        <div className="grid lg:grid-cols-2 gap-6" data-aos="fade-up">
          {/* Alert card */}
          <div className="glass rounded-3xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-5">
              <span className="mono text-[11px] text-slate-400">SESSION-9F2A</span>
              <span className={`mono text-[10px] px-2.5 py-1 rounded-full border ${phase === 'done'
                ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                : 'bg-rose-50 text-rose-600 border-rose-200 animate-blink'}`}>
                {phase === 'done' ? '✓ ACTOR BLOCKED' : '⚠ SUSPICIOUS LOGIN'}
              </span>
            </div>

            {/* scan visual */}
            <div className="relative rounded-2xl bg-white/60 border border-white/80 h-44 mb-5 overflow-hidden flex items-center justify-center">
              <div className="text-5xl">{phase === 'done' ? '🚫' : '👤'}</div>
              {phase === 'scanning' && (
                <>
                  <motion.div className="absolute left-0 right-0 h-12"
                    style={{ background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.25), transparent)' }}
                    animate={{ top: ['-15%', '100%'] }} transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }} />
                  <motion.div className="absolute text-4xl"
                    animate={{ x: [-60, 60, -40, 50, 0], y: [-30, 20, 30, -20, 0] }}
                    transition={{ duration: 2.4, ease: 'easeInOut' }}>🔍</motion.div>
                </>
              )}
              {phase === 'done' && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="absolute bottom-3 left-3 glass rounded-lg px-2.5 py-1.5 mono text-[9px] text-slate-600">
                  device_fp: <span className="text-rose-500">MISMATCH</span>
                </motion.div>
              )}
            </div>

            <div className="space-y-2.5 mb-5">
              {[['Login Attempt', 'Suspicious'], ['Device', 'Unknown'], ['Location', 'Different Country'], ['Velocity', 'High']].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="mono text-[11px] text-slate-400">{k}</span>
                  <span className="text-xs font-semibold text-slate-700">{v}</span>
                </div>
              ))}
            </div>

            {/* risk meter */}
            <div className="mb-5">
              <div className="flex justify-between mono text-[11px] mb-2">
                <span className="text-slate-400">RISK SCORE</span>
                <span className="text-rose-500 font-bold">{risk}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <motion.div className="h-full rounded-full" style={{ background: 'linear-gradient(90deg, #F59E0B, #EF4444)' }}
                  animate={{ width: `${risk}%` }} transition={{ ease: 'easeOut' }} />
              </div>
            </div>

            {phase === 'idle' && (
              <button onClick={run} className="w-full py-4 rounded-full font-bold text-sm text-slate-900 bg-gold-gradient glow-gold shine hover:scale-[1.02] transition-transform">
                🔍 Investigate
              </button>
            )}
            {phase === 'scanning' && (
              <div className="w-full py-4 rounded-full font-bold text-sm text-center glass-gold text-[#9a7b1f] mono">SCANNING ACCOUNT<span className="animate-blink">_</span></div>
            )}
            {phase === 'done' && (
              <button onClick={reset} className="w-full py-4 rounded-full font-bold text-sm text-slate-700 glass hover:scale-[1.02] transition-transform">↻ Replay Mission</button>
            )}
          </div>

          {/* Reward / skills */}
          <div className="glass rounded-3xl p-6 flex flex-col">
            <p className="mono text-[11px] text-slate-400 mb-4">MISSION REWARD · SKILLS UNLOCKED</p>
            <div className="space-y-3 flex-1">
              {skills.map((s, i) => (
                <motion.div key={s}
                  initial={{ opacity: 0.35, x: 0 }}
                  animate={phase === 'done' ? { opacity: 1, x: 0 } : { opacity: 0.35 }}
                  transition={{ delay: phase === 'done' ? i * 0.12 : 0 }}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 bg-white/60 border border-white/80">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs ${phase === 'done' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-300'}`}>
                    {phase === 'done' ? '✓' : '🔒'}
                  </span>
                  <span className={`text-sm font-semibold ${phase === 'done' ? 'text-slate-800' : 'text-slate-400'}`}>{s}</span>
                </motion.div>
              ))}
            </div>
            <AnimatePresence>
              {phase === 'done' && (
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-2xl p-4 glass-gold text-center">
                  <p className="mono text-[10px] text-[#9a7b1f] mb-1">🏆 ACHIEVEMENT UNLOCKED</p>
                  <p className="font-black text-slate-800">Account Takeover Specialist</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionATO;
