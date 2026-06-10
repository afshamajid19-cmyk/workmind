/* WorkMind Redesign — Home (conversion-optimized, bento, ICP-led) */

function HeroPanel() {
  return (
    <div className="wm-glass" style={{ padding: 22, borderRadius: 'var(--r-lg)', boxShadow: 'var(--e2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 10px #4ADE80' }} />
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--on-dark-2)', letterSpacing: '0.06em' }}>LEAD TRIAGE · LIVE</span>
        </div>
        <Icon name="more-horizontal" size={18} color="var(--on-dark-3)" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { ch: 'WhatsApp', t: 'New enquiry — Sandton 3-bed', s: 'Qualified · viewing booked', tag: '0:42s', ok: true },
          { ch: 'Email', t: 'Proposal follow-up #2 sent', s: 'Auto-sequence · no human touch', tag: 'auto', ok: true },
          { ch: 'M365', t: 'Variation order logged → CRM', s: 'Progress claim drafted', tag: 'synced', ok: true },
        ].map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '13px 15px', borderRadius: 13, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-stroke)' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, display: 'grid', placeItems: 'center', background: 'rgba(56,189,248,0.12)', flexShrink: 0 }}>
              <Icon name="message-square" size={16} color="var(--teal-lt)" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.84rem', color: 'var(--on-dark)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.t}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.74rem', color: 'var(--on-dark-2)' }}>{r.s}</div>
            </div>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'var(--teal)', background: 'rgba(56,189,248,0.1)', padding: '4px 8px', borderRadius: 7, flexShrink: 0 }}>{r.tag}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <div style={{ flex: 1, padding: 14, borderRadius: 13, background: 'linear-gradient(135deg, rgba(56,189,248,0.14), rgba(27,79,138,0.10))', border: '1px solid var(--teal-stroke)' }}>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '1.7rem', letterSpacing: '-0.04em', color: 'var(--teal-lt)' }}><Counter value={92} suffix="%" /></div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: 'var(--on-dark-2)', marginTop: 2 }}>leads contacted &lt; 5 min</div>
        </div>
        <div style={{ flex: 1, padding: 14, borderRadius: 13, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-stroke)' }}>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '1.7rem', letterSpacing: '-0.04em', color: 'var(--on-dark)' }}><Counter value={18} suffix=" hrs" /></div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: 'var(--on-dark-2)', marginTop: 2 }}>reclaimed / week</div>
        </div>
      </div>
    </div>
  );
}

function Hero({ go }) {
  return (
    <section className="wm-hero-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
      {/* Animated atmospheric blobs */}
      <div className="wm-blob wm-blob-a" />
      <div className="wm-blob wm-blob-b" />
      <div className="wm-blob wm-blob-c" />
      <div className="wm-mesh" />
      <div className="wm-grid-tex" />
      <div className="wm-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="wm-herogrid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Reveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '8px 15px', borderRadius: 999, background: 'var(--glass-fill)', border: '1px solid var(--glass-stroke)', backdropFilter: 'blur(10px)', marginBottom: 26 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--teal)' }} />
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: 'var(--on-dark-2)', letterSpacing: '0.01em' }}>Full-stack AI &amp; automation consultancy · SA &amp; GCC</span>
              </div>
            </Reveal>
            {/* Staggered line-by-line hero reveal */}
            <h1 className="wm-d1" style={{ overflow: 'hidden' }}>
              <Reveal delay={0.06} as="span" style={{ display: 'block' }}>We audit the leaks</Reveal>
              <Reveal delay={0.14} as="span" style={{ display: 'block' }}>&amp; <span className="wm-gtext">10×</span> your</Reveal>
              <Reveal delay={0.22} as="span" style={{ display: 'block' }}>workflows.</Reveal>
            </h1>
            <Reveal delay={0.3}>
              <p className="wm-lead" style={{ marginTop: 28, maxWidth: 520 }}>Most firms bolt AI onto broken processes and call it transformation. We do the opposite — assess first, fix the leaks, then automate what actually drives the business.</p>
            </Reveal>
            <Reveal delay={0.38}>
              <div style={{ marginTop: 38, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Button variant="primary" size="lg" onClick={() => go('contact')}>Book a Call <Icon name="arrow-right" size={17} /></Button>
                <Button variant="glass" size="lg" onClick={() => go('cases')}>See the Work</Button>
              </div>
            </Reveal>
            <Reveal delay={0.46}>
              <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 18, color: 'var(--on-dark-3)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', letterSpacing: '0.01em' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Icon name="shield-check" size={15} color="var(--teal)" /> POPIA &amp; PDPL-aware</span>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--on-dark-3)' }} />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Icon name="lock" size={15} color="var(--teal)" /> No platform lock-in</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="wm-heropanel"><HeroPanel /></Reveal>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section style={{ padding: '12px 0 56px' }}>
      <div className="wm-container">
        <Reveal>
          <div style={{ textAlign: 'center', fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--on-dark-3)', marginBottom: 28 }}>
            Trusted across energy, finance, healthcare, property &amp; the public sector
          </div>
        </Reveal>
        <LogoMarquee />
      </div>
    </section>
  );
}

