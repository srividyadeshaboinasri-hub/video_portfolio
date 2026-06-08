import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const checks = [
  { label: 'KYC Verification', detail: 'Identity documents cross-referenced' },
  { label: 'Transaction Monitoring', detail: 'Velocity & pattern analysis' },
  { label: 'Device Fingerprinting', detail: 'Device ID mismatch detected' },
  { label: 'Adverse Media', detail: 'Negative news screening' },
  { label: 'PEP Screening', detail: 'Politically exposed person check' },
  { label: 'OFAC Screening', detail: 'US sanctions — SDN list' },
  { label: 'EU Screening', detail: 'EU consolidated sanctions' },
  { label: 'UN Screening', detail: 'UN Security Council list' },
  { label: 'HMT Screening', detail: 'UK asset freeze targets' },
];

const CaseInvestigation = () => {
  const [phase, setPhase] = useState('idle'); // idle | running | done
  const [completed, setCompleted] = useState(0);
  const timers = useRef([]);

  const run = () => {
    if (phase === 'running') return;
    setPhase('running');
    setCompleted(0);
    timers.current.forEach(clearTimeout);
    timers.current = [];
    checks.forEach((_, i) => {
      timers.current.push(setTimeout(() => setCompleted(i + 1), 450 * (i + 1)));
    });
    timers.current.push(setTimeout(() => setPhase('done'), 450 * (checks.length + 1)));
  };

  const reset = () => {
    timers.current.forEach(clearTimeout);
    setPhase('idle'); setCompleted(0);
  };

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  return (
    <section id="investigation" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020817 0%, #04142B 50%, #020817 100%)' }}>
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <span className="mono text-xs tracking-[0.3em] uppercase" style={{ color: '#D4AF37' }}>Live Simulation</span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl md:text-5xl font-black text-white">
            Case <span className="text-gold-gradient">Investigation</span>
          </h2>
          <p className="text-white/40 mt-3 max-w-xl mx-auto text-sm">Run a real fraud investigation workflow — exactly how I review a flagged transaction.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6" data-aos="fade-up">
          {/* LEFT — Transaction card */}
          <div className="lg:col-span-2">
            <div className="glass rounded-3xl p-6 relative overflow-hidden h-full">
              <div className="flex items-center justify-between mb-5">
                <span className="mono text-[11px] text-white/40">TXN-2026-0847</span>
                <span className="mono text-[10px] px-2.5 py-1 rounded-full bg-[#ef4444]/15 text-[#ef4444] border border-[#ef4444]/30 animate-blink">
                  ⚠ FLAGGED
                </span>
              </div>

              <p className="mono text-xs text-white/30 mb-1">SUSPICIOUS TRANSACTION</p>
              <p className="text-5xl font-black text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>$14,750</p>

              <div className="space-y-3 mb-6">
                {[
                  ['Origin', 'Unknown VPN exit node'],
                  ['Beneficiary', 'New account · 2h old'],
                  ['Channel', 'Cross-border wire'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="mono text-[11px] text-white/40">{k}</span>
                    <span className="text-xs text-white/70 font-medium">{v}</span>
                  </div>
                ))}
              </div>

              {/* Risk meter */}
              <div className="mb-6">
                <div className="flex justify-between mono text-[11px] mb-2">
                  <span className="text-white/40">RISK SCORE</span>
                  <span className="text-[#ef4444] font-bold">92% CRITICAL</span>
                </div>
                <div className="h-2.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                    className="h-full rounded-full glow-red"
                    style={{ background: 'linear-gradient(90deg, #f59e0b, #ef4444)' }} />
                </div>
              </div>

              {phase === 'idle' && (
                <button onClick={run}
                  className="w-full py-4 rounded-full font-bold text-sm text-black transition-all hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D76E)', boxShadow: '0 8px 28px rgba(212,175,55,0.35)' }}>
                  ▶ Investigate Transaction
                </button>
              )}
              {phase === 'running' && (
                <div className="w-full py-4 rounded-full font-bold text-sm text-center glass-gold text-[#F5D76E] mono">
                  ANALYZING<span className="animate-blink">_</span>
                </div>
              )}
              {phase === 'done' && (
                <button onClick={reset}
                  className="w-full py-4 rounded-full font-bold text-sm text-white glass transition-all hover:scale-[1.02]">
                  ↻ Run Again
                </button>
              )}
            </div>
          </div>

          {/* RIGHT — Workflow */}
          <div className="lg:col-span-3">
            <div className="glass rounded-3xl p-6 h-full relative overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <span className="mono text-xs text-white/50">INVESTIGATION WORKFLOW</span>
                <span className="mono text-[11px] text-[#D4AF37]">{completed}/{checks.length} CHECKS</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {checks.map((c, i) => {
                  const isDone = completed > i;
                  const isActive = phase === 'running' && completed === i;
                  return (
                    <motion.div key={c.label}
                      animate={{
                        borderColor: isDone ? 'rgba(16,185,129,0.4)' : isActive ? 'rgba(212,175,55,0.5)' : 'rgba(255,255,255,0.06)',
                        opacity: phase === 'idle' ? 0.4 : 1,
                      }}
                      className="flex items-center gap-3 rounded-xl px-3.5 py-3 border bg-white/[0.02]">
                      <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                        style={{
                          background: isDone ? 'rgba(16,185,129,0.15)' : isActive ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.04)',
                          color: isDone ? '#10b981' : isActive ? '#D4AF37' : 'rgba(255,255,255,0.3)',
                        }}>
                        {isDone ? '✓' : isActive ? <span className="animate-blink">●</span> : '○'}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-xs font-semibold truncate ${isDone ? 'text-white' : 'text-white/60'}`}>{c.label}</p>
                        <p className="mono text-[10px] text-white/30 truncate">{c.detail}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Final report */}
              <AnimatePresence>
                {phase === 'done' && (
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="mt-5 rounded-2xl p-5 relative overflow-hidden glow-red"
                    style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.12), rgba(2,8,23,0.6))', border: '1px solid rgba(239,68,68,0.3)' }}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <p className="mono text-[10px] text-white/40 mb-1">FINAL DETERMINATION</p>
                        <p className="text-2xl font-black text-[#ef4444]" style={{ fontFamily: 'Playfair Display, serif' }}>HIGH RISK ENTITY</p>
                        <div className="flex items-center gap-4 mt-3 mono text-[11px] text-white/50 flex-wrap">
                          <span>Reviewed by <span className="text-[#D4AF37]">Sri Vidya</span></span>
                          <span>·</span>
                          <span>SAR filed</span>
                          <span>·</span>
                          <span className="text-[#ef4444]">Status: ESCALATED</span>
                        </div>
                      </div>
                      <span className="mono text-[10px] px-3 py-1.5 rounded-full bg-[#ef4444]/20 text-[#ef4444] border border-[#ef4444]/40">
                        CASE CLOSED
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {phase === 'idle' && (
                <div className="mt-5 text-center mono text-[11px] text-white/25 border-t border-white/5 pt-5">
                  ◂ Click "Investigate Transaction" to begin the workflow
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseInvestigation;
