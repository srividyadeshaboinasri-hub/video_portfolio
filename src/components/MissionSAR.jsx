import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MissionHeader } from './MissionATO';

const evidence = [
  { id: 1, label: 'Transaction Pattern', icon: '📈' },
  { id: 2, label: 'Customer Profile', icon: '👤' },
  { id: 3, label: 'Device History', icon: '📱' },
  { id: 4, label: 'Adverse Media', icon: '📰' },
  { id: 5, label: 'Risk Rating', icon: '⚠️' },
  { id: 6, label: 'Beneficial Ownership', icon: '🏛️' },
];

const skills = ['SAR / STR Drafting', 'Regulatory Documentation', 'FinCEN / FATF Awareness', 'Case Narrative Writing', 'Quality Calibration'];

const MissionSAR = () => {
  const [collected, setCollected] = useState([]);
  const done = collected.length === evidence.length;
  const grab = (id) => setCollected((p) => (p.includes(id) ? p : [...p, id]));

  return (
    <section id="mission-sar" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #EDE9FE 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <MissionHeader tag="MISSION 04" title="SAR / STR" gold="Report Room"
          sub="Collect all six pieces of evidence floating in the investigation desk to file the report." />

        <div className="grid lg:grid-cols-3 gap-6" data-aos="fade-up">
          {/* desk */}
          <div className="lg:col-span-2 glass rounded-3xl p-6 relative overflow-hidden" style={{ minHeight: 340 }}>
            <div className="flex items-center justify-between mb-4">
              <span className="mono text-[11px] text-slate-400">EVIDENCE DESK</span>
              <span className="mono text-[11px] text-[#9a7b1f]">{collected.length}/6 COLLECTED</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {evidence.map((e, i) => {
                const got = collected.includes(e.id);
                return (
                  <motion.button key={e.id} onClick={() => grab(e.id)}
                    animate={got ? { y: 0 } : { y: [0, -8, 0] }}
                    transition={got ? {} : { duration: 2 + (i % 3) * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                    className="rounded-2xl p-4 text-center transition-all hover:scale-105"
                    style={{
                      background: got ? 'linear-gradient(135deg, rgba(16,185,129,0.14), rgba(255,255,255,0.8))' : 'rgba(255,255,255,0.7)',
                      border: `1px solid ${got ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.9)'}`,
                      boxShadow: got ? '0 10px 28px rgba(16,185,129,0.18)' : '0 8px 24px rgba(15,23,42,0.06)',
                    }}>
                    <div className="text-2xl mb-2">{got ? '✅' : e.icon}</div>
                    <p className="text-[11px] font-bold text-slate-700 leading-tight">{e.label}</p>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {done && (
                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  className="mt-5 rounded-2xl p-5 glass-gold flex items-center justify-between">
                  <div>
                    <p className="mono text-[10px] text-[#9a7b1f] mb-1">REPORT GENERATED</p>
                    <p className="font-black text-slate-800">SAR / STR Narrative Drafted</p>
                    <p className="text-xs text-slate-500 mt-0.5">Regulatory filing ready · Reviewed by Sri Vidya</p>
                  </div>
                  <span className="text-3xl">📄</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* skills */}
          <div className="glass rounded-3xl p-6 flex flex-col">
            <p className="mono text-[11px] text-slate-400 mb-4">SKILLS UNLOCKED</p>
            <div className="space-y-2.5 flex-1">
              {skills.map((s, i) => (
                <motion.div key={s} animate={done ? { opacity: 1 } : { opacity: 0.4 }} transition={{ delay: done ? i * 0.1 : 0 }}
                  className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 bg-white/60 border border-white/80">
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] ${done ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-300'}`}>
                    {done ? '✓' : '🔒'}
                  </span>
                  <span className={`text-xs font-semibold ${done ? 'text-slate-800' : 'text-slate-400'}`}>{s}</span>
                </motion.div>
              ))}
            </div>
            {done && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl p-4 glass-gold text-center">
                <p className="mono text-[10px] text-[#9a7b1f] mb-1">🏆 ACHIEVEMENT UNLOCKED</p>
                <p className="font-black text-slate-800">Regulatory Reporting Expert</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSAR;
