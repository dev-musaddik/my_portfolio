import React, { useEffect, useState } from 'react';

/**
 * HackingOverlay.jsx
 * Advanced "danger-level" hacking overlay with heavy vibration, RGB-split, scanlines,
 * matrix rain, random burst text, skull hologram and body vibration.
 *
 * Self-contained: injects required CSS into <head> so you only need to import & render.
 * Usage: <HackingOverlay active={isActive} duration={1400} onFinish={() => {}} />
 *
 * MODIFIED: Increased matrix column count and updated animation for a denser,
 * full-screen "rain" effect.
 */

const HackingOverlay = ({ active = false, duration = 1400, onFinish }) => {
  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    // Inject CSS once
    if (!document.getElementById('hacking-overlay-danger-styles')) {
      const style = document.createElement('style');
      style.id = 'hacking-overlay-danger-styles';
      style.innerHTML = `
      /* Hacking Overlay - Danger Level Styles */
      .hod-overlay { position: fixed; inset: 0; z-index: 99999; pointer-events: none; font-family: monospace; }
      .hod-screen { position: absolute; inset: 0; background: #001100; mix-blend-mode: normal; overflow: hidden; }

      /* Full green flash + vignette */
      .hod-flash { position: absolute; inset: 0; background: radial-gradient(circle at 50% 30%, rgba(0,255,100,0.12), rgba(0,0,0,0.85)); opacity: 0; animation: hod-flash ${duration}ms ease-in-out forwards; }

      @keyframes hod-flash {
        0% { opacity: 0; filter: brightness(1); }
        20% { opacity: 1; filter: brightness(2) contrast(1.6); }
        60% { opacity: 0.6; filter: brightness(1.6); }
        100% { opacity: 0; }
      }

      /* RGB split layers */
      .hod-rgb { position: absolute; inset: 0; mix-blend-mode: screen; opacity: 0.85; }
      .hod-rgb .layer { position: absolute; inset: 0; background: inherit; }
      .hod-rgb .r { filter: drop-shadow(0 0 8px rgba(255,0,0,0.6)); transform: translateX(-6px); clip-path: inset(0 0 0 0); }
      .hod-rgb .g { filter: drop-shadow(0 0 10px rgba(0,255,0,0.9)); transform: translateX(0); }
      .hod-rgb .b { filter: drop-shadow(0 0 8px rgba(0,200,255,0.6)); transform: translateX(6px); }

      /* Body vibrate (applies slight translate to body) */
      body.hod-vibrate { animation: hod-body-shake ${Math.max(200, Math.floor(duration * 0.2))}ms linear; }
      @keyframes hod-body-shake {
        0% { transform: translate(0,0); }
        10% { transform: translate(-3px, 2px) rotate(-0.4deg); }
        20% { transform: translate(4px, -2px) rotate(0.6deg); }
        30% { transform: translate(-5px, 3px) rotate(-0.8deg); }
        40% { transform: translate(3px, -3px) rotate(0.5deg); }
        50% { transform: translate(-2px, 2px) rotate(-0.3deg); }
        60% { transform: translate(2px, -1px) rotate(0.2deg); }
        70% { transform: translate(-1px, 1px) rotate(-0.1deg); }
        100% { transform: translate(0,0) rotate(0); }
      }

      /* CRT scanlines */
      .hod-scan { position: absolute; inset: 0; background-image: linear-gradient(rgba(0,255,0,0.06) 0.5px, transparent 0.5px); background-size: 100% 3px; mix-blend-mode: overlay; opacity: 0.85; animation: hod-scanline 120ms steps(2) infinite; }
      @keyframes hod-scanline { 0% { background-position: 0 0 } 100% { background-position: 0 6px } }

      /* Subtle noise */
      .hod-noise { position: absolute; inset: 0; background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><filter id="n"><feTurbulence baseFrequency="0.9" stitchTiles="stitch" numOctaves="1"/></filter><rect width="100%" height="100%" filter="url(%23n)"/></svg>'); opacity: 0.03; mix-blend-mode: screen; }

      /* Matrix columns (MODIFIED) */
      .hod-matrix {
        position: absolute;
        inset: 0;
        display: grid;
        grid-template-columns: repeat(40, 1fr); /* More columns */
        gap: 0;
        padding: 12px;
        pointer-events: none;
      }
      .hod-col {
        overflow: hidden;
        white-space: nowrap;
        font-size: 10px; /* Smaller font */
        line-height: 11px; /* Tighter line height */
        color: #8aff8a;
        text-shadow: 0 0 6px rgba(0,255,0,0.6);
        opacity: 0.0;
        transform: translateY(-100%); /* Start above screen */
      }
      .hod-col span {
        display: block; /* Removed transform */
      }
      .hod-col.animate {
        animation: hod-col-move 3000ms linear forwards; /* Longer animation */
      }
      
      /* Modified animation to fall full screen height */
      @keyframes hod-col-move {
        0% { transform: translateY(-100%); opacity: 0 }
        10% { opacity: 1 }
        90% { opacity: 1 }
        100% { transform: translateY(100vh); opacity: 0 } /* Fall to bottom of viewport */
      }

      /* Big skull hologram */
      .hod-skull { position: absolute; left: 50%; top: 45%; transform: translate(-50%, -50%); font-size: 220px; opacity: 0.06; filter: blur(1px) drop-shadow(0 0 20px rgba(0,255,0,0.5)); pointer-events: none; }

      /* Random burst text (danger) */
      .hod-burst { position: absolute; left: 10%; top: 10%; font-size: 14px; color: #00ff77; text-shadow: 0 0 6px rgba(0,255,0,0.4); mix-blend-mode: screen; }
      .hod-burst .item { display:block; opacity:0; transform: translateY(-6px); animation: hod-burst ${Math.max(800, Math.floor(duration * 0.7))}ms ease-out forwards; }
      @keyframes hod-burst { 0% { opacity: 0; transform: translateY(-6px) } 10% { opacity: 1; transform: translateY(0) } 80% { opacity: 1 } 100% { opacity: 0 } }

      /* Heavy glitch slices */
      .hod-glitch { position: absolute; inset: 0; pointer-events: none; }
      .hod-glitch .slice { position: absolute; left: 0; right: 0; height: 6%; background: rgba(0,255,100,0.06); mix-blend-mode: overlay; transform: skewY(-1deg); animation: hod-slice ${duration}ms linear infinite; }
      @keyframes hod-slice { 0% { transform: translateX(-100%) skewY(-1deg) } 50% { transform: translateX(20%) skewY(0deg) } 100% { transform: translateX(120%) skewY(1deg) } }

      `;
      document.head.appendChild(style);
    }

    // generate matrix text
    if (active) {
      const cols = 40; // MODIFIED: Increased column count
      const generated = Array.from({ length: cols }, (_, idx) => {
        const len = 10 + Math.floor(Math.random() * 30);
        const chars = Array.from({ length: len }, () => {
          const code = 0x30A0 + Math.floor(Math.random() * 96);
          return String.fromCharCode(code);
        }).join('');
        return chars;
      });
      setMatrix(generated);

      // add body vibrate class
      document.body.classList.add('hod-vibrate');

      // remove body vibrate after duration
      const t = setTimeout(() => {
        document.body.classList.remove('hod-vibrate');
        if (onFinish) onFinish();
      }, duration + 50);

      return () => clearTimeout(t);
    } else {
      setMatrix([]);
      document.body.classList.remove('hod-vibrate');
    }
  }, [active, duration, onFinish]);

  if (!active) return null;

  return (
    <div className="hod-overlay" aria-hidden>
      <div className="hod-screen">
        <div className="hod-flash" />

        <div className="hod-rgb" aria-hidden>
          <div className="layer r" />
          <div className="layer g" />
          <div className="layer b" />
        </div>

        <div className="hod-scan" />
        <div className="hod-noise" />

        <div className="hod-matrix">
          {matrix.map((col, i) => (
            <div
              key={i}
              className={`hod-col ${Math.random() > 0.4 ? 'animate' : ''}`}
              style={{ animationDelay: `${(i % 10) * 200}ms` }} /* MODIFIED: More staggered delay */
            >
              <span>{col}</span>
            </div>
          ))}
        </div>

        <div className="hod-skull">☠</div>

        <div className="hod-burst">
          <div className="item" style={{ animationDelay: '50ms' }}>SECURITY BREACH DETECTED</div>
          <div className="item" style={{ animationDelay: '220ms' }}>INTRUSION: AUTH BYPASS</div>
          <div className="item" style={{ animationDelay: '400ms' }}>FIREWALL: OVERRIDDEN</div>
        </div>

        <div className="hod-glitch">
          <div className="slice" style={{ top: '12%', animationDelay: '0ms' }} />
          <div className="slice" style={{ top: '33%', animationDelay: '80ms' }} />
          <div className="slice" style={{ top: '56%', animationDelay: '160ms' }} />
          <div className="slice" style={{ top: '78%', animationDelay: '240ms' }} />
        </div>
      </div>
    </div>
  );
};

export default HackingOverlay;