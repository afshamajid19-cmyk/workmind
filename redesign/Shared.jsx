/* WorkMind Redesign — Shared section components */

/* ---------- Logo marquee (trust strip) ---------- */
function LogoMarquee() {
  const names = CLIENTS.slice(0, 12).map((c) => c.name);
  const row = [...names, ...names];
  return (
    <div style={{ position: 'relative', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)' }}>
      <div style={{ display: 'flex', gap: 56, width: 'max-content', animation: 'wm-marquee 38s linear infinite', alignItems: 'center' }}>
        {row.map((n, i) => (
          <span key={i} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '0.82rem', color: 'rgba(255,255,255,0.38)', whiteSpace: 'nowrap', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{n}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Stats band (animated counters) ---------- */
function StatsBand({ light }) {
  return (
    <div className="wm-statsband" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: light ? 'var(--border-l)' : 'var(--glass-stroke)', borderRadius: 'var(--r-md)', overflow: 'hidden', border: `1px solid ${light ? 'var(--border-l)' : 'var(--glass-stroke)'}` }}>
      {STATS.map((s, i) => (
        <Reveal key={i} delay={i * 0.07} style={{ background: light ? '#fff' : 'var(--ink-3)', padding: '34px 26px', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 'clamp(2.4rem,3.6vw,3.2rem)', lineHeight: 1, letterSpacing: '-0.04em', color: light ? 'var(--blue)' : 'var(--teal)' }}>
            <Counter value={s.v} prefix={s.prefix || ''} suffix={s.suffix || ''} />
          </div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.85rem', color: light ? 'var(--text-muted)' : 'var(--on-dark-2)', marginTop: 10 }}>{s.label}</div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Industry card ---------- */
function IndustryCard({ ind, onClick, delay }) {
  return (
    <Reveal delay={delay}>
      <GlassCard glow onClick={onClick} style={{ padding: 28, height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div style={{ width: 50, height: 50, borderRadius: 14, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg, rgba(75,170,200,0.22), rgba(27,79,138,0.18))', border: '1px solid var(--teal-stroke)' }}>
            <Icon name={ind.icon} size={24} color="var(--teal-lt)" />
          </div>
          <Icon name="arrow-up-right" size={20} color="var(--on-dark-3)" />
        </div>
        <h3 className="wm-h3" style={{ color: 'var(--on-dark)', marginTop: 2 }}>{ind.name}</h3>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'var(--teal)', letterSpacing: '0.06em', marginTop: 7, textTransform: 'uppercase' }}>{ind.tag}</div>
        <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-2)', fontSize: '0.92rem', lineHeight: 1.65, marginTop: 16, letterSpacing: '0.01em' }}>{ind.pain}</p>
      </GlassCard>
    </Reveal>
  );
}

/* ---------- Case study card (home preview — compact) ---------- */
function CaseCard({ c, delay }) {
  return (
    <Reveal delay={delay || 0}>
      <div style={{
        padding: '32px 30px 26px',
        borderRadius: 'var(--r-lg)',
        border: '1px solid var(--glass-stroke)',
        background: 'rgba(255,255,255,0.025)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: 'var(--e1)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* top edge highlight */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)' }} />

        {/* Sector + honest badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--teal)', background: 'rgba(56,189,248,0.08)', border: '1px solid var(--teal-stroke)', padding: '5px 11px', borderRadius: 999 }}>{c.dept}</span>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--on-dark-3)' }}>Early work · NDA</span>
        </div>

        {/* Title */}
        <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '1.12rem', color: 'var(--on-dark)', marginBottom: 14, letterSpacing: '-0.015em', lineHeight: 1.3 }}>{c.title}</h3>

        {/* Problem — the narrative hero */}
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--on-dark-2)', fontSize: '0.9rem', lineHeight: 1.65, flex: 1 }}>{c.problem}</p>

        {/* What was built — quiet box */}
        <div style={{ marginTop: 16, padding: '12px 14px', borderRadius: 10, background: 'rgba(56,189,248,0.04)', border: '1px solid rgba(56,189,248,0.09)' }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 5 }}>What we built</div>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--on-dark-2)', fontSize: '0.85rem', lineHeight: 1.58 }}>{c.built}</p>
        </div>

        {/* Measured outcomes — de-emphasised */}
        <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--glass-stroke)' }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.56rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--on-dark-3)', marginBottom: 10 }}>Measured outcomes</div>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            {c.results.map((r) => (
              <div key={r.l}>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.04em', color: 'var(--on-dark)', lineHeight: 1 }}>{r.v}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.7rem', color: 'var(--on-dark-3)', marginTop: 4 }}>{r.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  return (
    <div className="wm-testgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
      {TESTIMONIALS.map((t, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <GlassCard style={{ padding: 30, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Icon name="quote" size={26} color="var(--teal)" style={{ opacity: 0.7, marginBottom: 16 }} />
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', lineHeight: 1.62, color: 'var(--on-dark)', flex: 1 }}>{t.quote}</p>
            <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid var(--glass-stroke)' }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: 'var(--on-dark)', fontSize: '0.9rem', letterSpacing: '-0.01em' }}>{t.name}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--teal)', fontSize: '0.82rem', marginTop: 4, letterSpacing: '0.01em' }}>{t.role}</div>
            </div>
          </GlassCard>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Method rail (5D) ---------- */
function MethodRail() {
  return (
    <div className="wm-method" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14 }}>
      {METHOD.map((m, i) => (
        <Reveal key={m.n} delay={i * 0.06}>
          <div className="wm-glass" style={{ padding: '26px 20px', height: '100%', position: 'relative' }}>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--teal)', letterSpacing: '0.1em' }}>0{m.n}</div>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--grad-teal)', display: 'grid', placeItems: 'center', margin: '14px 0', boxShadow: '0 8px 28px rgba(56,189,248,0.28)', fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, color: '#04111e', fontSize: '1.1rem', letterSpacing: '-0.02em' }}>{m.n}</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: 'var(--on-dark)', fontSize: '1.05rem', letterSpacing: '-0.01em' }}>{m.t}</div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-2)', fontSize: '0.84rem', marginTop: 6, lineHeight: 1.45 }}>{m.d}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

Object.assign(window, { LogoMarquee, StatsBand, IndustryCard, CaseCard, Testimonials, MethodRail });
