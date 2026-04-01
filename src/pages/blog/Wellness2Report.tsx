import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { trackBlogPostView, trackEvent } from "@/utils/analytics";

const SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "ai-coach", label: "AI Coach" },
  { id: "glp1-peptides", label: "GLP-1s & Peptides" },
  { id: "telehealth", label: "Telehealth" },
  { id: "spaces", label: "Training Spaces" },
  { id: "longevity", label: "Longevity" },
  { id: "overland", label: "Overland Boom" },
  { id: "mental-health", label: "Mental Health" },
  { id: "money", label: "Where Money Moves" },
  { id: "closing", label: "Closing" },
  { id: "sources", label: "Sources" },
];

const StatCallout = ({ stat, source, className = "" }: { stat: string; source: string; className?: string }) => (
  <div className={`my-12 md:my-16 py-8 md:py-12 border-t border-b border-white/10 ${className}`}>
    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-accent leading-tight mb-4">{stat}</p>
    <p className="text-xs text-white/40 font-light">{source}</p>
  </div>
);

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="my-12 md:my-16 pl-6 md:pl-8 border-l-2 border-accent">
    <p className="text-lg md:text-xl lg:text-2xl font-light italic text-white/90 leading-relaxed">{children}</p>
  </blockquote>
);

const SectionDivider = () => <div className="w-16 h-px bg-accent/40 my-16 md:my-24" />;

const Wellness2Report = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [navVisible, setNavVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    trackBlogPostView("wellness-2-health-economy-rebuilt");
  }, []);

  // Track section scroll depth
  const trackSection = useCallback((sectionId: string) => {
    trackEvent("report_section_viewed", { section: sectionId, report: "wellness-2" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            trackSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [trackSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setNavVisible(window.scrollY > heroRef.current.offsetHeight - 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Wellness 2.0: The Health Economy Is Being Rebuilt",
      description: "GRPL's inaugural insight report mapping 8 forces reshaping the $6.8 trillion health economy — AI, GLP-1s, telehealth, longevity, and more.",
      url: "https://www.grpl.com.au/blog/wellness-2-health-economy-rebuilt",
      datePublished: "2026-03-30",
      dateModified: "2026-03-30",
      author: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
      publisher: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.grpl.com.au/blog/wellness-2-health-economy-rebuilt" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.grpl.com.au/blog" },
        { "@type": "ListItem", position: 3, name: "Wellness 2.0", item: "https://www.grpl.com.au/blog/wellness-2-health-economy-rebuilt" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Wellness 2.0: The Health Economy Is Being Rebuilt | GRPL"
        description="GRPL's inaugural insight report mapping 8 forces reshaping the $6.8 trillion health economy — AI, GLP-1s, telehealth, longevity, and more."
        canonical="https://www.grpl.com.au/blog/wellness-2-health-economy-rebuilt"
        ogType="article"
        jsonLd={jsonLd}
      />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      <Header />

      {/* Sticky section nav */}
      <nav
        className={`fixed top-14 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5 transition-all duration-500 ${
          navVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 py-2 min-w-max">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${
                  activeSection === id
                    ? "bg-accent text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div ref={heroRef} className="relative min-h-screen flex items-center pt-14">
        {/* Subtle animated pulse line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute bottom-1/3 left-0 w-full h-32 opacity-[0.06]" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50"
              fill="none"
              stroke="hsl(20,100%,50%)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.p
              className="text-xs tracking-[0.3em] uppercase text-accent mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              GRPL — Health Economy Insight Report · March 2026
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Wellness 2.0:<br />
              <span className="text-accent">The Health Economy</span><br />
              Is Being Rebuilt
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              The way you train, recover, get diagnosed, lose weight, track your body, and access a doctor is being redesigned — simultaneously, by different industries, for different reasons. This is what's actually happening.
            </motion.p>
            <motion.div
              className="border border-accent/20 rounded-lg p-6 md:p-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-4xl md:text-5xl font-black text-accent mb-2">$6.8 TRILLION</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Global health economy. Every week, billion-dollar deals reshape what you pay, what you access, and how you look after yourself. Nobody's explaining how it works. Until now.
              </p>
              <p className="text-xs text-white/30 mt-3">Source: Global Wellness Institute, Global Wellness Economy Monitor 2024</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* ===== OPENING NARRATIVE ===== */}
          <section id="intro" className="py-16 md:py-24">
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-6">
              It's 6:14am. Your Whoop vibrates — recovery score 43%, HRV tanked. The AI coaching layer, trained on 8 years of biometric data from hundreds of thousands of users, recommends skipping your usual strength session for a 30-minute zone 2 walk and a sauna. You check your CGM — yesterday's dinner spiked your glucose higher than expected. Your telehealth app pings: blood panel results are in, ordered three days ago without leaving your couch. Your peptide protocol from the longevity clinic arrives at 9am.
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-6">
              Five years ago, none of this existed. Five years from now, it'll be unremarkable.
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-6">
              This is Wellness 2.0. Not one trend. A dozen forces colliding at the same time — AI, pharmaceuticals, digital health, community, and a generation of consumers who expect their health to be as personalised as their Spotify playlist.
            </p>

            <SectionDivider />

            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-6">
              The health economy is $6.8 trillion globally. It touches fitness, medicine, wellness, longevity, nutrition, mental health, recovery, and the technology that connects them all. But it's been treated as separate industries for decades. Fitness lives in one world. Medicine in another. Wellness somewhere else.
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-6">
              You don't have a fitness body and a medical body and a wellness body. You have one body. One set of decisions. One life affected by all of these industries simultaneously.
            </p>
            <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
              This report maps the forces reshaping that economy — where businesses are investing, where consumers are spending, and what it all means for the person it claims to serve: you.
            </p>
          </section>

          {/* ===== SECTION 1: AI COACH ===== */}
          <section id="ai-coach" className="py-16 md:py-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              Your AI Coach Already Knows More Than Your PT
            </h2>

            <StatCallout
              stat="By 2028, 90% of consumer health interactions will begin with AI — before a human is involved."
              source="Accenture, Digital Health Technology Vision 2025; McKinsey Global Health Insights"
            />

            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              Your Whoop buzzes. Your AI adjusts your program. Your ring scores your sleep. This isn't a glimpse of the future — this is Tuesday morning for millions of people worldwide.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              OpenAI launched health-specific capabilities in ChatGPT. Whoop partnered with OpenAI to build AI health coaching. Apple is integrating health reasoning into Siri. Google DeepMind's health AI can interpret medical imaging with specialist-level accuracy. Every major tech company is racing to become your first health contact point.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The global AI in healthcare market hit $20.9 billion in 2024 and is projected to reach $148.4 billion by 2029 — a compound annual growth rate of 48.1%. That's not incremental growth. That's a category being born.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              Consider the data richness: Whoop holds 8+ years of continuous biometric data on hundreds of thousands of users. Garmin tracks 30+ million active users globally with GPS, heart rate, HRV, sleep, and training data. Your wearable captures more data points about your body in a single day than your GP gathers in a decade of annual check-ups.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The personal trainer model is inverting. An average PT session in Australia costs $80-120 per hour. The commodity work — programming sets and reps, tracking progressive overload, adjusting volume based on recovery — gets automated. The human work gets more valuable. Coaching, motivation, accountability, movement quality, the things a camera and algorithm still can't replicate, become the premium.
            </p>

            <PullQuote>
              Your $400 ring is about to be more useful than your GP for daily health decisions. Not because rings are better than doctors — but because they never stop watching.
            </PullQuote>

            <p className="text-lg text-white/80 font-light leading-relaxed">
              When your AI knows your biometrics better than your GP, what happens to the 15-minute consultation? That question isn't theoretical anymore. It's a business model question. And every health business in the country needs to have an answer.
            </p>
          </section>

          {/* ===== SECTION 2: GLP-1s ===== */}
          <section id="glp1-peptides" className="py-16 md:py-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              GLP-1s Changed the Rules. Peptides Will Break Them.
            </h2>

            <StatCallout
              stat="$30+ BILLION — Global GLP-1 revenue in 2025. The fastest-growing drugs in pharmaceutical history."
              source="Novo Nordisk annual report 2025; Eli Lilly financial reporting"
            />

            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              Your friend lost 20kg in four months. Not from a gym. From a weekly injection. What does that do to your expectations?
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              Semaglutide (Ozempic, Wegovy) generated over $30 billion in global revenue in 2025. Tirzepatide (Mounjaro, Zepbound) is projected to become the best-selling drug in history. In Australia, the PBS is staging access to GLP-1 obesity drugs, mapping high-risk groups first. Average weight loss on semaglutide 2.4mg: 15-17% body weight over 68 weeks, according to STEP trial data published in the New England Journal of Medicine.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              But here's the number that changes the conversation: 70% of weight is regained within one year of stopping treatment. This isn't a cure. It's a subscription. And that changes the economics of every adjacent industry.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The cascading effects are already visible. Gym economics shift when the primary motivation — weight loss — gets pharmaceutical competition. Nutrition businesses adapt or die. The definition of "results" changes when a weekly injection delivers what 12 months of training used to promise.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              Then there are peptides — the next wave. BPC-157 for gut health and tissue repair. Thymosin Beta-4 for recovery. Epithalon for cellular ageing. The Australian compounding pharmacy market for peptides is growing an estimated 25%+ year on year. The global peptide therapeutics market hit $49.5 billion in 2024, projected to reach $93.3 billion by 2031. Some of this is well-evidenced. Some is promising. Some is being oversold. The consumer needs honest editorial — not marketing — to navigate it.
            </p>

            <PullQuote>
              You can't Ozempic your way through an ultramarathon. But you can Ozempic your way out of a gym membership. The health economy has to reckon with what it's really selling.
            </PullQuote>

            <p className="text-lg text-white/80 font-light leading-relaxed">
              When drugs deliver body composition faster than training, what is the gym actually selling? Community? Identity? Performance? Mental health? The ones that can answer that question survive. The ones that can't are selling a commodity against a pharmaceutical competitor with a 48% CAGR. Good luck.
            </p>
          </section>

          {/* ===== SECTION 3: TELEHEALTH ===== */}
          <section id="telehealth" className="py-16 md:py-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              Telehealth Didn't Just Change Access. It Changed Behaviour.
            </h2>

            <StatCallout
              stat="$1B+ — Eucalyptus built a billion-dollar business on the premise you shouldn't need to leave your couch to see a doctor."
              source="Hims & Hers acquisition reporting, AFR, TechCrunch"
            />

            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              You now live in two healthcare systems simultaneously. The old one: book, wait three to seven days in metro (two to four weeks regional), sit in a waiting room, 12 minutes with a GP. The new one: open an app, consult within the hour, medication at your door by dinner.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              Australia has processed over 100 million telehealth consultations since COVID's introduction. Medicare telehealth items grew from negligible pre-2020 to over 30% of all GP consultations. 65% of Australians who used telehealth during COVID continued using it post-pandemic. This isn't an emergency measure anymore. It's the system.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              Eucalyptus sold to Hims & Hers for a reported billion-plus. Instant Scripts, Rosemary Health, Pilot, Compound — digital health platforms are multiplying. Digital health investment in Australia has topped $1.4 billion cumulative since 2020.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              But here's the insight most people miss: telehealth isn't just about access. It's about frequency. When seeing a doctor takes three weeks, you only go when something's wrong. When it takes 15 minutes on your phone, you start going for prevention. That's a behaviour change worth trillions.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The tension: convenience versus continuity. Your three app doctors don't talk to each other. Your telehealth prescriber doesn't know about your in-person physio. Your mental health app doesn't share data with your GP. The fragments multiply.
            </p>

            <PullQuote>
              When seeing a doctor takes three weeks, you only go when something's wrong. When it takes 15 minutes on your phone, you start going for prevention. That's a behaviour change worth trillions.
            </PullQuote>

            <p className="text-lg text-white/80 font-light leading-relaxed">
              The endgame is one ecosystem for your health data, not seven fragments. The company that integrates — medical records, wearable data, mental health, prescriptions, pathology — into a single consumer health layer will build one of the most valuable businesses of the decade.
            </p>
          </section>

          {/* ===== SECTION 4: SPACES ===== */}
          <section id="spaces" className="py-16 md:py-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              The Space You Train In Is Being Redesigned
            </h2>

            <StatCallout
              stat="3,000 SQM — Saint Haven, Tim Gurner's wellness complex. No squat racks. No treadmills. Hyperbaric chambers, cryotherapy, and red-light beds."
              source="GURNER Group announcement, Urban Developer reporting"
            />

            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The gym floor is shrinking. The recovery floor is growing. Australian fitness industry revenue sits at $2.7 billion in 2025, but boutique fitness grew 15% faster than the traditional gym segment between 2022 and 2025. The middle is getting squeezed.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              Average gym membership churn runs at 50-60% annually. Community-based membership models retain at 80-90%. The math is clear: people cancel gym memberships, but they don't cancel communities.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              Recovery and wellness services in Australia are growing 18% year on year. The ice bath and cold plunge market is growing at 12% CAGR globally. The sauna market is projected to hit $4.9 billion by 2030. These aren't fitness trends. They're infrastructure trends — the spaces we go to look after ourselves are being fundamentally redesigned.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              Now layer in the loneliness crisis. One in three Australian adults report feeling lonely. Chronic loneliness increases heart disease risk by 29%, stroke risk by 32%. The health impact is equivalent to smoking 15 cigarettes a day. Recovery modalities are inherently social — shared saunas, cold plunges, breathwork circles. They solve two problems simultaneously: physical recovery and social connection.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The whitespace is enormous: the wellness social club. Recovery, coworking, movement, practitioners, events, curated community, all under one roof. Your next membership won't be a gym.
            </p>

            <PullQuote>
              Gyms don't solve loneliness. Communities do. The brands that figure this out will build something people never cancel.
            </PullQuote>
          </section>

          {/* ===== SECTION 5: LONGEVITY ===== */}
          <section id="longevity" className="py-16 md:py-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              Longevity Went Mainstream and Nobody Noticed
            </h2>

            <StatCallout
              stat="340% — Growth in consumer demand for preventive health testing in Australia since 2021."
              source="iMedical, Australian preventive health platform data; industry estimates"
            />

            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The shift from "sick care" to "health care" is being led by consumers, not the medical system. People aren't waiting for their GP to suggest a DEXA scan or an advanced blood panel. They're ordering them directly, paying out of pocket, and building their own health dashboards.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The global longevity economy hit $610 billion in 2025 and is projected to exceed $1 trillion by 2030. The continuous glucose monitor (CGM) market reached $8.7 billion in 2024, projected to double to $16.4 billion by 2030. DEXA scan demand in Australian private wellness clinics has surged over 200% since 2022.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              CGMs are the gateway drug. Seeing your glucose spike after a bowl of rice — watching it happen in real-time on your phone — changes behaviour in a way no nutritionist lecture ever could. DEXA scans provide more data about your body composition than years of standing on scales. Advanced blood panels reveal what your GP's standard pathology doesn't order.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              An advanced blood panel costs $300-800. A full longevity workup — bloods, DEXA, VO2 max, genetic testing, consultation — runs $2,000-5,000. At the extreme end, Bryan Johnson's "Blueprint" protocol costs over $2 million a year. VO2 max is now recognised as the single strongest predictor of all-cause mortality. Australian private health expenditure sits at $43.7 billion annually.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The tension is real: longevity as luxury good. A $5,000 workup creates a two-tier system. If Wellness 2.0 only serves the affluent, it's not a health economy — it's a luxury economy wearing a lab coat.
            </p>

            <PullQuote>
              Five years ago, a continuous glucose monitor was a medical device for diabetics. Today it's a lifestyle product for people who want to understand their body's operating system. That's the shift.
            </PullQuote>
          </section>

          {/* ===== SECTION 6: OVERLAND ===== */}
          <section id="overland" className="py-16 md:py-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              The Overland Boom Is a Health Signal in Disguise
            </h2>

            <StatCallout
              stat="400% — Growth in trail and ultra-running participation in Australia over the past 5 years."
              source="Trail Running Australia, Ultra Trail Australia event data, parkrun participation reports"
            />

            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              This trend isn't about running. It's about something deeper.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              Ultra Trail Australia entries now sell out in under 24 hours — up from weeks in 2019. Trail running participation in Australia has grown to an estimated 500,000+ regular participants. The global trail running market hit $5.5 billion in 2024, growing at 6.5% CAGR. Strava data shows trail running segments up over 30% globally between 2023 and 2025.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              People are voluntarily signing up for 50km through mountains — not for fitness, but for meaning, presence, and accomplishment in a world that's increasingly abstract and digital. The average ultra runner spends $3,000-6,000 per year on gear, nutrition, entry fees, and travel. That's not discretionary spending on a hobby. That's investment in identity.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              In a world of GLP-1s and AI coaches, the overland boom is the health economy's answer to the meaning crisis. You can't shortcut this. You can't automate it. You can't inject your way to finishing the UTA 100 at 3am in the Blue Mountains. "Type 2 fun" — suffering that becomes deeply satisfying in retrospect — is gaining mainstream cultural traction because it offers something the optimised life can't: earned transformation.
            </p>

            <PullQuote>
              You can't Ozempic your way through an ultramarathon. In a world racing to optimise everything, some people are choosing to go slower, harder, and deeper. That's not a fitness trend. It's a values statement.
            </PullQuote>

            <p className="text-lg text-white/80 font-light leading-relaxed">
              Shared suffering creates bonds no gym class can replicate. The community that forms on a trail at 4am, 60km in, is qualitatively different from anything a franchise fitness model can manufacture. That's why trail events are growing while gym memberships churn. They're selling something money can buy but shortcuts can't deliver.
            </p>
          </section>

          {/* ===== SECTION 7: MENTAL HEALTH ===== */}
          <section id="mental-health" className="py-16 md:py-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              Mental Health Finally Got a Business Model
            </h2>

            <StatCallout
              stat="8-12 WEEKS — Average wait to see a psychologist in Australian metro areas. Demand has outstripped supply."
              source="Australian Psychological Society, APS Member Survey; Australian Association of Psychologists"
            />

            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The access crisis is acute. The Australian Government cut Better Access from 20 to 10 Medicare-funded sessions in 2023. One in five Australians experience a mental health condition each year. The cost of untreated mental health to the Australian economy: $220 billion annually.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The commercial response is multiplying. Mental health apps hit $6.2 billion globally in 2024, projected to reach $17.5 billion by 2030. Headspace has surpassed 100 million downloads. AI therapy chatbot usage is growing over 40% year on year. Employer wellness programs in Australia are growing 8% annually.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The tension: quality varies wildly. An AI chatbot is not a psychologist. A meditation app is not therapy. A breathing exercise is not trauma processing. The risk of commercialisation is creating an illusion of care — people feel like they're doing something when what they actually need is someone.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              The best Wellness 2.0 models bake mental health into the environment — community connection, stress-reducing modalities (cold exposure, breathwork, float tanks), practitioner access, spaces designed to lower cortisol. Mental health isn't a separate category. It's the thread running through everything in this report.
            </p>

            <PullQuote>
              The risk isn't that mental health gets commercialised. It's that commercialisation creates an illusion of care — people feel like they're doing something when what they actually need is someone.
            </PullQuote>
          </section>

          {/* ===== SECTION 8: MONEY ===== */}
          <section id="money" className="py-16 md:py-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              Where the Money Is Moving
            </h2>

            <StatCallout
              stat="$6.8 TRILLION — The global health economy. Here's where the capital is flowing."
              source="Global Wellness Institute"
            />

            <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
              Follow the money. It always tells the truth before the press releases do.
            </p>

            {/* Money In */}
            <div className="mb-12">
              <h3 className="text-sm tracking-[0.2em] uppercase text-accent font-bold mb-6">Money In</h3>
              <div className="space-y-6">
                {[
                  { category: "AI in Healthcare", stat: "$20.9B → $148.4B by 2029", impact: "Your first health interaction will be with a machine." },
                  { category: "GLP-1 / Weight Management", stat: "$30B+ annual revenue, growing", impact: "Weight management becomes pharmaceutical, not physical." },
                  { category: "Digital Health Platforms", stat: "$1.4B+ cumulative in Australia since 2020", impact: "Healthcare moves from waiting rooms to your phone." },
                  { category: "Longevity Market", stat: "$610B → $1T+ by 2030", impact: "Prevention replaces treatment as the growth driver." },
                  { category: "Experiential Wellness", stat: "Fastest-growing segment of AU fitness", impact: "The places you go to look after yourself fundamentally change." },
                  { category: "Health Data Infrastructure", stat: "Early stage but foundational", impact: "Your health data becomes portable, integrated, and actionable." },
                ].map((item) => (
                  <div key={item.category} className="border-l-2 border-accent/40 pl-6">
                    <p className="font-bold text-white text-sm mb-1">{item.category}</p>
                    <p className="text-accent text-sm font-medium mb-1">{item.stat}</p>
                    <p className="text-white/60 text-sm font-light">{item.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Money Out */}
            <div className="mb-12">
              <h3 className="text-sm tracking-[0.2em] uppercase text-white/40 font-bold mb-6">Money Out</h3>
              <div className="space-y-6">
                {[
                  { category: "Mid-Market Gym Franchises", impact: "The $50/week gym gets squeezed from above (premium) and below (pharmaceutical)." },
                  { category: "Commodity Supplements", impact: "Generic protein and vitamins lose to personalised, data-driven protocols." },
                  { category: "Content Without Community", impact: "Free fitness content is infinite. Without community, there's no moat." },
                ].map((item) => (
                  <div key={item.category} className="border-l-2 border-white/10 pl-6">
                    <p className="font-bold text-white/60 text-sm mb-1">{item.category}</p>
                    <p className="text-white/40 text-sm font-light">{item.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            <PullQuote>
              The businesses making these moves aren't doing it for your benefit. They're doing it because there's $6.8 trillion on the table. But the outcome — if the pieces connect — is a health economy that actually works for the person it claims to serve.
            </PullQuote>
          </section>

          {/* ===== CLOSING ===== */}
          <section id="closing" className="py-16 md:py-24 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-8">
              One Body.<br /><span className="text-accent">One Economy.</span>
            </h2>
            <div className="text-left max-w-2xl mx-auto">
              <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                Every trend in this report points to the same conclusion: the health economy is being rebuilt around the individual, not the institution.
              </p>
              <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                Your data. Your choices. Your access. Your community. All being reshaped simultaneously by AI, pharmaceuticals, digital health, and a generation of consumers who refuse to accept that looking after yourself should be fragmented, confusing, or only available to the wealthy.
              </p>
              <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                The boundaries between fitness, medicine, wellness, tech, and pharmaceuticals are dissolving. That's not a problem to solve. It's an opportunity to embrace — if you understand what's happening.
              </p>
              <p className="text-lg text-white/90 font-medium leading-relaxed mb-12">
                Health isn't a set of categories. It's one economy. And it's being rebuilt right now.
              </p>
            </div>

            <div className="border-t border-white/10 pt-12 mt-8">
              <p className="text-xl md:text-2xl font-black mb-6">Want to discuss how to win as we head into 2.0?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/company/grpl-au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-colors"
                >
                  Follow GRPL on LinkedIn
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white/20 hover:border-accent/40 text-white font-bold rounded-lg transition-colors"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </section>

          {/* ===== SOURCES ===== */}
          <section id="sources" className="py-16 md:py-24 border-t border-white/10">
            <h2 className="text-2xl font-black tracking-tight mb-8">Sources</h2>
            <ol className="space-y-2 text-sm text-white/50 font-light list-decimal pl-6">
              <li>Global Wellness Institute — Global Wellness Economy Monitor 2024 ($6.8T figure)</li>
              <li>Accenture — Digital Health Technology Vision 2025 (AI health interactions)</li>
              <li>McKinsey & Company — The Future of Wellness / Global Health Insights</li>
              <li>MarketsandMarkets — AI in Healthcare Market Report ($20.9B → $148.4B)</li>
              <li>OpenAI — Health capabilities product announcements (2025-2026)</li>
              <li>Whoop — OpenAI partnership press release (2025)</li>
              <li>Whoop — Company data (8+ years biometric data)</li>
              <li>Garmin — Annual report (30M+ active users)</li>
              <li>Bloomberg / Mark Gurman — Apple Health AI development reporting</li>
              <li>Nature Medicine — DeepMind health AI publications</li>
              <li>Fitness Australia — Industry report (PT session pricing)</li>
              <li>Novo Nordisk — FY2025 annual report (GLP-1 revenue $30B+)</li>
              <li>Eli Lilly — Investor briefing, tirzepatide projections</li>
              <li>PBAC — Pharmaceutical Benefits Advisory Committee, GLP-1 outcomes</li>
              <li>New England Journal of Medicine — STEP trials (semaglutide weight loss data)</li>
              <li>JAMA — SURMOUNT-4 trial data (weight regain)</li>
              <li>Grand View Research — Global peptide therapeutics market ($49.5B → $93.3B)</li>
              <li>Pharmacy Guild of Australia — Compounding pharmacy market reporting</li>
              <li>IHRSA — Global Report on Health & Fitness Sector (churn rates)</li>
              <li>ClassPass — Consumer trend data</li>
              <li>Hims & Hers / Eucalyptus — Acquisition reporting (AFR, Bloomberg, TechCrunch)</li>
              <li>Services Australia — Medicare Benefits Schedule data (telehealth volumes)</li>
              <li>Australian Medical Association — AMA General Practice Report (wait times)</li>
              <li>Australian Digital Health Agency — Post-pandemic telehealth survey</li>
              <li>StartupAus / Cut Through Venture — Digital health investment data ($1.4B+)</li>
              <li>Crunchbase — AU digital health company data</li>
              <li>AIHW — Health Expenditure Australia ($43.7B private expenditure)</li>
              <li>IBISWorld — Australian Fitness Industry Report ($2.7B revenue)</li>
              <li>Deloitte — Global Health & Fitness Consumer Survey (boutique growth)</li>
              <li>Ending Loneliness Together — State of the Nation Report (1 in 3 adults)</li>
              <li>Holt-Lunstad et al. — Perspectives on Psychological Science 2015 (loneliness mortality risk)</li>
              <li>Holt-Lunstad — Brigham Young University (15 cigarettes/day equivalence)</li>
              <li>Allied Market Research — Cold plunge market (12% CAGR)</li>
              <li>Grand View Research — Global sauna market ($4.9B by 2030)</li>
              <li>GURNER Group — Saint Haven announcement</li>
              <li>Bank of America — The Silver Dollar: Longevity Revolution ($610B → $1T)</li>
              <li>Fortune Business Insights — CGM market ($8.7B → $16.4B)</li>
              <li>iMedical / DEXA Fit Australia — Preventive health testing demand data</li>
              <li>JAMA Network Open / Cooper Institute — VO2 max and mortality research</li>
              <li>Trail Running Australia / Ultra Trail Australia — Participation data</li>
              <li>Athletics Australia — Trail running participation estimates</li>
              <li>Strava — Year in Sport reports (trail running growth)</li>
              <li>Allied Market Research — Global trail running market ($5.5B)</li>
              <li>Australian Psychological Society — APS Member Survey (wait times)</li>
              <li>ABS — National Survey of Mental Health and Wellbeing (1 in 5)</li>
              <li>Australian Government — Better Access scheme changes</li>
              <li>Productivity Commission — Mental Health Inquiry Report ($220B cost)</li>
              <li>Grand View Research — Mental health apps market ($6.2B → $17.5B)</li>
              <li>Headspace — Company data (100M+ downloads)</li>
              <li>Deloitte — Workplace Mental Health report (employer wellness)</li>
              <li>Rock Health — Digital health funding reports</li>
              <li>Fitt Insider — Wellness 2.0 Playbook (2025), 2026 Scouting Report</li>
            </ol>
            <p className="text-xs text-white/30 mt-6 font-light italic">
              Some figures are estimates based on available industry data. Where exact figures aren't publicly available, this has been noted.
            </p>
          </section>

          {/* Back to blog */}
          <div className="py-12 border-t border-white/10 text-center">
            <Link to="/blog" className="text-accent hover:text-accent/80 text-sm font-medium transition-colors">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wellness2Report;
