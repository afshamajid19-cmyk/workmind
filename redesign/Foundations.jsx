/* ============================================================
   WorkMind Redesign — Foundations
   Premium primitives shared across all pages.
   ============================================================ */
const { useState, useEffect, useRef, useCallback } = React;

/* ---------- Icon (Lucide UMD → inline SVG) ---------- */
function Icon({ name, size = 24, color = 'currentColor', sw = 1.75, style }) {
  const pascal = name.split('-').map((s) => s[0].toUpperCase() + s.slice(1)).join('');
  const L = window.lucide || {};
  const node = L[pascal] || (L.icons && L.icons[pascal]) || [];
  const children = node.map((c, i) => React.createElement(c[0], { key: i, ...c[1] }));
  return React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round',
    style: { flexShrink: 0, display: 'block', ...style },
  }, children);
}

/* ---------- Logo (C-arc toothed gear + network circles) ---------- */
function Logo({ dark = false, compact = false }) {
  const c = dark ? '#0D1B2A' : '#fff';
  /*
   * 9-tooth partial gear ring — 260° arc (50° to 310° CW), opening on the right.
   * Center (30,32), valley-r=22, peak-r=27, inner-r=16.
   * Outer teeth traced as polyline, then inner arc closes the ring.
   */
  const GEAR = [
    "M44.1 48.9",
    /* tooth 1 */ "L43.5 55.4 L39.7 57.2",
    /* valley  */ "L34.2 53.6",
    /* tooth 2 */ "L30.9 59 L26.2 58.7",
    /* valley  */ "L23.3 53",
    /* tooth 3 */ "L17.7 56.1 L13.8 53.6",
    /* valley  */ "L14 47.1",
    /* tooth 4 */ "L7.6 47.1 L5.3 43",
    /* valley  */ "L8.7 37.6",
    /* tooth 5 */ "L3.1 34.4 L3.1 29.6",
    /* valley  */ "L8.7 26.4",
    /* tooth 6 */ "L5.3 21 L7.4 17.3",
    /* valley  */ "L14 16.9",
    /* tooth 7 */ "L13.8 10.4 L17.3 8.2",
    /* valley  */ "L23.2 11.1",
    /* tooth 8 */ "L26.2 5.3 L30.5 5",
    /* valley  */ "L34.2 10.4",
    /* tooth 9 */ "L39.7 6.8 L43.9 8.9",
    /* end     */ "L44.1 15.1",
    /* inner arc: 310°→50° CCW (260°) */ "L40.3 19.7 A16 16 0 1 0 40.3 44.3 Z",
  ].join(" ");
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
      <svg width="36" height="36" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path fill={c} d={GEAR} />
        {/* three overlapping network circles */}
        <circle cx="26" cy="17" r="13" fill={c} />
        <circle cx="37" cy="32" r="10" fill={c} />
        <circle cx="26" cy="47" r="12" fill={c} />
        {/* satellite dots outside gear ring */}
        <circle cx="52" cy="11" r="5"   fill={c} />
        <circle cx="54" cy="52" r="4.5" fill={c} />
      </svg>
      {!compact && (
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.98rem', letterSpacing: '0.06em', color: c }}>
          WORKMIND<span style={{ color: 'var(--teal)' }}>.AI</span>
        </span>
      )}
    </div>
  );
}

/* ---------- Button (premium, shimmer + scale on hover) ---------- */
function Button({ variant = 'primary', children, onClick, full, size = 'md', style }) {
  const [h, setH] = useState(false);
  const [sheen, setSheen] = useState(false);
  const pad = size === 'lg' ? '17px 32px' : size === 'sm' ? '10px 18px' : '14px 26px';
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
    fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: size === 'lg' ? '1rem' : '0.92rem',
    letterSpacing: '-0.01em',
    borderRadius: 999, padding: pad, width: full ? '100%' : undefined,
    transition: 'transform var(--t) var(--ease), box-shadow var(--t), background var(--t), color var(--t), border-color var(--t)',
    transform: h ? 'translateY(-2px) scale(1.03)' : 'none',
    position: 'relative', overflow: 'hidden', ...style,
  };
  const variants = {
    primary: {
      background: h ? 'linear-gradient(120deg,#7dd3fc,#1B4F8A)' : 'var(--teal)',
      color: '#04111e',
      boxShadow: h ? 'var(--e-teal)' : '0 6px 18px rgba(56,189,248,0.22)',
      animation: !h ? 'wm-cta-pulse 3s ease-in-out infinite' : 'none',
    },
    glass: { background: h ? 'rgba(255,255,255,0.10)' : 'var(--glass-fill-2)', color: '#fff', border: '1px solid var(--glass-stroke)', backdropFilter: 'blur(10px)' },
    outline: { background: h ? 'var(--teal)' : 'transparent', color: h ? '#04111e' : 'var(--teal)', border: '1.5px solid var(--teal)' },
    ghost: { background: 'transparent', color: h ? '#fff' : 'var(--on-dark-2)' },
  };
  const handleEnter = () => { setH(true); setSheen(true); setTimeout(() => setSheen(false), 700); };
  return (
    <button onClick={onClick} onMouseEnter={handleEnter} onMouseLeave={() => setH(false)} style={{ ...base, ...variants[variant] }}>
      {sheen && variant === 'primary' && (
        <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)', animation: 'wm-sheen-sweep 0.65s ease forwards', pointerEvents: 'none', borderRadius: 999 }} />
      )}
      {children}
    </button>
  );
}

