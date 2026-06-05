/* WorkMind Redesign — Inner pages: Solutions, Services, Clients, Cases, About, Contact */

function PageHero({ eyebrow, title, accent, sub, children }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 168, paddingBottom: 80 }}>
      <div className="wm-mesh" />
      <div className="wm-grid-tex" />
      <div className="wm-container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.06}><h1 className="wm-d1" style={{ marginTop: 18, maxWidth: 980 }}>{title} {accent && <span className="wm-gtext">{accent}</span>}</h1></Reveal>
        {sub && <Reveal delay={0.12}><p className="wm-lead" style={{ marginTop: 24, maxWidth: 640 }}>{sub}</p></Reveal>}
        {children}
      </div>
    </section>
  );
}

/* ===================== SOLUTIONS (industry-led) ===================== */
function Solutions({ go }) {
  return (
    <>
      <PageHero eyebrow="Solutions" title="We solve the bottleneck" accent="your industry actually has." sub="Not generic AI. The specific leak your operation runs into — and the system that closes it." />
      <section className="wm-section" style={{ paddingTop: 24 }}>
        <div className="wm-container" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.id} delay={i * 0.04}>
              <GlassCard glow style={{ padding: 0, overflow: 'hidden' }}>
                <div className="wm-solrow" style={{ display: 'grid', gridTemplateColumns: '64px 1.4fr 1fr 0.7fr', gap: 28, alignItems: 'center', padding: '30px 34px' }}>
                  <div style={{ width: 64, height: 64, borderRadius: 16, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg, rgba(75,170,200,0.22), rgba(27,79,138,0.16))', border: '1px solid var(--teal-stroke)' }}>
                    <Icon name={ind.icon} size={28} color="var(--teal-lt)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: 'var(--teal)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 7 }}>{ind.tag}</div>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '1.18rem', letterSpacing: '-0.01em', color: 'var(--on-dark)' }}>{ind.name}</h3>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-2)', fontSize: '0.92rem', lineHeight: 1.55, marginTop: 8 }}>{ind.pain}</p>
                  </div>
                  <div style={{ borderLeft: '1px solid var(--glass-stroke)', paddingLeft: 24 }}>
                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.66rem', color: 'var(--on-dark-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>What we build</div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark)', fontSize: '0.92rem', lineHeight: 1.55 }}>{ind.fix}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '1.6rem', letterSpacing: '-0.04em', color: 'var(--teal)', lineHeight: 1 }}>{ind.metric.v}</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.76rem', color: 'var(--on-dark-2)', marginTop: 6 }}>{ind.metric.d}</div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

