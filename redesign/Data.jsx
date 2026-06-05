/* WorkMind Redesign — Content & data (tuned to the 6 ICP profiles, SA + GCC) */

const NAV = [
  { to: 'solutions', label: 'Solutions' },
  { to: 'services', label: 'Services' },
  { to: 'clients', label: 'Clients' },
  { to: 'cases', label: 'Case Studies' },
  { to: 'about', label: 'About' },
];

/* Industry-led solutions — mapped to the ICP profiles */
const INDUSTRIES = [
  { id: 'prof', icon: 'briefcase', name: 'Professional Services', tag: 'Consulting · Legal · Finance · Recruitment',
    pain: 'Admin is swallowing billable hours and the senior partner is the bottleneck for intake, proposals and follow-up.',
    fix: 'WhatsApp lead capture, proposal templates and client onboarding flows that respond in seconds, not days.',
    metric: { v: 'Billable hrs', d: 'reclaimed from admin' } },
  { id: 'property', icon: 'building-2', name: 'Property & Real Estate', tag: 'Agencies · Brokers · STR operators',
    pain: 'High lead volume, terrible response time — Property24, Airbnb and WhatsApp enquiries get lost between portal checks.',
    fix: 'Real-time lead routing and WhatsApp response systems that triage every enquiry the moment it lands.',
    metric: { v: '< 60s', d: 'first-response time' } },
  { id: 'construction', icon: 'hard-hat', name: 'Construction & Contracting', tag: 'Contractors · QS · Subcontractors',
    pain: 'Everything runs on WhatsApp — job updates, variations, site check-ins — and nothing is tracked. Cash collection lags.',
    fix: 'Progress-claim automation, WhatsApp-to-CRM workflows and quote/invoice tracking that close the cash gap.',
    metric: { v: 'Faster', d: 'cash collection' } },
  { id: 'gcc', icon: 'layout-grid', name: 'M365 & Copilot (GCC)', tag: 'UAE · KSA mid-market',
    pain: 'Microsoft 365 deployed, but utilisation sits below 20%. Copilot licences bought and never configured.',
    fix: 'Copilot activation, Power Automate workflows and department-level AI agents that finally earn the licence cost.',
    metric: { v: '< 20% → live', d: 'M365 utilisation' } },
  { id: 'concierge', icon: 'gem', name: 'Premium & Concierge', tag: 'Hospitality · Luxury · Lifestyle',
    pain: 'High-touch relationships across WhatsApp with zero process — growth is breaking the white-glove experience.',
    fix: 'Branded WhatsApp flows and client-update systems that protect the brand: no dropped requests, human voice intact.',
    metric: { v: 'Zero', d: 'dropped requests' } },
  { id: 'founder', icon: 'rocket', name: 'Scaling Founders', tag: '15–250 staff · $2M–$75M',
    pain: 'The business works because of you, not your systems. Knowledge lives in WhatsApp threads and people\u2019s heads.',
    fix: 'An AI readiness sprint that diagnoses the real bottleneck, then builds the system — so growth stops depending on you.',
    metric: { v: 'Systems', d: 'that run without you' } },
];

/* Core services — the delivery model */
const SERVICES = [
  { n: '01', icon: 'radar', title: 'AI Readiness Assessment', sub: 'We measure before we recommend',
    body: 'Eight structured lenses map where AI actually fits your operation. You leave with a scoped plan, ROI model and priority sequence — clarity before commitment.',
    points: ['8-lens operational gap analysis', 'Priority matrix + ROI model', 'Execution roadmap delivered first'] },
  { n: '02', icon: 'workflow', title: 'Workflow Automation', sub: 'We build where impact is proven',
    body: 'WhatsApp, M365, Power Automate and custom agents — wired into the way your team already works. Delivered with full documentation and handover.',
    points: ['WhatsApp & lead-response systems', 'M365 / Copilot activation', 'Department-level AI agents'] },
  { n: '03', icon: 'blocks', title: 'Custom AI Builds', sub: "We build what doesn't exist yet",
    body: 'When off-the-shelf doesn\u2019t fit your reality, we design and ship bespoke decision architectures end-to-end — scoped to your operating model.',
    points: ['Bespoke decision architectures', 'End-to-end build & validation', 'Designed around your workflows'] },
  { n: '04', icon: 'life-buoy', title: 'Systems Retainer', sub: 'We stay accountable to outcomes',
    body: 'Ongoing optimisation, monitoring and new automations as you scale. The system keeps improving — and stays owned by you, never locked to us.',
    points: ['Continuous optimisation', 'Monitoring & support', 'No platform lock-in'] },
];

/* The 5D delivery method */
const METHOD = [
  { n: 1, t: 'Discover', d: 'Scoped assessment plan' },
  { n: 2, t: 'Define', d: 'Goals + execution path' },
  { n: 3, t: 'Design', d: 'Solution architecture' },
  { n: 4, t: 'Develop', d: 'Build, test + validate' },
  { n: 5, t: 'Drive', d: 'Go live, monitor + scale' },
];

/* Differentiators */
const DIFFS = [
  { icon: 'clipboard-check', t: 'Assessment-Led', d: 'Process-first discovery before we recommend a single automation. Quantifiable ROI, every time.' },
  { icon: 'shield-check', t: 'Trust & Safety First', d: 'POPIA & PDPL-aware design, enterprise-grade data handling, transparent audit trails.' },
  { icon: 'layers', t: 'Vendor Agnostic', d: 'Flexible integrations, scalable architecture, and zero forced platform lock-in.' },
  { icon: 'globe-2', t: 'SA + GCC Fluent', d: 'Built for South African and Gulf operating realities — from WhatsApp-first ops to Emiratisation.' },
];

