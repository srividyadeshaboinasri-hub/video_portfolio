import React, { useRef, useEffect } from 'react';

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId, frame = 0;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const labels = ['AML', 'KYC', 'SAR', 'EDD', 'OFAC', 'PEP', 'ATO', 'KYB', 'STR', 'BSA'];
    const nodes = Array.from({ length: 60 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 1,
      active: Math.random() > 0.82,
      phase: Math.random() * Math.PI * 2,
      label: i < 10 ? labels[i] : null,
    }));

    const packets = [];
    const spawnPacket = (a, b) => {
      if (packets.length > 30) return;
      packets.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, t: 0, speed: 0.005 + Math.random() * 0.008 });
    };

    const termLines = [
      '$ Investigating P0 escalation — Google Pay',
      '$ Screening OFAC · EU · UN · HMT sanctions',
      '$ EDD on high-risk PEP account initiated',
      '$ SAR narrative drafted — ATO typology',
      '$ Transaction velocity — structuring detected',
      '$ Fraud ring identified — 12 linked accounts',
    ];
    const ts = { lineIdx: 0, charIdx: 0, displayed: '', opacity: 0.9, x: 0, y: 0, timer: 0, fading: false };
    const resetTs = () => {
      ts.lineIdx = Math.floor(Math.random() * termLines.length);
      ts.charIdx = 0; ts.displayed = ''; ts.opacity = 0.9; ts.fading = false; ts.timer = 0;
      ts.x = 60 + Math.random() * (canvas.width * 0.55);
      ts.y = 100 + Math.random() * (canvas.height * 0.65);
    };
    resetTs();

    let scanY = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Rich deep background
      const bg = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.4, 0, canvas.width * 0.5, canvas.height * 0.4, canvas.width * 0.8);
      bg.addColorStop(0, '#04142B');
      bg.addColorStop(0.5, '#061C3A');
      bg.addColorStop(1, '#020817');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ambient gold glow in centre
      const glow = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.35, 0, canvas.width * 0.5, canvas.height * 0.35, canvas.width * 0.5);
      glow.addColorStop(0, 'rgba(212,175,55,0.04)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Fine grid
      ctx.strokeStyle = 'rgba(212,175,55,0.03)'; ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 100) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,canvas.height); ctx.stroke(); }
      for (let y = 0; y < canvas.height; y += 100) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvas.width,y); ctx.stroke(); }

      // Elegant scan line
      scanY = (scanY + 0.8) % canvas.height;
      const sg = ctx.createLinearGradient(0, scanY - 80, 0, scanY + 2);
      sg.addColorStop(0, 'rgba(212,175,55,0)');
      sg.addColorStop(1, 'rgba(212,175,55,0.04)');
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 80, canvas.width, 82);

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.phase += 0.015;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.12;
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(212,175,55,${alpha})`; ctx.lineWidth = 0.5; ctx.stroke();
            if (frame % 120 === 0 && Math.random() > 0.96) spawnPacket(nodes[i], nodes[j]);
          }
        }
      }

      // Nodes
      nodes.forEach(n => {
        const pulse = Math.max(0.5, n.active ? n.r + Math.sin(n.phase) * 2 : n.r);
        if (n.active) {
          // Outer ring
          ctx.beginPath(); ctx.arc(n.x, n.y, pulse + 8, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(212,175,55,${0.1 + Math.sin(n.phase) * 0.05})`; ctx.lineWidth = 1; ctx.stroke();
          // Inner glow
          const ng = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pulse + 4);
          ng.addColorStop(0, 'rgba(245,215,110,0.8)'); ng.addColorStop(1, 'rgba(212,175,55,0)');
          ctx.beginPath(); ctx.arc(n.x, n.y, pulse + 4, 0, Math.PI * 2); ctx.fillStyle = ng; ctx.fill();
          // Core
          ctx.beginPath(); ctx.arc(n.x, n.y, pulse, 0, Math.PI * 2);
          ctx.fillStyle = '#F5D76E'; ctx.shadowColor = '#D4AF37'; ctx.shadowBlur = 16; ctx.fill(); ctx.shadowBlur = 0;
          // Label
          if (n.label) {
            ctx.font = 'bold 8px "Plus Jakarta Sans", monospace';
            ctx.fillStyle = `rgba(245,215,110,${0.5 + Math.sin(n.phase) * 0.2})`;
            ctx.fillText(n.label, n.x + pulse + 6, n.y + 3);
          }
        } else {
          ctx.beginPath(); ctx.arc(n.x, n.y, pulse, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(212,175,55,0.2)'; ctx.fill();
        }
      });

      // Data packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i]; p.t += p.speed;
        if (p.t >= 1) { packets.splice(i, 1); continue; }
        const px = p.ax + (p.bx - p.ax) * p.t;
        const py = p.ay + (p.by - p.ay) * p.t;
        const tx = p.ax + (p.bx - p.ax) * Math.max(0, p.t - 0.1);
        const ty = p.ay + (p.by - p.ay) * Math.max(0, p.t - 0.1);
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(px, py);
        ctx.strokeStyle = 'rgba(245,215,110,0.7)'; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.beginPath(); ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#F5D76E'; ctx.shadowColor = '#D4AF37'; ctx.shadowBlur = 10;
        ctx.fill(); ctx.shadowBlur = 0;
      }

      // Terminal text
      ts.timer++;
      const line = termLines[ts.lineIdx];
      if (!ts.fading && ts.charIdx < line.length) {
        if (ts.timer % 4 === 0) { ts.charIdx++; ts.displayed = line.slice(0, ts.charIdx); }
      } else if (!ts.fading && ts.charIdx >= line.length) {
        if (ts.timer > 150) ts.fading = true;
      } else if (ts.fading) {
        ts.opacity -= 0.012;
        if (ts.opacity <= 0) resetTs();
      }
      if (ts.opacity > 0 && ts.displayed) {
        ctx.font = '11px "Plus Jakarta Sans", monospace';
        ctx.fillStyle = `rgba(212,175,55,${ts.opacity * 0.65})`;
        ctx.fillText(ts.displayed, ts.x, ts.y);
        if (!ts.fading && Math.floor(frame / 25) % 2 === 0) {
          const w = ctx.measureText(ts.displayed).width;
          ctx.fillStyle = `rgba(212,175,55,${ts.opacity * 0.65})`;
          ctx.fillRect(ts.x + w + 2, ts.y - 10, 6, 12);
        }
      }

      animationId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animationId); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default HeroCanvas;
