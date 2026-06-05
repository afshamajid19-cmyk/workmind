/* WorkMind Redesign — Home (conversion-optimized, bento, ICP-led) */

function HeroPanel() {
  // A glass "AI ops" preview panel — concrete proof, not decoration.
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
            <div style={{ width: 36, height: 36, borderRadius: 10, display: 'grid', placeItems: 'center', background: 'rgba(75,170,200,0.14)', flexShrink: 0 }}>
              <Icon name="message-square" size={16} color="var(--teal-lt)" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.84rem', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.t}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.74rem', color: 'var(--on-dark-2)' }}>{r.s}</div>
            </div>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'var(--teal)', background: 'rgba(75,170,200,0.1)', padding: '4px 8px', borderRadius: 7, flexShrink: 0 }}>{r.tag}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <div style={{ flex: 1, padding: 14, borderRadius: 13, background: 'linear-gradient(135deg, rgba(75,170,200,0.16), rgba(27,79,138,0.10))', border: '1px solid var(--teal-stroke)' }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: 'var(--teal-lt)' }}><Counter value={92} suffix="%" /></div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: 'var(--on-dark-2)', marginTop: 2 }}>leads contacted &lt; 5 min</div>
        </div>
        <div style={{ flex: 1, padding: 14, borderRadius: 13, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-stroke)' }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#fff' }}><Counter value={18} suffix=" hrs" /></div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: 'var(--on-dark-2)', marginTop: 2 }}>reclaimed / week</div>
        </div>
      </div>
    </div>
  );
}

function Hero({ go }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 168, paddingBottom: 96, minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
      <div className="wm-mesh" />
      <div className="wm-grid-tex" />
      <div className="wm-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="wm-herogrid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Reveal><div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '8px 15px', borderRadius: 999, background: 'var(--glass-fill)', border: '1px solid var(--glass-stroke)', backdropFilter: 'blur(10px)', marginBottom: 26 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--teal)' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: 'var(--on-dark-2)' }}>Full-stack AI &amp; automation consultancy · SA &amp; GCC</span>
            </div></Reveal>
            <Reveal delay={0.08}><h1 className="wm-d1">We audit the leaks<br />&amp; <span className="wm-gtext">10×</span> your<br />workflows.</h1></Reveal>
            <Reveal delay={0.16}><p className="wm-lead" style={{ marginTop: 26, maxWidth: 520 }}>Most firms bolt AI onto broken processes and call it transformation. We do the opposite — assess first, fix the leaks, then automate what actually drives the business.</p></Reveal>
            <Reveal delay={0.24}><div style={{ marginTop: 38, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => go('contact')}>Book a Call <Icon name="arrow-right" size={17} /></Button>
              <Button variant="glass" size="lg" onClick={() => go('cases')}>See the Work</Button>
            </div></Reveal>
            <Reveal delay={0.32}><div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 18, color: 'var(--on-dark-3)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Icon name="shield-check" size={15} color="var(--teal)" /> POPIA &amp; PDPL-aware</span>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--on-dark-3)' }} />
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Icon name="lock" size={15} color="var(--teal)" /> No platform lock-in</span>
            </div></Reveal>
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
        <Reveal><div style={{ textAlign: 'center', fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--on-dark-3)', marginBottom: 28 }}>Trusted across energy, finance, healthcare, property &amp; the public sector</div></Reveal>
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
            <Reveal key={s.n} delay={i * 0.06} style={{ gridColumn: i === 0 ? 'span 6' : 'span 6' }}>
              <GlassCard glow style={{ padding: 34, height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ width: 54, height: 54, borderRadius: 15, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg, rgba(75,170,200,0.2), rgba(27,79,138,0.14))', border: '1px solid var(--teal-stroke)' }}>
                    <Icon name={s.icon} size={26} color="var(--teal-lt)" />
                  </div>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', color: 'var(--on-dark-3)', letterSpacing: '0.08em' }}>{s.n}</span>
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.45rem', color: '#fff', marginTop: 22 }}>{s.title}</h3>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: 'var(--teal)', fontSize: '0.88rem', marginTop: 6 }}>{s.sub}</div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-2)', fontSize: '0.94rem', lineHeight: 1.62, marginTop: 14 }}>{s.body}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
                  {s.points.map((p) => <span key={p} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: 'var(--on-dark-2)', padding: '6px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.04)', border: '1px solid var(--glass-stroke)' }}>{p}</span>)}
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

function StatsSection() {
  return (
    <section className="wm-section">
      <div className="wm-container">
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 48, alignItems: 'center' }} className="wm-statswrap">
          <SectionHead eyebrow="The numbers" title="Outcomes we" accent="measure, not promise." sub="Every engagement opens with an assessment and closes with hard metrics. These are the averages our clients see." maxW={460} />
          <Reveal delay={0.1}><StatsBand /></Reveal>
        </div>
      </div>
    </section>
  );
}

function ClientsTeaser({ go }) {
  return (
    <section className="wm-section" style={{ paddingTop: 0 }}>
      <div className="wm-container">
        <div className="wm-glass" style={{ borderRadius: 'var(--r-lg)', padding: '54px 48px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(120deg, rgba(27,79,138,0.18), rgba(7,14,24,0.2))' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 34 }}>
            <SectionHead eyebrow="Our clients" title="From Fortune 500s to" accent="founders scaling fast." maxW={620} />
            <Button variant="outline" onClick={() => go('clients')}>Explore the wall <Icon name="arrow-right" size={16} /></Button>
          </div>
          <div className="wm-clientmini" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 12 }}>
            {CLIENTS.slice(0, 12).map((c, i) => (
              <Reveal key={c.name} delay={i * 0.03}>
                <div style={{ aspectRatio: '3/2', display: 'grid', placeItems: 'center', borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-stroke)', padding: 10, textAlign: 'center' }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)' }}>{c.name}</span>
                </div>
              </Reveal>
            ))}
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
          <SectionHead eyebrow="Proof" title="Real problems." accent="Hard numbers." maxW={560} />
          <Button variant="ghost" onClick={() => go('cases')}>All case studies <Icon name="arrow-right" size={15} /></Button>
        </div>
        <div className="wm-casegrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {CASES.slice(0, 3).map((c, i) => <CaseCard key={c.title} c={c} delay={i * 0.07} />)}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="wm-section" style={{ paddingTop: 0 }}>
      <div className="wm-container">
        <SectionHead eyebrow="In their words" title="Operators who" accent="stopped firefighting." center maxW={680} />
        <div style={{ marginTop: 52 }}><Testimonials /></div>
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
      <StatsSection />
      <ClientsTeaser go={go} />
      <CasesSection go={go} />
      <TestimonialsSection />
    </>
  );
}

Object.assign(window, { Home });