/* Client wall — names carried from the repo; logos drop in via <image-slot> */
const CLIENTS = [
  { name: 'Aramco', sector: 'Energy', tier: 1 },
  { name: 'Morgan Stanley', sector: 'Finance', tier: 1 },
  { name: 'CHUBB', sector: 'Insurance', tier: 1 },
  { name: 'PageGroup', sector: 'Recruitment', tier: 1 },
  { name: 'HBL', sector: 'Finance', tier: 1 },
  { name: 'Ministry of Health', sector: 'Public', tier: 2 },
  { name: 'McKesson', sector: 'Healthcare', tier: 2 },
  { name: 'CGI', sector: 'Technology', tier: 2 },
  { name: 'NBO', sector: 'Finance', tier: 2 },
  { name: 'Booking Zone', sector: 'Property', tier: 2 },
  { name: 'GEMS Education', sector: 'Education', tier: 3 },
  { name: 'Pure Health', sector: 'Healthcare', tier: 3 },
  { name: 'SolarHub', sector: 'Energy', tier: 3 },
  { name: 'NEXT Farming', sector: 'Agritech', tier: 3 },
  { name: 'Gulf Energy Services', sector: 'Energy', tier: 3 },
  { name: 'Takaful', sector: 'Insurance', tier: 3 },
  { name: 'Anthology', sector: 'Education', tier: 3 },
  { name: 'TaageerFinance', sector: 'Finance', tier: 3 },
];
const SECTORS = ['All', 'Finance', 'Energy', 'Healthcare', 'Property', 'Education', 'Public'];

/* Case studies */
const CASES = [
  { dept: 'Professional Services', title: 'WhatsApp Lead Engine', industry: 'prof',
    problem: 'A recruitment firm was losing placements to faster-responding competitors — enquiries sat unanswered for hours.',
    built: 'WhatsApp lead capture wired to instant triage, auto-qualification and follow-up sequences, synced to their CRM.',
    results: [{ v: '< 60s', l: 'First response' }, { v: '3.4×', l: 'More qualified calls' }, { v: '£0', l: 'New tooling cost' }] },
  { dept: 'Operations · GCC', title: 'M365 Copilot Activation', industry: 'gcc',
    problem: 'A 200-person UAE firm paid for 300+ M365 licences but used under 20% of the platform — invisible waste everywhere.',
    built: 'Full capability audit, then 14 targeted automations across SharePoint, Power Automate, Teams and Outlook.',
    results: [{ v: '14', l: 'Automations · 6 depts' }, { v: '18 hrs', l: 'Reclaimed / week' }, { v: '£0', l: 'Extra licensing' }] },
  { dept: 'Property', title: 'Real-Time Lead Routing', industry: 'property',
    problem: 'A property group with high lead volume checked portals every few hours — Property24 and Airbnb enquiries went cold.',
    built: 'Always-on routing that triages every enquiry the moment it lands and books viewings without an agent touching it.',
    results: [{ v: '92%', l: 'Leads contacted < 5min' }, { v: '+27%', l: 'Viewing bookings' }, { v: '24/7', l: 'Coverage' }] },
  { dept: 'Construction', title: 'Progress-Claim Automation', industry: 'construction',
    problem: 'A contracting firm ran variations and claims on WhatsApp — nothing tracked, cash collection chronically delayed.',
    built: 'WhatsApp-to-CRM workflow capturing site updates, with automated progress claims and quote/invoice tracking.',
    results: [{ v: '11 days', l: 'Faster cash collection' }, { v: '100%', l: 'Claims tracked' }, { v: '0', l: 'Lost variations' }] },
  { dept: 'Premium · Concierge', title: 'White-Glove Ops', industry: 'concierge',
    problem: 'A luxury concierge feared automation would feel cheap — yet growth was breaking the white-glove experience.',
    built: 'Branded WhatsApp flows, vendor coordination and client-update systems that protect the human voice.',
    results: [{ v: 'Zero', l: 'Dropped requests' }, { v: '2.1×', l: 'Client capacity' }, { v: '100%', l: 'On-brand tone' }] },
  { dept: 'Scaling Founder', title: 'AI Readiness Sprint', industry: 'founder',
    problem: 'A founder hit a ceiling — the business only worked because of them, and key knowledge lived in people\u2019s heads.',
    built: 'A two-week readiness sprint diagnosing the true bottleneck, then a phased build of the systems behind it.',
    results: [{ v: '8 lenses', l: 'Operation mapped' }, { v: '6', l: 'Systems shipped' }, { v: '25%', l: 'Cost cut' }] },
];

/* Testimonials */
const TESTIMONIALS = [
  { quote: 'They didn\u2019t pitch us AI. They mapped where we were leaking money, then built the fix. Inside a month we were responding to leads in under a minute.', name: 'Managing Director', role: 'Recruitment firm · Cape Town' },
  { quote: 'We\u2019d paid for Copilot for a year and never switched it on properly. WorkMind got 14 automations live across six departments without adding a single licence.', name: 'Head of Operations', role: 'Mid-market services · Dubai' },
  { quote: 'I was terrified automation would make us feel cheap. It did the opposite — nothing gets dropped now, and clients say we feel more personal, not less.', name: 'Founder', role: 'Luxury concierge · Johannesburg' },
];

const STATS = [
  { v: 25, suffix: '%', label: 'Average cost cut' },
  { v: 75, suffix: '%', label: 'Faster decision-making' },
  { v: 18, suffix: ' hrs', label: 'Reclaimed per week' },
  { v: 60, prefix: '< ', suffix: 's', label: 'Lead response time' },
];

Object.assign(window, { NAV, INDUSTRIES, SERVICES, METHOD, DIFFS, CLIENTS, SECTORS, CASES, TESTIMONIALS, STATS });
