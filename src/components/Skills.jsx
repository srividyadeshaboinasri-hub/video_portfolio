import React from 'react';

const cards = [
  { name: 'Fraud Shield', icon: '🛡️', color: '#EF4444', tier: 'LEGENDARY',
    tags: ['Account Takeover', 'Identity Theft', 'Chargebacks', 'Payment Fraud'],
    power: 'Detects & neutralises fraudulent activity across payment ecosystems.' },
  { name: 'AML Engine', icon: '⚙️', color: '#D4AF37', tier: 'LEGENDARY',
    tags: ['CDD', 'EDD', 'KYC', 'PEP', 'High-Risk Entities'],
    power: 'Runs full due-diligence and money-laundering investigations at scale.' },
  { name: 'Sanctions Radar', icon: '📡', color: '#3B82F6', tier: 'EPIC',
    tags: ['OFAC', 'EU', 'UN', 'HMT', 'Watchlist'],
    power: 'Screens entities against every global sanctions & watchlist source.' },
  { name: 'Trust & Safety Guard', icon: '🔒', color: '#10B981', tier: 'EPIC',
    tags: ['Policy Enforcement', 'P0/P1 Escalations', 'Risk Rating'],
    power: 'Protects platform integrity and resolves priority incidents.' },
  { name: 'Regulatory Writer', icon: '✍️', color: '#8B5CF6', tier: 'EPIC',
    tags: ['SAR', 'STR', 'Case Narratives', 'FinCEN', 'FATF'],
    power: 'Drafts regulator-ready narratives and compliance documentation.' },
  { name: 'Investigation Toolkit', icon: '🧰', color: '#06B6D4', tier: 'RARE',
    tags: ['OSINT', 'Beneficial Ownership', 'Adverse Media', 'Case Mgmt'],
    power: 'A full arsenal of research and case-management techniques.' },
];

const PowerCard = ({ c, index }) => (
  <div data-aos="fade-up" data-aos-delay={index * 70} className="flip-card h-72">
    <div className="flip-inner">
      {/* FRONT */}
      <div className="flip-face rounded-3xl p-6 flex flex-col glass-gold"
        style={{ border: `1.5px solid ${c.color}55`, boxShadow: `0 16px 50px ${c.color}26` }}>
        <div className="flex items-center justify-between mb-4">
          <span className="mono text-[9px] px-2.5 py-1 rounded-full font-bold tracking-widest"
            style={{ background: `${c.color}1a`, color: c.color }}>{c.tier}</span>
          <span className="mono text-[9px] text-slate-400">#{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-4 animate-float"
            style={{ background: `${c.color}18`, border: `1px solid ${c.color}40` }}>
            {c.icon}
          </div>
          <h3 style={{ fontFamily: 'Playfair Display, serif' }} className="text-2xl font-black text-slate-900">{c.name}</h3>
        </div>
        <p className="mono text-[10px] text-slate-400 text-center">↻ hover to reveal abilities</p>
      </div>

      {/* BACK */}
      <div className="flip-face flip-back rounded-3xl p-6 flex flex-col text-white"
        style={{ background: `linear-gradient(160deg, ${c.color}, ${c.color}cc)`, boxShadow: `0 16px 50px ${c.color}55` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{c.icon}</span>
          <h3 className="text-lg font-black">{c.name}</h3>
        </div>
        <p className="text-sm text-white/90 leading-relaxed mb-4">{c.power}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {c.tags.map((t) => (
            <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-white/20 font-semibold backdrop-blur-sm">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-28 relative" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #DBEAFE 100%)' }}>
    <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
      <div className="text-center mb-14" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-4 mono text-[11px] tracking-[0.2em] text-[#9a7b1f]">
          COLLECTIBLE POWER CARDS
        </div>
        <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl md:text-5xl font-black text-slate-900">
          Skill <span className="text-gold-gradient">Power Cards</span>
        </h2>
        <p className="text-slate-500 mt-3">Hover any card to flip it and reveal the abilities.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => <PowerCard key={c.name} c={c} index={i} />)}
      </div>
    </div>
  </section>
);

export default Skills;
