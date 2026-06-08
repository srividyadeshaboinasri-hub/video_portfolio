import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'Detect',
    desc: 'Transaction monitoring alerts, velocity checks, and behavioural anomaly detection surface suspicious activity for review.',
    accent: '#D4AF37',
    icon: '📡',
  },
  {
    id: '02',
    title: 'Investigate',
    desc: 'Deep-dive case analysis: OSINT, beneficial ownership tracing, adverse media screening, and cross-account linkage.',
    accent: '#60a5fa',
    icon: '🔍',
  },
  {
    id: '03',
    title: 'Escalate',
    desc: 'P0/P1 escalation management, SAR/STR drafting for FinCEN, and sanctions screening against OFAC/EU/UN/HMT lists.',
    accent: '#a78bfa',
    icon: '🚨',
  },
  {
    id: '04',
    title: 'Resolve',
    desc: 'Risk rating updates, account action, regulatory reporting, and process feedback to prevent future recurrence.',
    accent: '#34d399',
    icon: '✓',
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

  return (
    <section ref={containerRef} id="process" className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #04142B 0%, #061C3A 50%, #020817 100%)' }}>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#D4AF37' }}>Methodology</span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif' }}
            className="text-4xl md:text-5xl font-black text-white">
            Investigation <span className="text-gold-gradient">Process</span>
          </h2>
        </div>

        <div className="relative">
          {/* Center animated line (desktop) */}
          <svg className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-12 hidden lg:block" viewBox="0 0 12 800" preserveAspectRatio="none">
            <path d="M6 0 L6 800" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" strokeDasharray="4 8" />
            <motion.path d="M6 0 L6 800" stroke="#D4AF37" strokeWidth="2" fill="none"
              style={{ pathLength }} strokeLinecap="round" />
          </svg>

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, i) => (
              <div key={step.id} data-aos="fade-up" data-aos-delay={i * 80}
                className={`flex items-stretch gap-8 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 group">
                  <div className="relative glass rounded-3xl p-7 transition-all duration-400 hover:-translate-y-1.5 h-full"
                    style={{ borderColor: `${step.accent}25` }}>
                    {/* Glow corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-40 transition-opacity group-hover:opacity-70"
                      style={{ background: `radial-gradient(circle, ${step.accent}20 0%, transparent 70%)` }} />

                    <div className="flex items-center gap-4 mb-4 relative">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                        style={{ background: `${step.accent}15`, border: `1px solid ${step.accent}40` }}>
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold tracking-widest" style={{ color: step.accent }}>STEP {step.id}</span>
                        <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/45 text-sm leading-relaxed relative">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot (desktop) */}
                <div className="hidden lg:flex w-12 shrink-0 justify-center pt-8">
                  <div className="w-5 h-5 rounded-full z-10 flex items-center justify-center"
                    style={{ background: '#020817', border: `2px solid ${step.accent}`, boxShadow: `0 0 16px ${step.accent}80` }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.accent }} />
                  </div>
                </div>

                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
