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

/* ---------- Logo (toothed gear-network mark + wordmark) ---------- */
function Logo({ dark = false, compact = false }) {
  const c = dark ? '#0D1B2A' : '#fff';
  /* 12-tooth gear ring (evenodd hole) + 3 network circles + 2 satellite dots */
  const GEAR = "M54 32 L60 33.5 L59.4 37.8 L53.3 37.7 L51.1 43 L55.5 47.3 L52.8 50.7 L47.6 47.6 L43 51.1 L44.7 57 L40.7 58.6 L37.7 53.3 L32 54 L30.5 60 L26.2 59.4 L26.3 53.3 L21 51.1 L16.8 55.5 L13.3 52.8 L16.4 47.6 L13 43 L7.1 44.7 L5.4 40.7 L10.8 37.7 L10 32 L4 30.5 L4.6 26.2 L10.8 26.3 L13 21 L8.5 16.8 L11.2 13.3 L16.4 16.4 L21 13 L19.3 7.1 L23.4 5.4 L26.3 10.8 L32 10 L33.5 4 L37.8 4.6 L37.7 10.8 L43 13 L47.3 8.5 L50.7 11.2 L47.6 16.4 L51.1 21 L57 19.3 L58.6 23.4 L53.3 26.3 Z M32 15 A17 17 0 0 1 32 49 A17 17 0 0 1 32 15 Z";
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path fill={c} fillRule="evenodd" d={GEAR} />
        <circle cx="22" cy="19" r="10" fill={c} />
        <circle cx="34" cy="32" r="9"  fill={c} />
        <circle cx="22" cy="45" r="10" fill={c} />
        <circle cx="54" cy="12" r="5"  fill={c} />
        <circle cx="56" cy="52" r="4.5" fill={c} />
      </svg>
      {!compact && <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.98rem', letterSpacing: '0.06em', color: c }}>WORKMIND<span style={{ color: 'var(--teal)' }}>.AI</span></span>}
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