/* ---------- Eyebrow (Unbounded sub-font) ---------- */
function Eyebrow({ children, style }) { return <span className="wm-eyebrow" style={style}>{children}</span>; }

/* ---------- Reveal (CSS entrance, capture-safe) ---------- */
function Reveal({ children, delay = 0, style, as = 'div', className = '' }) {
  return React.createElement(as, { className: `wm-reveal ${className}`, style: { animationDelay: `${delay}s`, ...style } }, children);
}

/* ---------- GlassCard ---------- */
function GlassCard({ children, style, hover = true, glow = false, onClick }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => hover && setH(true)} onMouseLeave={() => setH(false)} className="wm-glass" style={{
      padding: 28, transition: 'transform var(--t) var(--ease), box-shadow var(--t), border-color var(--t)',
      transform: h ? 'translateY(-5px)' : 'none',
      borderColor: h ? 'var(--teal-stroke)' : 'var(--glass-stroke)',
      boxShadow: h ? (glow ? 'var(--e-glow)' : 'var(--e2)') : 'var(--e1)',
      cursor: onClick ? 'pointer' : 'default', ...style,
    }}>{children}</div>
  );
}

/* ---------- Counter (animated credibility counter) ---------- */
function Counter({ value, prefix = '', suffix = '', decimals = 0, dur = 1600 }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf = 0, started = false;
    const run = () => {
      if (started) return; started = true;
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(value * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    // Capture-safe: if observer never fires, show final value.
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); run(); } }, { threshold: 0.4 });
    io.observe(el);
    const safety = setTimeout(() => { if (!started) setN(value); }, 1200);
    return () => { io.disconnect(); cancelAnimationFrame(raf); clearTimeout(safety); };
  }, [value]);
  const shown = n >= value ? value : n;
  return <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>{prefix}{shown.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
}

/* ---------- Pill / Tag ---------- */
function Pill({ children, active, onClick, icon }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '0.86rem',
      padding: '9px 16px', borderRadius: 999,
      background: active ? 'var(--teal)' : (h ? 'rgba(255,255,255,0.08)' : 'var(--glass-fill)'),
      color: active ? '#06121d' : '#fff',
      border: `1px solid ${active ? 'var(--teal)' : 'var(--glass-stroke)'}`,
      transition: 'all var(--t-fast)',
    }}>{icon && <Icon name={icon} size={15} />}{children}</button>
  );
}

/* ---------- Section heading block ---------- */
function SectionHead({ eyebrow, title, accent, sub, center, dark, maxW = 720 }) {
  return (
    <div style={{ maxWidth: maxW, margin: center ? '0 auto' : 0, textAlign: center ? 'center' : 'left' }}>
      {eyebrow && <Reveal><Eyebrow style={center ? { justifyContent: 'center' } : undefined}>{eyebrow}</Eyebrow></Reveal>}
      <Reveal delay={0.05}><h2 className="wm-d2" style={{ marginTop: 16, color: dark ? 'var(--text-dark)' : '#fff' }}>{title} {accent && <span className="wm-gtext">{accent}</span>}</h2></Reveal>
      {sub && <Reveal delay={0.1}><p className="wm-lead" style={{ marginTop: 18, color: dark ? 'var(--text-muted)' : 'var(--on-dark-2)' }}>{sub}</p></Reveal>}
    </div>
  );
}

Object.assign(window, { Icon, Logo, Button, Eyebrow, Reveal, GlassCard, Counter, Pill, SectionHead });
