/* WorkMind Redesign — App shell / router */
function App() {
  const [route, setRoute] = useState('home');
  const scrollRef = useRef(null);
  const go = useCallback((r) => { setRoute(r); if (scrollRef.current) scrollRef.current.scrollTop = 0; }, []);
  const pages = { home: Home, solutions: Solutions, services: Services, cases: Cases, about: About, contact: Contact };
  const Page = pages[route] || Home;
  return (
    <div ref={scrollRef} className="wm-scroll" style={{ position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden', background: 'var(--ink)' }}>
      <Nav route={route} go={go} />
      <main key={route}><Page go={go} /></main>
      <Footer go={go} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
