import React from 'react';

const Footer = () => (
  <footer className="relative py-12 px-6 md:px-12" style={{ background: '#F8FAFC', borderTop: '1px solid rgba(15,23,42,0.06)' }}>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-gold-gradient flex items-center justify-center text-base glow-gold">🛡️</span>
          <div>
            <span style={{ fontFamily: 'Playfair Display, serif' }} className="text-lg font-black text-slate-900">The Fraudverse</span>
            <p className="text-slate-400 text-xs">Sri Vidya · Fraud Intelligence Specialist</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm font-semibold">
          <a href="mailto:srividya.deshaboinasri@gmail.com" className="text-slate-500 hover:text-[#D4AF37] transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/sri-vidya-deshaboina/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#D4AF37] transition-colors">LinkedIn</a>
          <a href="#home" className="text-slate-500 hover:text-[#D4AF37] transition-colors">Back to City ↑</a>
        </div>
      </div>

      <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400"
        style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}>
        <p>© 2025 Sri Vidya Deshaboina · AML · KYC · Trust &amp; Safety · Sanctions</p>
        <p>Hyderabad, India · Open to Remote / Relocation</p>
      </div>
    </div>
  </footer>
);

export default Footer;
