/* WorkMind Redesign — Nav + Footer */

function Nav({ route, go }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const sc = document.querySelector('.wm-scroll');
    const onScroll = () => setScrolled((sc ? sc.scrollTop : window.scrollY) > 40);
    onScroll();
    (sc || window).addEventListener('scroll', onScroll, { passive: true });
    return () => (sc || window).removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all var(--t)',
        background: scrolled ? 'rgba(7,14,24,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--glass-stroke)' : 'transparent'}`,
      }}>
        <div className="wm-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 74 }}>
          <a onClick={() => go('home')} style={{ cursor: 'pointer' }}><Logo /></a>
          <div className="wm-navlinks" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {NAV.map((l) => {
              const active = route === l.to;
              return (
                <a key={l.to} onClick={() => go(l.to)} style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer',
                  color: active ? '#fff' : 'var(--on-dark-2)', padding: '8px 14px', borderRadius: 999,
                  background: active ? 'var(--glass-fill-2)' : 'transparent', transition: 'all var(--t-fast)',
                }}>{l.label}</a>
              );
            })}
          </div>
          <div className="wm-navcta" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Button variant="primary" size="sm" onClick={() => go('contact')}>Book a Call <Icon name="arrow-right" size={15} /></Button>
          </div>
          <button className="wm-burger" onClick={() => setOpen(true)} aria-label="Menu" style={{ display: 'none', color: '#fff' }}><Icon name="menu" size={26} /></button>
        </div>
      </nav>
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'var(--ink)', display: 'flex', flexDirection: 'column', padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 50 }}>
            <Logo /><button onClick={() => setOpen(false)} aria-label="Close" style={{ color: '#fff' }}><Icon name="x" size={28} /></button>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 22 }}>
            {NAV.map((l) => <a key={l.to} onClick={() => { go(l.to); setOpen(false); }} style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.9rem', color: '#fff', cursor: 'pointer' }}>{l.label}</a>)}
          </div>
          <Button variant="primary" full onClick={() => { go('contact'); setOpen(false); }}>Book a Call <Icon name="arrow-right" size={16} /></Button>
        </div>
      )}
    </>
  );
}

function Footer({ go }) {
  const col = { fontFamily: 'DM Mono, monospace', fontWeight: 500, color: 'var(--on-dark-3)', textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: '0.68rem', marginBottom: 18 };
  const lk = { display: 'block', fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-2)', fontSize: '0.92rem', marginBottom: 11, cursor: 'pointer', transition: 'color var(--t-fast)' };
  return (
    <footer style={{ background: '#05101b', borderTop: '1px solid var(--glass-stroke)', padding: '80px 0 36px', position: 'relative', overflow: 'hidden' }}>
      <div className="wm-grid-tex" style={{ opacity: 0.4 }} />
      <div className="wm-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="wm-cta-band wm-glass" style={{ padding: '44px 48px', marginBottom: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', borderRadius: 'var(--r-lg)', background: 'linear-gradient(120deg, rgba(27,79,138,0.30), rgba(75,170,200,0.10))' }}>
          <div>
            <h3 className="wm-d2" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>Let's find your <span className="wm-gtext">fit.</span></h3>
            <p className="wm-lead" style={{ marginTop: 10 }}>Give us 30 minutes. We'll show you where AI actually pays off — no pitch, just your business.</p>
          </div>
          <Button variant="primary" size="lg" onClick={() => go('contact')}>Book a Call <Icon name="arrow-right" size={17} /></Button>
        </div>
        <div className="wm-footgrid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <Logo />
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-2)', fontSize: '0.9rem', maxWidth: 250, marginTop: 16, lineHeight: 1.6 }}>We audit the leaks &amp; 10× your workflow efficiency. Assessment-led AI &amp; automation, built for SA &amp; the Gulf.</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {['linkedin', 'twitter', 'mail'].map((s) => <a key={s} style={{ width: 38, height: 38, borderRadius: 10, display: 'grid', placeItems: 'center', background: 'var(--glass-fill)', border: '1px solid var(--glass-stroke)', cursor: 'pointer' }}><Icon name={s} size={16} color="var(--on-dark-2)" /></a>)}
            </div>
          </div>
          <div><div style={col}>Company</div>{NAV.map((l) => <a key={l.to} style={lk} onClick={() => go(l.to)}>{l.label}</a>)}<a style={lk} onClick={() => go('contact')}>Contact</a></div>
          <div><div style={col}>Solutions</div>{['Professional Services', 'Property', 'Construction', 'M365 / Copilot', 'Concierge'].map((p) => <span key={p} style={lk}>{p}</span>)}</div>
          <div><div style={col}>Get Started</div><a style={{ ...lk, color: 'var(--teal)', fontWeight: 600 }} onClick={() => go('contact')}>Book a Call →</a><span style={lk}>solutions@theworkmind.ai</span><span style={lk}>theworkmind.ai</span></div>
        </div>
        <div style={{ marginTop: 56, paddingTop: 26, borderTop: '1px solid var(--glass-stroke)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--on-dark-3)', fontSize: '0.8rem' }}>© 2026 TheWorkMind.ai. All rights reserved.</span>
          <span style={{ fontFamily: 'DM Mono, monospace', color: 'var(--on-dark-3)', fontSize: '0.76rem', letterSpacing: '0.1em' }}>BUILT IN THE UAE · DELIVERED GLOBALLY</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });
