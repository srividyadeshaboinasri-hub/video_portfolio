import React, { useState, useEffect } from 'react';

const links = [
  { label: 'City', href: '#home' },
  { label: 'ATO Mission', href: '#mission-ato' },
  { label: 'Money Trail', href: '#mission-aml' },
  { label: 'Sanctions', href: '#mission-sanctions' },
  { label: 'Report Room', href: '#mission-sar' },
  { label: 'Career', href: '#career' },
  { label: 'Power Cards', href: '#skills' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || open ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled || open ? 'glass' : ''}`}>
          <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-gold-gradient flex items-center justify-center text-base glow-gold">🛡️</span>
            <span style={{ fontFamily: 'Playfair Display, serif' }} className="text-lg font-black text-slate-900">
              The Fraudverse
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.label} href={l.href}
                className="px-3.5 py-2 rounded-full text-sm font-semibold text-slate-500 hover:text-slate-900 hover:bg-white/70 transition-all">
                {l.label}
              </a>
            ))}
          </div>

          <a href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-slate-900 bg-gold-gradient glow-gold shine hover:scale-105 transition-transform">
            Hire Sri Vidya
          </a>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-slate-700 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeWidth="1.8" d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {/* mobile */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-[420px] mt-2' : 'max-h-0'}`}>
          <div className="glass rounded-3xl p-4 grid grid-cols-2 gap-2">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-sm font-semibold text-slate-600 bg-white/60 hover:bg-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
              className="col-span-2 px-4 py-3 rounded-2xl text-sm font-bold text-center text-slate-900 bg-gold-gradient">
              Hire Sri Vidya
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