function ServicesBento({ go }) {
  return (
    <section className="wm-section">
      <div className="wm-container">
        <SectionHead eyebrow="What we do" title="Four ways we" accent="earn the ROI." sub="Assessment-led from day one. We measure before we recommend, build only where impact is proven, and stay accountable to outcomes." />
        <div className="wm-bento" style={{ marginTop: 56 }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} style={{ gridColumn: 'span 6' }}>
              <GlassCard glow style={{ padding: 34, height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ width: 54, height: 54, borderRadius: 15, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg, rgba(56,189,248,0.18), rgba(27,79,138,0.14))', border: '1px solid var(--teal-stroke)' }}>
                    <Icon name={s.icon} size={26} color="var(--teal-lt)" />
                  </div>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', color: 'var(--on-dark-3)', letterSpacing: '0.08em' }}>{s.n}</span>
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '1.18rem', letterSpacing: '-0.01em', lineHeight: 1.3, marginTop: 22, color: 'var(--on-dark)' }}>{s.title}</h3>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: 'var(--teal)', fontSize: '0.88rem', marginTop: 8, letterSpacing: '0.01em' }}>{s.sub}</div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-2)', fontSize: '0.94rem', lineHeight: 1.65, marginTop: 14, letterSpacing: '0.01em' }}>{s.body}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
                  {s.points.map((p) => <span key={p} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: 'var(--on-dark-2)', padding: '6px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.04)', border: '1px solid var(--glass-stroke)', letterSpacing: '0.01em' }}>{p}</span>)}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section className="wm-section" style={{ paddingTop: 0 }}>
      <div className="wm-container">
        <SectionHead eyebrow="The 5D method" title="A repeatable path from" accent="chaos to systems." center maxW={760} />
        <div style={{ marginTop: 52 }}><MethodRail /></div>
      </div>
    </section>
  );
}

function IndustriesSection({ go }) {
  return (
    <section className="wm-section" style={{ background: 'var(--ink-2)', borderTop: '1px solid var(--glass-stroke)', borderBottom: '1px solid var(--glass-stroke)' }}>
      <div className="wm-mesh" style={{ opacity: 0.5 }} />
      <div className="wm-container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead eyebrow="Built for your reality" title="Six operations we" accent="know cold." sub="We don't sell generic AI. We solve the specific bottleneck your industry runs into — usually buried in a WhatsApp thread or an unconfigured M365 tenant." />
        <div className="wm-indgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 54 }}>
          {INDUSTRIES.map((ind, i) => <IndustryCard key={ind.id} ind={ind} delay={i * 0.05} onClick={() => go('solutions')} />)}
        </div>
      </div>
    </section>
  );
}


/* ---------- Clients section — marquee redesign with glassmorphism cards ---------- */
function ClientCard({ client }) {
  const [h, setH] = useState(false);
  return (
    <div
      className="wm-client-card"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        borderColor: h ? 'rgba(56,189,248,0.32)' : 'rgba(255,255,255,0.10)',
        transform: h ? 'translateY(-4px)' : 'none',
        boxShadow: h
          ? '0 0 0 1px rgba(56,189,248,0.20), 0 20px 40px rgba(0,0,0,0.38)'
          : '0 4px 16px rgba(0,0,0,0.22)',
      }}
    >
      <span style={{
        fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.88rem',
        color: h ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.68)',
        textAlign: 'center', transition: 'color 0.25s ease',
        letterSpacing: '0.01em', lineHeight: 1.3,
      }}>{client.name}</span>
    </div>
  );
}

function ClientsTeaser() {
  const row1 = [...CLIENTS.slice(0, 9),  ...CLIENTS.slice(0, 9)];
  const row2 = [...CLIENTS.slice(9, 18), ...CLIENTS.slice(9, 18)];
  const maskStyle = {
    maskImage: 'linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
    overflow: 'hidden',
  };
  return (
    <section className="wm-section" style={{ paddingTop: 0 }}>
      <div className="wm-container">
        <div className="wm-glass" style={{ borderRadius: 'var(--r-lg)', padding: '54px 48px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(120deg, rgba(27,79,138,0.15), rgba(5,13,26,0.22))' }}>
          <div className="wm-mesh" style={{ opacity: 0.3 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Reveal>
              <SectionHead eyebrow="Our clients" title="From Fortune 500s to" accent="founders scaling fast." center maxW={680} />
            </Reveal>
            {/* Row 1 — scrolls left */}
            <div style={{ marginTop: 42, ...maskStyle }}>
              <div className="wm-clients-row-ltr">
                {row1.map((c, i) => <ClientCard key={i} client={c} />)}
              </div>
            </div>
            {/* Row 2 — scrolls right */}
            <div style={{ marginTop: 14, ...maskStyle }}>
              <div className="wm-clients-row-rtl">
                {row2.map((c, i) => <ClientCard key={i} client={c} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CasesSection({ go }) {
  return (
    <section className="wm-section" style={{ paddingTop: 0 }}>
      <div className="wm-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 48 }}>
          <SectionHead eyebrow="The work" title="Problems we've been" accent="called in to solve." sub="Every client is anonymised under NDA. We share these to show how we think — not to inflate a track record." maxW={580} />
          <Button variant="ghost" onClick={() => go('cases')}>See the full work <Icon name="arrow-right" size={15} /></Button>
        </div>
        <div className="wm-casegrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {CASES.slice(0, 3).map((c, i) => <CaseCard key={c.title} c={c} delay={i * 0.07} />)}
        </div>
      </div>
    </section>
  );
}


function Home({ go }) {
  return (
    <>
      <Hero go={go} />
      <TrustStrip />
      <ServicesBento go={go} />
      <MethodSection />
      <IndustriesSection go={go} />
      <ClientsTeaser />
      <CasesSection go={go} />
    </>
  );
}

Object.assign(window, { Home });