/* ===================== SERVICES ===================== */
function Services({ go }) {
  return (
    <>
      <PageHero eyebrow="Services" title="Intelligent automation starts with" accent="honest assessment." sub="We measure before we recommend, build where impact is proven, and stay accountable to the outcome." />
      <section className="wm-section" style={{ paddingTop: 24 }}>
        <div className="wm-container">
          <div className="wm-bento">
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06} style={{ gridColumn: 'span 6' }}>
                <GlassCard glow style={{ padding: 36, height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ width: 56, height: 56, borderRadius: 15, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg, rgba(75,170,200,0.2), rgba(27,79,138,0.14))', border: '1px solid var(--teal-stroke)' }}><Icon name={s.icon} size={27} color="var(--teal-lt)" /></div>
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.82rem', color: 'var(--on-dark-3)' }}>{s.n}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '1.22rem', letterSpacing: '-0.01em', lineHeight: 1.3, color: 'var(--on-dark)', marginTop: 22 }}>{s.title}</h3>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: 'var(--teal)', fontSize: '0.9rem', marginTop: 6 }}>{s.sub}</div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-2)', fontSize: '0.96rem', lineHeight: 1.62, marginTop: 16 }}>{s.body}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0 0', display: 'flex', flexDirection: 'column', gap: 11 }}>
                    {s.points.map((p) => <li key={p} style={{ display: 'flex', gap: 11, alignItems: 'center', fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark)', fontSize: '0.9rem' }}><Icon name="check" size={16} color="var(--teal)" /> {p}</li>)}
                  </ul>
                </GlassCard>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 52 }}>
            <SectionHead eyebrow="The 5D method" title="How every engagement" accent="runs." center maxW={620} />
            <div style={{ marginTop: 44 }}><MethodRail /></div>
          </div>
          <div style={{ marginTop: 56 }}>
            <SectionHead eyebrow="Why WorkMind" title="The" accent="difference." center maxW={620} />
            <div className="wm-diffgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginTop: 44 }}>
              {DIFFS.map((d, i) => (
                <Reveal key={d.t} delay={i * 0.06}>
                  <GlassCard style={{ padding: 26, height: '100%' }}>
                    <Icon name={d.icon} size={26} color="var(--teal)" />
                    <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em', color: 'var(--on-dark)', marginTop: 16 }}>{d.t}</h4>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-2)', fontSize: '0.88rem', lineHeight: 1.55, marginTop: 9 }}>{d.d}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===================== CLIENTS (high-priority centerpiece) ===================== */
function TrustBadges() {
  const badges = [
    { icon: 'shield-check', t: 'POPIA Aligned' },
    { icon: 'lock', t: 'PDPL Aware' },
    { icon: 'badge-check', t: 'Microsoft Partner' },
    { icon: 'file-check', t: 'Audit Trails' },
    { icon: 'globe-2', t: 'SA + GCC' },
  ];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
      {badges.map((b) => (
        <div key={b.t} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '11px 18px', borderRadius: 999, background: 'var(--glass-fill)', border: '1px solid var(--glass-stroke)', backdropFilter: 'blur(10px)' }}>
          <Icon name={b.icon} size={16} color="var(--teal)" />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.84rem', color: 'var(--on-dark)' }}>{b.t}</span>
        </div>
      ))}
    </div>
  );
}

