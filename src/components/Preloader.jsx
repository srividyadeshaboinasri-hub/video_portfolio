import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  'Loading Payment City',
  'Activating AML Engine',
  'Scanning Sanctions Network',
  'Building Investigator Profile',
];

const Preloader = () => {
  const [done, setDone] = useState(false);
  const [lines, setLines] = useState([]);
  const [granted, setGranted] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (idx.current < bootLines.length) {
        setLines((p) => [...p, bootLines[idx.current]]);
        idx.current += 1;
      } else {
        clearInterval(interval);
        setTimeout(() => setGranted(true), 300);
        setTimeout(() => setDone(true), 2200);
      }
    }, 460);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="boot"
          exit={{ opacity: 0, scale: 1.06, filter: 'blur(10px)' }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100000] flex items-center justify-center overflow-hidden"
          style={{ background: 'radial-gradient(120% 120% at 50% 0%, #FFFFFF 0%, #DBEAFE 45%, #EDE9FE 100%)' }}
        >
          {/* soft clouds */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="absolute rounded-full bg-white/70 blur-2xl"
                style={{ width: 220 + i * 60, height: 90 + i * 24, top: `${15 + i * 18}%`, left: `${-10 + i * 22}%`,
                  animation: `drift ${28 + i * 6}s linear infinite`, animationDelay: `${i * -6}s` }} />
            ))}
          </div>

          <div className="relative text-center px-8">
            {!granted ? (
              <div>
                <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gold-gradient flex items-center justify-center text-2xl glow-gold animate-float">
                  🛡️
                </div>
                <div className="space-y-3 inline-block text-left">
                  {lines.map((l, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3 mono text-sm text-slate-500">
                      <span className="w-4 h-4 rounded-full bg-[#10B981] flex items-center justify-center text-[9px] text-white">✓</span>
                      {l}…
                    </motion.div>
                  ))}
                  <div className="flex items-center gap-3 mono text-sm text-slate-400">
                    <span className="w-4 h-4 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin" />
                    <span className="animate-blink">processing</span>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2 mb-8 mono text-xs tracking-[0.25em] text-[#9a7b1f]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" /> ACCESS GRANTED
                </div>
                <h1 style={{ fontFamily: 'Playfair Display, serif' }}
                  className="text-6xl md:text-7xl font-black text-slate-900 mb-3">
                  Sri <span className="text-gold-gradient">Vidya</span>
                </h1>
                <p className="text-slate-500 font-medium">Fraud Intelligence Specialist</p>
                <p className="mono text-xs text-slate-400 mt-2 tracking-wide">AML • KYC • Trust &amp; Safety • Sanctions Screening</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
