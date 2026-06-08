import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/about/srividya.png';

const actions = [
  { label: 'Hire Sri Vidya', icon: '⭐', href: 'mailto:srividya.deshaboinasri@gmail.com?subject=Hiring — Sri Vidya Deshaboina', primary: true },
  { label: 'Download Intelligence Profile', icon: '⬇', href: 'mailto:srividya.deshaboinasri@gmail.com?subject=Request CV — Sri Vidya' },
  { label: 'Send Case Brief', icon: '📨', href: 'mailto:srividya.deshaboinasri@gmail.com?subject=Case Brief for Sri Vidya' },
  { label: 'Connect on LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/sri-vidya-deshaboina/' },
];

const Contact = () => (
  <section id="contact" className="py-28 relative overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #DBEAFE 0%, #EDE9FE 60%, #F8FAFC 100%)' }}>

    {/* clouds */}
    {[...Array(3)].map((_, i) => (
      <div key={i} className="absolute rounded-full bg-white/60 blur-2xl pointer-events-none"
        style={{ width: 240 + i * 60, height: 80, top: `${10 + i * 20}%`,
          animation: `drift ${34 + i * 8}s linear infinite`, animationDelay: `${i * -5}s` }} />
    ))}

    <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative" data-aos="fade-up">
      {/* Flying golden envelope */}
      <div className="relative h-20 mb-2">
        <motion.div className="absolute left-0 top-4 text-3xl"
          animate={{ x: ['0%', '120%', '240%'], y: [0, -16, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>✉️</motion.div>
        <div className="absolute right-0 top-2 w-14 h-14 rounded-2xl glass-gold flex items-center justify-center text-xl glow-gold">🏢</div>
      </div>

      {/* Investigator avatar */}
      <div className="flex justify-center mb-5">
        <div className="relative">
          <img src={profileImage} alt="Sri Vidya Deshaboina"
            className="w-24 h-24 rounded-full object-cover object-top border-2 border-white glow-gold" />
          <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[10px]">✓</span>
        </div>
      </div>

      <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 mono text-[11px] tracking-[0.2em] text-slate-500">
        <span className="status-live">CONTACT HQ ONLINE</span>
      </div>

      <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] mb-6">
        Start a New <span className="text-gold-gradient">Investigation</span>
      </h2>

      <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
        Need a fraud intelligence specialist who can protect payment ecosystems, investigate high-risk
        activity, and support AML/KYC compliance? Let's talk.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
        {actions.map((a) => (
          <a key={a.label} href={a.href} target={a.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
            className={`inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-sm transition-transform hover:scale-[1.03] ${
              a.primary ? 'text-slate-900 bg-gold-gradient glow-gold shine' : 'text-slate-700 glass'}`}>
            <span>{a.icon}</span> {a.label}
          </a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 mono text-xs text-slate-400">
        <span>✉️ srividya.deshaboinasri@gmail.com</span>
        <span>📍 Hyderabad, India</span>
        <span>🌐 Remote / Relocation</span>
      </div>
    </div>
  </section>
);

export default Contact;
