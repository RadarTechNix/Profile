import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, Maximize2, Minimize2, Pause, Play } from 'lucide-react';
import './Projects.css';

const slideNames = [
    'Introduction', 'Profile', 'Career trajectory', 'System perspective', 'Radar DSP',
    'Current role', 'Customer applications', 'Integration & applications', 'Teaching experience', 'The value I bring',
];

const accentColors = ['cyan', 'blue', 'green', 'orange', 'cyan'];

function SlideHeader({ section, title, subtitle }) {
    return <header className="deck-heading">
        <p>{section}</p>
        <h3>{title}</h3>
        {subtitle && <div>{subtitle}</div>}
    </header>;
}

function DeckFooter({ index }) {
    return <footer className="deck-footer">
        <span>NIKHIL GANPAT NAVGHADE <b>/</b> RADAR ENGINEERING</span>
        <span>TECHNICAL INTERVIEW PORTFOLIO</span>
        <span>{index + 1}</span>
    </footer>;
}

function Panel({ children, accent = 'cyan', className = '' }) {
    return <div className={`deck-panel accent-${accent} ${className}`}>{children}</div>;
}

function RadarGraphic({ compact = false }) {
    return <div className={`radar-graphic ${compact ? 'radar-graphic-compact' : ''}`} aria-hidden="true">
        <i></i><i></i><i></i><i></i><em></em><b></b><strong></strong>
    </div>;
}

function IntroSlide() {
    return <div className="deck-intro">
        <div className="intro-copy">
            <p className="intro-chip">PORTFOLIO</p>
            <h3>Hi, I&apos;m<br />Nikhil.</h3>
            <p className="intro-summary">System Integration &amp; Validation Engineer<br />Automotive Radar &amp; RF Automation</p>
            <span></span>
            <h4>Radar engineer with 10+ years of experience across system integration and validation, RF test automation, FMCW signal processing, radar R&amp;D, and field applications engineering.</h4>
            <small>Munich, Germany</small>
        </div>
        <RadarGraphic />
        <div className="intro-stat">10+ YEARS <b>•</b> RADAR ENGINEERING <b>•</b> ONE SYSTEMS MINDSET</div>
    </div>;
}

function ProfileSlide() {
    const columns = [
        ['01 / MODEL THE SIGNAL', 'Radar DSP & algorithms', 'Pulse radar processing; FMCW range–Doppler processing; CFAR; elevation MIMO; DDMA; virtual-array workflows.'],
        ['02 / PROVE THE BEHAVIOUR', 'System integration & validation', '77 GHz radar semiconductor testing; controlled RF stimulus; automated scenarios; phase and delay analysis; traceable results.'],
        ['03 / CONNECT THE TEAMS', 'Applications & customer support', 'Customer problem framing; SoC bring-up; field debugging; collaboration with R&D; turning observed behaviour into actionable evidence.'],
    ];
    return <>
        <SlideHeader section="01 / PROFILE" title="An end-to-end radar engineering profile" subtitle="Three complementary strengths: algorithm thinking, physical measurement, and cross-functional execution." />
        <div className="profile-layout">
            <Panel className="years-panel"><b>12</b><span>YEARS</span><h4>Engineering experience</h4><p>Algorithms → Systems →<br />Silicon → Customers</p></Panel>
            <div className="profile-columns">{columns.map(([eyebrow, title, copy], index) => <Panel key={title} accent={accentColors[index + 2]}><p className="panel-eyebrow">{eyebrow}</p><h4>{title}</h4><p>{copy}</p></Panel>)}</div>
        </div>
        <div className="core-value"><b>CORE VALUE</b><span>I can move from a signal-level hypothesis to a bench measurement, an automated test, and an explanation a customer or design team can act on.</span></div>
    </>;
}

