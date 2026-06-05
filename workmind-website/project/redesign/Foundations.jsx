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

/* ---------- Logo (gear-network mark + wordmark) ---------- */
function Logo({ dark = false, compact = false }) {
  const c = dark ? '#0D1B2A' : '#fff';
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        {/* C-arc gear ring: 270° partial ring, opening on the right */}
        <path fill={c} d="M44.4 50.4 A26 26 0 1 1 44.4 13.6 L38 19.9 A17 17 0 1 0 38 44.1 Z" />
        {/* Network molecule nodes — fill the gear opening */}
        <circle cx="40" cy="19" r="10" fill={c} />
        <circle cx="45" cy="34" r="8.5" fill={c} />
        <circle cx="33" cy="48" r="7" fill={c} />
        {/* Satellite nodes outside the ring */}
        <circle cx="55" cy="10" r="4.5" fill={c} />
        <circle cx="57" cy="53" r="4" fill={c} />
      </svg>
      {!compact && <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.98rem', letterSpacing: '0.06em', color: c }}>WORKMIND<span style={{ color: 'var(--teal)' }}>.AI</span></span>}
    </div>
  );
}

/* ---------- Button (premium, sheen on hover) ---------- */
function Button({ variant = 'primary', children, onClick, full, size = 'md', style }) {
  const [h, setH] = useState(false);
  const pad = size === 'lg' ? '17px 32px' : size === 'sm' ? '10px 18px' : '14px 26px';
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
    fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: size === 'lg' ? '1rem' : '0.92rem',
    borderRadius: 999, padding: pad, width: full ? '100%' : undefined,
    transition: 'transform var(--t) var(--ease), box-shadow var(--t), background var(--t), color var(--t), border-color var(--t)',
    transform: h ? 'translateY(-2px)' : 'none', position: 'relative', overflow: 'hidden', ...style,
  };
  const variants = {
    primary: { background: h ? 'linear-gradient(120deg,#6EC6E0,#1B4F8A)' : 'var(--teal)', color: '#06121d', boxShadow: h ? 'var(--e-teal)' : '0 6px 18px rgba(75,170,200,0.18)' },
    glass: { background: h ? 'rgba(255,255,255,0.10)' : 'var(--glass-fill-2)', color: '#fff', border: '1px solid var(--glass-stroke)', backdropFilter: 'blur(10px)' },
    outline: { background: h ? 'var(--teal)' : 'transparent', color: h ? '#06121d' : 'var(--teal)', border: '1.5px solid var(--teal)' },
    ghost: { background: 'transparent', color: h ? '#fff' : 'var(--on-dark-2)' },
  };
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ ...base, ...variants[variant] }}>{children}</button>
  );
}

/* ---------- Eyebrow ---------- */
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
      display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.86rem',
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
