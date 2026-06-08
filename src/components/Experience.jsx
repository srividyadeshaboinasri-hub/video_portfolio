import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const files = [
  {
    no: '001',
    company: 'Google Pay',
    sub: 'Cognizant · Trust & Safety Payments',
    role: 'Process Specialist – Data (SME)',
    status: 'ACTIVE',
    accent: '#D4AF37',
    bullets: [
      'SME for Trust & Safety Payments embedded in Google Pay operations',
      'Lead Account Takeover (ATO) fraud and payment dispute investigations',
      'AML/KYC due diligence and EDD on high-risk accounts including PEPs',
      'Screen against OFAC, EU, UN, and HMT sanctions lists',
      'Draft SAR/STR narratives ensuring FinCEN/FATF compliance',
      'Document fraud typologies — structuring, layering, smurfing',
      'Train and calibrate junior investigators',
    ],
  },
  {
    no: '002',
    company: 'USAA Bank',
    sub: 'Futuresoft / PwC engagement',
    role: 'Fraud Investigation Analyst',
    status: 'CLOSED',
    accent: '#60a5fa',
    bullets: [
      'Investigated fraud cases for USAA Bank via PwC',
      'KYC re-verification triggered by AML red flags',
      'Beneficial ownership research and adverse media screening',
      'Managed P0/P1 escalation queue',
      'Updated risk ratings with compliance teams',
    ],
  },
  {
    no: '003',
    company: 'YouTube TV',
    sub: 'Tata Consultancy Services',
    role: 'Trust & Safety Analyst',
    status: 'CLOSED',
    accent: '#a78bfa',
    bullets: [
      'Content and account policy enforcement',
      'Investigated policy violations and escalations',
      'Maintained SOP documentation and process improvements',
      'Quality calibration and team training',
    ],
  },
  {
    no: '004',
    company: 'Google Pay',
    sub: 'Wipro · Fraud Operations',
    role: 'Fraud Operations Analyst',
    status: 'CLOSED',
    accent: '#34d399',
    bullets: [
      'Front-line fraud investigation for payment disputes',
      'Transaction monitoring for suspicious patterns',
      'Chargeback analysis and CNP fraud detection',
      'Fraud ring identification across linked accounts',
    ],
  },
  {
    no: '005',
    company: 'UnitedHealth',
    sub: 'Aston Carter · Risk & Compliance',
    role: 'Risk & Compliance Analyst',
    status: 'CLOSED',
    accent: '#22d3ee',
    bullets: [
      'Risk and compliance operations for UnitedHealth Group',
      'Case management and data integrity review',
      'Regulatory reporting and quality assurance',
    ],
  },
];

const CaseFile = ({ file, open, onClick, index }) => (
  <div data-aos="fade-up" data-aos-delay={index * 60}>
    <button onClick={onClick}
      className="w-full text-left glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden"
      style={{ borderColor: open ? `${file.accent}50` : 'rgba(255,255,255,0.07)' }}>
      <div className="absolute top-0 left-5 right-5 h-px opacity-50" style={{ background: `linear-gradient(90deg, ${file.accent}, transparent)` }} />
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className="shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center mono"
            style={{ background: `${file.accent}12`, border: `1px solid ${file.accent}30` }}>
            <span className="text-[8px] text-white/40">CASE</span>
            <span className="text-xs font-bold" style={{ color: file.accent }}>{file.no}</span>
          </div>
          <div className="min-w-0">
            <h3 className="font-black text-white truncate">{file.company}</h3>
            <p className="mono text-[11px] text-white/40 truncate">{file.sub}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="mono text-[10px] px-2.5 py-1 rounded-full hidden sm:inline-flex items-center gap-1.5"
            style={{
              background: file.status === 'ACTIVE' ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)',
              color: file.status === 'ACTIVE' ? '#10b981' : 'rgba(255,255,255,0.4)',
              border: `1px solid ${file.status === 'ACTIVE' ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.1)'}`,
            }}>
            {file.status === 'ACTIVE' && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-blink" />}
            {file.status}
          </span>
          <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-white/40 text-xl leading-none">+</motion.span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }} className="overflow-hidden">
            <div className="pt-5 mt-5 border-t border-white/5">
              <p className="mono text-[10px] text-white/30 mb-1">CLASSIFIED · ROLE</p>
              <p className="text-sm font-semibold mb-4" style={{ color: file.accent }}>{file.role}</p>
              <p className="mono text-[10px] text-white/30 mb-3">INVESTIGATION REPORT</p>
              <ul className="space-y-2">
                {file.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-white/55 leading-relaxed">
                    <span className="mono text-[10px] mt-1 shrink-0" style={{ color: file.accent }}>{String(j + 1).padStart(2, '0')}</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  </div>
);

const Experience = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020817 0%, #04142B 100%)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <span className="mono text-xs tracking-[0.3em] uppercase" style={{ color: '#D4AF37' }}>Classified Archive</span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl md:text-5xl font-black text-white">
            Case <span className="text-gold-gradient">Files</span>
          </h2>
          <p className="text-white/40 mt-3 text-sm">Click any file to open the intelligence dossier.</p>
        </div>

        <div className="space-y-3">
          {files.map((f, i) => (
            <CaseFile key={f.no} file={f} index={i} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