function TrajectorySlide() {
    const careers = [
        ['2015–2018', 'Wavelet / Sci-com', 'Pulse radar DSP', 'Wind-profiler radar processing and firmware. Signal-processing algorithms implemented in embedded software.'],
        ['2018–2022', 'Continental', 'Automotive FMCW', 'CFAR, elevation MIMO, production-oriented processes: ISO 26262 ASIL-B, MISRA, and ASPICE.'],
        ['2022–2024', 'Fusionride', 'Radar R&D', '1D–4D FFT processing, DDMA, virtual-array tooling, and 4×4 / 6×8 radar prototypes.'],
        ['2024–2026', 'Calterah Semiconductors', 'FAE / Technical Sales', 'Radar SoC design-in, bring-up, validation, customer debugging, and R&D collaboration.'],
        ['2026–Now', 'NXP Semiconductors', 'System Integration & Validation', '77 GHz radar semiconductor validation via ACONEXT / Hays; automated RF and functional measurements.'],
    ];
    return <>
        <SlideHeader section="02 / CAREER TRAJECTORY" title="Five chapters, one continuous technical thread" subtitle="My scope has expanded from embedded radar processing to full radar-system and semiconductor validation." />
        <div className="trajectory-grid">{careers.map(([date, company, role, copy], index) => <Panel key={company} accent={accentColors[index]} className="career-card"><p>{date}</p><h4>{company}</h4><b>{role}</b><hr /><span>{copy}</span></Panel>)}</div>
        <div className="technical-arc"><b>TECHNICAL ARC</b><span>Implement algorithms <i>→</i> develop radar functions <i>→</i> validate the silicon <i>→</i> enable customers</span></div>
    </>;
}

function SystemSlide() {
    const chain = [['01', 'RF front end', 'TX / RX channels'], ['02', 'IF / ADC', 'Sampling & data'], ['03', 'Range', 'Fast-time FFT'], ['04', 'Doppler / angle', 'MIMO / virtual array'], ['05', 'Detection', 'CFAR / separation'], ['06', 'System outcome', 'Accuracy / integration']];
    const touches = [['DSP', 'CFAR • FFT • DDMA'], ['RF', 'Stimulus • spectrum • phase'], ['VALIDATION', 'Scenarios • automation • traceability'], ['INTEGRATION', 'Boards • SoCs • customer debug']];
    return <>
        <SlideHeader section="03 / SYSTEM PERSPECTIVE" title="Experienced across the radar signal chain" subtitle="The value is not just knowing each block—it is understanding how behaviour propagates across interfaces." />
        <div className="signal-chain">{chain.map(([num, title, note], index) => <div key={title} className={`chain-item accent-${accentColors[index % accentColors.length]}`}><small>{num}</small><h4>{title}</h4><span>{note}</span>{index < chain.length - 1 && <i>→</i>}</div>)}</div>
        <p className="touch-label">EXPERIENCE TOUCHPOINTS</p>
        <div className="touch-grid">{touches.map(([title, text], index) => <Panel key={title} accent={accentColors[(index + 3) % accentColors.length]}><b>{title}</b><span>{text}</span></Panel>)}</div>
        <p className="deck-quote">A measurement is most useful when it explains a system-level effect, not just a number on an instrument.</p>
    </>;
}

