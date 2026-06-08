import React, { useRef, useEffect, useState } from 'react';

// Normalized coordinates (0-1) roughly matching world geography on an equirectangular layout
const hubs = [
  { name: 'New York', x: 0.27, y: 0.40, list: 'OFAC Monitoring' },
  { name: 'London', x: 0.47, y: 0.33, list: 'HMT Lists' },
  { name: 'Brussels', x: 0.50, y: 0.34, list: 'EU Sanctions' },
  { name: 'Geneva', x: 0.505, y: 0.37, list: 'UN Lists' },
  { name: 'Dubai', x: 0.605, y: 0.47, list: 'Cross-border Investigations' },
  { name: 'Hyderabad', x: 0.685, y: 0.50, list: 'Lead Investigator' },
  { name: 'Singapore', x: 0.755, y: 0.59, list: 'Fraud Intelligence Alerts' },
  { name: 'Hong Kong', x: 0.79, y: 0.46, list: 'Transaction Monitoring' },
  { name: 'Sydney', x: 0.88, y: 0.78, list: 'Fraud Intelligence Alerts' },
  { name: 'São Paulo', x: 0.34, y: 0.72, list: 'Cross-border Investigations' },
];

const routes = [
  [5, 1], [5, 0], [5, 4], [5, 6], [5, 7], [1, 2], [2, 3], [0, 9], [6, 8], [4, 1], [7, 6],
];

const SanctionsMap = () => {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const [hover, setHover] = useState(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf, frame = 0;

    const resize = () => {
      const r = wrapRef.current.getBoundingClientRect();
      canvas.width = r.width; canvas.height = r.height;
      setDims({ w: r.width, h: r.height });
    };
    resize();
    window.addEventListener('resize', resize);

    const P = (h) => ({ x: h.x * canvas.width, y: h.y * canvas.height });

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // dotted "continents" grid
      const gap = 22;
      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(59,130,246,0.08)';
          ctx.fill();
        }
      }

      // routes (animated arcs)
      routes.forEach(([a, b], ri) => {
        const pa = P(hubs[a]), pb = P(hubs[b]);
        const mx = (pa.x + pb.x) / 2, my = (pa.y + pb.y) / 2 - Math.abs(pa.x - pb.x) * 0.22;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.quadraticCurveTo(mx, my, pb.x, pb.y);
        ctx.strokeStyle = 'rgba(212,175,55,0.18)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // moving pulse along the arc
        const t = ((frame * 0.004) + ri * 0.13) % 1;
        const qx = (1 - t) * (1 - t) * pa.x + 2 * (1 - t) * t * mx + t * t * pb.x;
        const qy = (1 - t) * (1 - t) * pa.y + 2 * (1 - t) * t * my + t * t * pb.y;
        ctx.beginPath();
        ctx.arc(qx, qy, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = '#F5D76E';
        ctx.shadowColor = '#D4AF37'; ctx.shadowBlur = 10;
        ctx.fill(); ctx.shadowBlur = 0;
      });

      // hubs
      hubs.forEach((h, i) => {
        const p = P(h);
        const pulse = (Math.sin(frame * 0.04 + i) + 1) / 2;
        const isLead = h.name === 'Hyderabad';
        const col = isLead ? '212,175,55' : '6,182,212';

        // ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6 + pulse * 8, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${col},${0.4 - pulse * 0.35})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // core
        ctx.beginPath();
        ctx.arc(p.x, p.y, isLead ? 4.5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = isLead ? '#F5D76E' : '#22d3ee';
        ctx.shadowColor = isLead ? '#D4AF37' : '#06B6D4'; ctx.shadowBlur = 14;
        ctx.fill(); ctx.shadowBlur = 0;
      });

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020817 0%, #061C3A 50%, #020817 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <span className="mono text-xs tracking-[0.3em] uppercase" style={{ color: '#D4AF37' }}>Global Coverage</span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl md:text-5xl font-black text-white">
            Sanctions <span className="text-gold-gradient">Intelligence Map</span>
          </h2>
        </div>

        <div ref={wrapRef} data-aos="zoom-in"
          className="relative w-full rounded-3xl overflow-hidden glass"
          style={{ height: 'min(58vw, 520px)' }}
          onMouseLeave={() => setHover(null)}>
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* radar sweep overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[120%] aspect-square rounded-full animate-radar"
              style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgba(212,175,55,0.06) 40deg, transparent 80deg)' }} />
          </div>

          {/* interactive hotspots */}
          {dims.w > 0 && hubs.map((h, i) => (
            <button key={h.name}
              onMouseEnter={() => setHover(i)}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: h.x * dims.w, top: h.y * dims.h, width: 28, height: 28 }}>
              <span className="sr-only">{h.name}</span>
              {hover === i && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap z-20">
                  <div className="glass-gold rounded-lg px-3 py-2 text-left">
                    <p className="text-xs font-bold text-white">{h.name}</p>
                    <p className="mono text-[10px] text-[#D4AF37]">{h.list}</p>
                  </div>
                </div>
              )}
            </button>
          ))}

          {/* corner HUD */}
          <div className="absolute top-4 left-4 mono text-[10px] text-white/40 flex items-center gap-2">
            <span className="status-live">TRACKING</span>
          </div>
          <div className="absolute bottom-4 right-4 mono text-[10px] text-white/30">
            {hubs.length} NODES · {routes.length} ACTIVE ROUTES
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mt-8" data-aos="fade-up">
          {['OFAC Monitoring', 'EU Sanctions', 'UN Lists', 'HMT Lists', 'Cross-border Investigations', 'Fraud Intelligence Alerts'].map(l => (
            <span key={l} className="glass rounded-full px-4 py-2 text-xs text-white/60 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]" /> {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SanctionsMap;
