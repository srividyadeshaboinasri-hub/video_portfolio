import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MissionHeader } from './MissionATO';

// account nodes positioned on a 100x60 viewBox
const nodes = [
  { id: 'A', x: 8, y: 30, label: 'Source' },
  { id: 'B', x: 30, y: 12, label: 'Shell Co.' },
  { id: 'C', x: 30, y: 48, label: 'Mule 1' },
  { id: 'D', x: 55, y: 30, label: 'Layering' },
  { id: 'E', x: 78, y: 14, label: 'Mule 2' },
  { id: 'F', x: 78, y: 46, label: 'Cash-out' },
  { id: 'G', x: 94, y: 30, label: 'Dest.' },
];
const edges = [
  ['A', 'B', false], ['A', 'C', true], ['B', 'D', false], ['C', 'D', true],
  ['D', 'E', false], ['D', 'F', true], ['E', 'G', false], ['F', 'G', true],
];
const pos = (id) => nodes.find((n) => n.id === id);

const skills = [
  'AML / KYC Investigation', 'Customer Due Diligence', 'Enhanced Due Diligence',
  'PEP Screening', 'Adverse Media Review', 'High-Risk Profile Review',
];

const MissionAML = () => {
  const [traced, setTraced] = useState(false);

  return (
    <section id="mission-aml" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #DBEAFE 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <MissionHeader tag="MISSION 02" title="The AML" gold="Money Trail"
          sub="Follow the funds across glass accounts. Red paths are suspicious — trace the laundering route." />

        <div className="grid lg:grid-cols-3 gap-6 items-stretch" data-aos="fade-up">
          {/* Trail map */}
          <div className="lg:col-span-2 glass rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="mono text-[11px] text-slate-400">FUND FLOW · CASE #AML-2207</span>
              <span className="mono text-[11px] text-rose-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-blink" /> 4 suspicious paths
              </span>
            </div>

            <div className="rounded-2xl bg-white/55 border border-white/80 p-3">
              <svg viewBox="0 0 100 60" className="w-full">
                {edges.map(([a, b, sus], i) => {
                  const p1 = pos(a), p2 = pos(b);
                  return (
                    <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                      stroke={sus ? '#EF4444' : '#D4AF37'}
                      strokeWidth={sus ? 0.9 : 0.7}
                      strokeOpacity={sus ? (traced ? 0.95 : 0.5) : 0.45}
                      strokeDasharray="2 1.6"
                      style={{ animation: traced ? `flow ${sus ? 0.7 : 1.4}s linear infinite` : 'none' }} />
                  );
                })}
                {nodes.map((n) => (
                  <g key={n.id}>
                    <circle cx={n.x} cy={n.y} r="2.6" fill="#fff" stroke="#D4AF37" strokeWidth="0.5" />
                    <circle cx={n.x} cy={n.y} r="1.2" fill="#D4AF37" />
                    <text x={n.x} y={n.y - 3.6} textAnchor="middle" fontSize="2.2" fill="#475569" fontWeight="700">{n.label}</text>
                  </g>
                ))}
                {traced && (
                  <motion.circle r="1.1" fill="#EF4444"
                    initial={{ cx: 8, cy: 30 }}
                    animate={{ cx: [8, 30, 55, 78, 94], cy: [30, 48, 30, 46, 30] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
                )}
              </svg>
            </div>

            <button onClick={() => setTraced(!traced)}
              className={`mt-5 w-full py-3.5 rounded-full font-bold text-sm transition-transform hover:scale-[1.02] ${traced ? 'glass text-slate-700' : 'bg-gold-gradient text-slate-900 glow-gold shine'}`}>
              {traced ? '↻ Reset Trail' : '💰 Trace the Money'}
            </button>
          </div>

          {/* Skills */}
          <div className="glass rounded-3xl p-6 flex flex-col">
            <p className="mono text-[11px] text-slate-400 mb-4">SKILLS UNLOCKED</p>
            <div className="space-y-2.5 flex-1">
              {skills.map((s, i) => (
                <motion.div key={s} animate={traced ? { opacity: 1 } : { opacity: 0.4 }} transition={{ delay: traced ? i * 0.1 : 0 }}
                  className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 bg-white/60 border border-white/80">
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] ${traced ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-300'}`}>
                    {traced ? '✓' : '🔒'}
                  </span>
                  <span className={`text-xs font-semibold ${traced ? 'text-slate-800' : 'text-slate-400'}`}>{s}</span>
                </motion.div>
              ))}
            </div>
            {traced && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl p-4 glass-gold text-center">
                <p className="mono text-[10px] text-[#9a7b1f] mb-1">🏆 ACHIEVEMENT UNLOCKED</p>
                <p className="font-black text-slate-800">AML / KYC Specialist</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAML;