function DspSlide() {
    const steps = [['ADC data', 'Chirps × samples'], ['Range FFT', 'Beat frequency → range'], ['Doppler FFT', 'Slow-time processing'], ['Angle / MIMO', 'Virtual-array channels'], ['CFAR', 'Adaptive detection'], ['Detections', 'Range • velocity • angle']];
    const capabilities = ['1D–4D FFT processing for FMCW radar', 'CFAR detection and target separation', 'Elevation MIMO and virtual-array tooling', 'DDMA-based channelisation concepts', 'Prototype integration: 4×4 and 6×8 radar configurations'];
    return <>
        <SlideHeader section="04 / RADAR DSP" title="Signal-processing work: from samples to detections" subtitle="Automotive FMCW experience spans processing chains, detection, MIMO/elevation, and virtual-array tools." />
        <div className="dsp-pipeline">{steps.map(([title, text], index) => <div key={title} className={`pipeline-step accent-${accentColors[index % accentColors.length]}`}><i></i><h4>{title}</h4><span>{text}</span>{index < steps.length - 1 && <b>→</b>}</div>)}</div>
        <div className="dsp-bottom"><div><p className="touch-label">SCHEMATIC RANGE–DOPPLER MAP</p><div className="heat-map">{Array.from({ length: 72 }, (_, index) => <i key={index} className={`heat-${index}`} />)}</div><span className="map-axis">Doppler →</span></div><Panel className="capabilities"><p>SELECTED TECHNICAL CAPABILITIES</p><ul>{capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul></Panel></div>
        <p className="diagram-note">Illustration is schematic, not experimental radar data.</p>
    </>;
}

function CurrentRoleSlide() {
    const tests = [['RX FILTER SHAPING', 'Characterise receiver filter response'], ['SUPPLY RIPPLE', 'Observe RF / IF impact under disturbance'], ['GROUP / CHIP DELAY', 'Estimate phase slope and delay'], ['PHASE ROTATION', 'Quantify phase changes across paths'], ['RANGE–DOPPLER', 'Check accuracy and separation behaviour']];
    const stack = [['Python / MATLAB test orchestration', 'Scenario control • instrument setup • analysis'], ['RF / electrical instrumentation', 'R&S SMA100B / FSW85 / RTO / meters / supplies'], ['DUT board + environmental control', '77 GHz radar IC • temperature and power cycling'], ['Analysis + data traceability', 'MATLAB • SQL / CVDB • automated reports']];
    return <>
        <SlideHeader section="05 / CURRENT ROLE" title="77 GHz radar semiconductor system integration & validation" subtitle="Current focus: repeatable, automated measurements that connect DUT behaviour to quantitative evidence." />
        <div className="current-grid"><div><p className="touch-label">TEST PORTFOLIO</p><div className="test-list">{tests.map(([name, detail], index) => <Panel key={name} accent={accentColors[index]}><b>{name}</b><span>{detail}</span></Panel>)}</div></div><div><p className="touch-label">AUTOMATED MEASUREMENT STACK</p><div className="measurement-stack">{stack.map(([name, detail], index) => <Panel key={name} accent={accentColors[index]}><h4>{name}</h4><span>{detail}</span>{index < stack.length - 1 && <i>↓</i>}</Panel>)}</div></div></div>
        <div className="result-strip">100+ automated scenarios <b>•</b> thousands of repeatable iterations <b>•</b> controlled settings <b>•</b> traceable results</div>
    </>;
}

function CustomerSlide() {
    const sections = [
        ['CUSTOMER SUPPORT', 'From design-in to adoption', ['Supported product selection, radar SoC design-in, board bring-up, validation and adoption.', 'Debugged across bootloader / Secure Boot, OTP/eFuse, Ethernet, embedded software, RF/DSP and SoC interfaces.']],
        ['RADAR APPLICATION DEMOS', 'Show the application', ['Delivered product demonstrations, technical presentations and customer workshops.', 'Explained radar use cases including child-detection scenarios and application behaviour.', 'Connected data collection for ML use cases to dataset quality and algorithm/model improvement.']],
        ['EXHIBITION & R&D BRIDGE', 'Electronica 2024', ['Participated in exhibition demonstration activities to communicate radar / semiconductor technology to external audiences.', 'Bridged European customer and application needs with China-based core R&D teams.', 'Provided application-driven technical input to next-generation chirp capability discussions.']],
    ];
    return <>
        <SlideHeader section="CUSTOMER APPLICATIONS" title="Customer support, demos & exhibition engagement" subtitle="Field-facing radar SoC engineering: from customer issues to application understanding." />
        <div className="customer-grid">{sections.map(([eyebrow, title, bullets], index) => <Panel key={title} accent={accentColors[index]} className="customer-card"><p>{eyebrow}</p><h4>{title}</h4><ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></Panel>)}</div>
        <div className="metric-strip"><span><b>4–5</b>CUSTOMERS SUPPORTED</span><span><b>≈90%</b>HISTORICAL ISSUE RESOLUTION</span><span><b>1</b>CONFIRMED DESIGN WIN</span><span><b>2024</b>ELECTRONICA DEMO PARTICIPATION</span></div>
    </>;
}

function IntegrationSlide() {
    const loop = [['01', 'Clarify the symptom', 'Reproduce the conditions and define the expected behaviour.'], ['02', 'Isolate the layer', 'Separate boot / connectivity, configuration, RF, and algorithm hypotheses.'], ['03', 'Collect evidence', 'Use logs, controlled tests, instruments, and a minimal reproducer.'], ['04', 'Close the loop', 'Communicate findings and next actions across customer and R&D teams.']];
    const bullets = ['Radar SoC design-in, board bring-up, and validation support', 'Debug exposure: Secure Boot, OTP / eFuse configuration, and Ethernet connectivity', 'Bridge between customer needs and China-based R&D teams', 'Product demonstrations and technical communication, including Electronica 2024', 'Product context: Tigershark radar SoC family'];
    return <>
        <SlideHeader section="08 / INTEGRATION & APPLICATIONS" title="I translate between customer symptoms and engineering evidence" subtitle="My FAE experience adds a customer-facing layer to the same technical problem-solving mindset." />
        <div className="integration-grid"><Panel className="loop-panel"><p>CUSTOMER-TO-R&D LOOP</p>{loop.map(([number, title, detail], index) => <div className="loop-step" key={title}><b className={index === 3 ? 'orange-number' : ''}>{number}</b><h4>{title}</h4><span>{detail}</span></div>)}</Panel><div className="applications-panel"><p>APPLICATIONS EXPERIENCE</p><ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="principles"><Panel accent="blue"><b>TECHNICAL DEPTH</b><span>DSP + RF measurements</span></Panel><Panel accent="orange"><b>METHOD</b><span>Repeatability + traceability</span></Panel><Panel><b>COMMUNICATION</b><span>Clear evidence + next action</span></Panel></div></div></div>
    </>;
}

function TeachingSlide() {
    return <>
        <SlideHeader section="TEACHING EXPERIENCE" title="Guest Lecturer — Government College of Engineering, Chandrapur" subtitle="Chandrapur, India • 2013–2014 • One-year academic engagement" />
        <div className="teaching-grid"><Panel className="lecturer-card"><p>GUEST LECTURER</p><b>2013–2014</b><h4>Government College of Engineering</h4><span>Chandrapur, Maharashtra, India</span><hr /><small>Early-career teaching experience</small></Panel><div className="teaching-copy"><p>A FOUNDATION THAT CARRIES FORWARD</p><h4>Make technical concepts understandable.</h4><span>My academic teaching experience is an early chapter in a career built around explaining engineering ideas clearly. Today, that communication mindset supports product demonstrations, customer workshops, technical discussions and collaboration between applications and R&D.</span><div className="teaching-steps"><Panel><b>01</b><h5>CLASSROOM</h5><span>Explain concepts clearly</span></Panel><Panel accent="orange"><b>02</b><h5>DEMONSTRATIONS</h5><span>Connect technology to use cases</span></Panel><Panel accent="blue"><b>03</b><h5>CUSTOMER ENGINEERING</h5><span>Align evidence and next steps</span></Panel></div></div></div>
        <div className="teaching-note">Teaching experience is shown separately from the 12 years of professional radar engineering experience.</div>
    </>;
}

function ValueSlide() {
    const values = [['01', 'Signal-level reasoning', 'Algorithms and radar system behaviour'], ['02', 'Measurement discipline', 'Automated, repeatable, traceable validation'], ['03', 'Cross-functional execution', 'Clear communication from bench to customer']];
    return <div className="value-slide"><p className="intro-chip">THE VALUE I BRING</p><h3>I connect the signal chain,<br />the system, and the customer.</h3><RadarGraphic compact /><div className="value-cards">{values.map(([number, title, note], index) => <Panel key={title} accent={accentColors[index]}><b>{number}</b><h4>{title}</h4><span>{note}</span></Panel>)}</div><div className="thanks-row"><strong>THANK YOU</strong><b>Questions &amp; discussion</b><span>Nikhil Ganpat Navghade • Munich, Germany</span></div></div>;
}

function SlideContent({ index }) {
    const slides = [IntroSlide, ProfileSlide, TrajectorySlide, SystemSlide, DspSlide, CurrentRoleSlide, CustomerSlide, IntegrationSlide, TeachingSlide, ValueSlide];
    const ActiveSlide = slides[index];
    return <ActiveSlide />;
}

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const carouselRef = useRef(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
        updatePreference();
        mediaQuery.addEventListener('change', updatePreference);
        return () => mediaQuery.removeEventListener('change', updatePreference);
    }, []);

    useEffect(() => {
        if (isPaused || prefersReducedMotion) return undefined;
        const interval = window.setInterval(() => { setDirection(1); setActiveIndex((index) => (index + 1) % slideNames.length); }, 4500);
        return () => window.clearInterval(interval);
    }, [isPaused, prefersReducedMotion]);

    useEffect(() => {
        const syncFullscreenState = () => setIsFullscreen(document.fullscreenElement === carouselRef.current);
        document.addEventListener('fullscreenchange', syncFullscreenState);
        return () => document.removeEventListener('fullscreenchange', syncFullscreenState);
    }, []);

    const changeSlide = (index) => { setDirection(index > activeIndex ? 1 : -1); setActiveIndex(index); };
    const previous = () => changeSlide((activeIndex - 1 + slideNames.length) % slideNames.length);
    const next = () => changeSlide((activeIndex + 1) % slideNames.length);
    const toggleFullscreen = async () => {
        if (!carouselRef.current) return;
        if (document.fullscreenElement) {
            await document.exitFullscreen();
            return;
        }
        await carouselRef.current.requestFullscreen();
    };

    return <section id="projects" className="portfolio-section">
        <div className="portfolio-wrap">
            <div ref={carouselRef} className="portfolio-carousel" aria-label="Radar engineering portfolio presentation" aria-roledescription="carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocusCapture={() => setIsPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false); }} onKeyDown={(event) => { if (event.key === 'ArrowLeft') previous(); if (event.key === 'ArrowRight') next(); }} tabIndex="0">
                <AnimatePresence initial={false} custom={direction} mode="wait"><Motion.article key={activeIndex} custom={direction} initial={{ opacity: 0, x: direction * 36 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction * -36 }} transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: 'easeOut' }} className="presentation-slide" aria-label={`Slide ${activeIndex + 1} of ${slideNames.length}: ${slideNames[activeIndex]}`}><SlideContent index={activeIndex} /><DeckFooter index={activeIndex} /></Motion.article></AnimatePresence>
                <div className="deck-controls"><div><button type="button" onClick={previous} aria-label="Previous slide"><ChevronLeft size={20} /></button><button type="button" onClick={next} aria-label="Next slide"><ChevronRight size={20} /></button><button type="button" onClick={() => setIsPaused((paused) => !paused)} aria-label={isPaused ? 'Resume automatic slides' : 'Pause automatic slides'}>{isPaused ? <Play size={17} /> : <Pause size={17} />}</button><button type="button" onClick={toggleFullscreen} aria-label={isFullscreen ? 'Exit full-screen presentation' : 'Open full-screen presentation'}>{isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}</button><span aria-live="polite">{activeIndex + 1} / {slideNames.length}</span></div><div className="slide-dots">{slideNames.map((name, index) => <button type="button" key={name} onClick={() => changeSlide(index)} aria-label={`Show slide ${index + 1}: ${name}`} aria-current={index === activeIndex ? 'true' : undefined} className={index === activeIndex ? 'active' : ''} />)}</div><a href="./radar-engineering-interview.pptx" download><Download size={16} /> Download deck</a></div>
            </div>
        </div>
    </section>;
}