function Clients({ go }) {
  const [sector, setSector] = useState('All');
  const filtered = sector === 'All' ? CLIENTS : CLIENTS.filter((c) => c.sector === sector);
  return (
    <>
      <PageHero eyebrow="Our clients" title="Credibility you can" accent="point to." sub="From Fortune 500s and national bodies to founders scaling their first real system — here's who trusts WorkMind, and what changed when they did.">
        <Reveal delay={0.2} style={{ marginTop: 40 }}>
          <div className="wm-credband" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {[{ v: 50, suffix: '+', l: 'Engagements delivered' }, { v: 6, suffix: '', l: 'Industries served' }, { v: 2, prefix: '', suffix: ' regions', l: 'SA + GCC' }, { v: 25, suffix: '%', l: 'Avg. cost cut' }].map((s, i) => (
              <div key={i} className="wm-glass" style={{ padding: '26px 22px' }}>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,3.2vw,2.8rem)', letterSpacing: '-0.04em', color: 'var(--teal)', lineHeight: 1 }}><Counter value={s.v} prefix={s.prefix || ''} suffix={s.suffix || ''} /></div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: 'var(--on-dark-2)', marginTop: 8 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </PageHero>

      <section className="wm-section" style={{ paddingTop: 8 }}>
        <div className="wm-container">
          {/* Filterable wall */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 30 }}>
            {SECTORS.map((s) => <Pill key={s} active={sector === s} onClick={() => setSector(s)}>{s}</Pill>)}
          </div>
          <div className="wm-wall" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 14 }}>
            {filtered.map((c, i) => (
              <div key={c.name} className="wm-glass" style={{ padding: 0, overflow: 'hidden', transition: 'border-color var(--t)' }}>
                <image-slot id={`client-${c.name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`} shape="rect" placeholder={c.name} style={{ display: 'block', width: '100%', aspectRatio: '3 / 2' }}></image-slot>
                <div style={{ padding: '10px 12px', borderTop: '1px solid var(--glass-stroke)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '0.8rem', letterSpacing: '-0.005em', color: 'var(--on-dark)' }}>{c.name}</span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: 'var(--on-dark-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{c.sector}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: 'var(--on-dark-3)', marginTop: 22 }}>
            <Icon name="image" size={14} color="var(--on-dark-3)" style={{ display: 'inline', verticalAlign: '-2px', marginRight: 6 }} />
            Drag a logo onto any tile to drop it in — it persists automatically.
          </p>

          <div style={{ marginTop: 64 }}><TrustBadges /></div>

          <div style={{ marginTop: 72 }}>
            <SectionHead eyebrow="In their words" title="What changed" accent="for them." center maxW={620} />
            <div style={{ marginTop: 48 }}><Testimonials /></div>
          </div>

          <div style={{ marginTop: 72 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 18, marginBottom: 44 }}>
              <SectionHead eyebrow="Receipts" title="Their results," accent="in numbers." maxW={520} />
              <Button variant="ghost" onClick={() => go('cases')}>All case studies <Icon name="arrow-right" size={15} /></Button>
            </div>
            <div className="wm-casegrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {CASES.slice(0, 3).map((c, i) => <CaseCard key={c.title} c={c} delay={i * 0.06} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===================== CASE STUDIES ===================== */
function Cases({ go }) {
  const [f, setF] = useState('all');
  const tabs = [{ id: 'all', label: 'All' }, ...INDUSTRIES.map((i) => ({ id: i.id, label: i.name }))];
  const list = f === 'all' ? CASES : CASES.filter((c) => c.industry === f);
  return (
    <>
      <PageHero eyebrow="Case studies" title="Real problems." accent="Hard numbers." sub="Every engagement opens with an assessment and closes with metrics. No vanity stats — just what moved." />
      <section className="wm-section" style={{ paddingTop: 24 }}>
        <div className="wm-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
            {tabs.map((t) => <Pill key={t.id} active={f === t.id} onClick={() => setF(t.id)}>{t.label}</Pill>)}
          </div>
          <div className="wm-casegrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {list.map((c, i) => <CaseCard key={c.title} c={c} delay={i * 0.05} />)}
          </div>
        </div>
      </section>
    </>
  );
}

/* ===================== ABOUT ===================== */
function About({ go }) {
  return (
    <>
      <PageHero eyebrow="About" title="Built by operators." accent="Not just technologists." sub="We've run the businesses we now fix. That's why we assess before we automate — and why we refuse to bolt AI onto a broken process." />
      <section className="wm-section" style={{ paddingTop: 24 }}>
        <div className="wm-container">
          <div className="wm-aboutgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <Reveal>
              <GlassCard style={{ padding: 40, height: '100%' }}>
                <h3 className="wm-h3" style={{ color: '#fff', fontSize: '1.5rem' }}>Our belief</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-2)', fontSize: '1rem', lineHeight: 1.7, marginTop: 16 }}>Most companies bolt AI onto broken processes and call it transformation. We do the opposite: assess first, fix the leaks, then automate what actually drives the business — built around your workflows, not a disruptive replacement.</p>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.08}>
              <GlassCard glow style={{ padding: 40, height: '100%', background: 'linear-gradient(135deg, rgba(27,79,138,0.2), rgba(7,14,24,0.1))' }}>
                <h3 className="wm-h3" style={{ color: '#fff', fontSize: '1.5rem' }}>Where we work</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-2)', fontSize: '1rem', lineHeight: 1.7, marginTop: 16 }}>Rooted in South Africa and the Gulf — fluent in WhatsApp-first operations, M365 tenants barely switched on, and the realities of POPIA, PDPL, Emiratisation and Saudisation. Built in the UAE. Delivered globally.</p>
              </GlassCard>
            </Reveal>
          </div>
          <div style={{ marginTop: 40 }}><StatsBand /></div>
          <div style={{ marginTop: 56 }}>
            <SectionHead eyebrow="Why WorkMind" title="What sets us" accent="apart." center maxW={600} />
            <div className="wm-diffgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginTop: 44 }}>
              {DIFFS.map((d, i) => (
                <Reveal key={d.t} delay={i * 0.06}>
                  <GlassCard style={{ padding: 26, height: '100%' }}>
                    <Icon name={d.icon} size={26} color="var(--teal)" />
                    <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em', color: 'var(--on-dark)', marginTop: 16 }}>{d.t}</h4>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-2)', fontSize: '0.88rem', lineHeight: 1.55, marginTop: 9 }}>{d.d}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===================== CONTACT ===================== */
function Contact({ go }) {
  const [sent, setSent] = useState(false);
  const Field = ({ label, name, type = 'text', required, textarea }) => {
    const [foc, setFoc] = useState(false);
    const base = { background: 'rgba(255,255,255,0.04)', border: `1px solid ${foc ? 'var(--teal)' : 'var(--glass-stroke)'}`, color: '#fff', fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', padding: '14px 16px', borderRadius: 12, width: '100%', outline: 'none', boxShadow: foc ? '0 0 0 3px rgba(75,170,200,0.16)' : 'none', transition: 'all var(--t-fast)' };
    return (
      <label style={{ display: 'block' }}>
        <span style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, color: 'var(--on-dark-2)', fontSize: '0.84rem', marginBottom: 8 }}>{label} {required && <span style={{ color: 'var(--teal)' }}>*</span>}</span>
        {textarea ? <textarea name={name} rows={4} onFocus={() => setFoc(true)} onBlur={() => setFoc(false)} style={{ ...base, resize: 'vertical' }} /> : <input name={name} type={type} required={required} onFocus={() => setFoc(true)} onBlur={() => setFoc(false)} style={base} />}
      </label>
    );
  };
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 168, paddingBottom: 120, minHeight: '100vh' }}>
      <div className="wm-mesh" />
      <div className="wm-grid-tex" />
      <div className="wm-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="wm-contactgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <Reveal><Eyebrow>Contact</Eyebrow></Reveal>
            <Reveal delay={0.06}><h1 className="wm-d1" style={{ marginTop: 18 }}>Let's find your <span className="wm-gtext">fit.</span></h1></Reveal>
            <Reveal delay={0.12}><p className="wm-lead" style={{ marginTop: 22, maxWidth: 440 }}>Give us 30 minutes. We'll show you where AI actually pays off. No pitch — just your business.</p></Reveal>
            <Reveal delay={0.18}>
              <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[{ icon: 'mail', l: 'solutions@theworkmind.ai' }, { icon: 'globe', l: 'theworkmind.ai' }, { icon: 'message-square', l: 'WhatsApp — fastest response' }].map((x) => (
                  <div key={x.l} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, display: 'grid', placeItems: 'center', background: 'var(--glass-fill)', border: '1px solid var(--glass-stroke)' }}><Icon name={x.icon} size={18} color="var(--teal)" /></div>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark)', fontSize: '0.98rem' }}>{x.l}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24} style={{ marginTop: 36 }}><TrustBadges /></Reveal>
          </div>
          <Reveal delay={0.1}>
            <GlassCard style={{ padding: 36 }}>
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Field label="Name" required name="name" />
                <Field label="Company" name="company" />
                <Field label="Email" type="email" required name="email" />
                <Field label="What's the bottleneck?" name="message" textarea />
                <Button variant="primary" full size="lg" style={{ marginTop: 4 }}>Send <Icon name="arrow-right" size={16} /></Button>
                {sent && <div style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--teal)', fontWeight: 600, textAlign: 'center', background: 'rgba(75,170,200,0.12)', border: '1px solid var(--teal-stroke)', borderRadius: 12, padding: 15 }}>Thanks — we'll be in touch within 24hrs.</div>}
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Solutions, Services, Clients, Cases, About, Contact, TrustBadges });
