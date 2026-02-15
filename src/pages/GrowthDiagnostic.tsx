import { useState, useCallback, useMemo, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { diagnosticQuestions, QUESTION_ORDER } from "@/data/diagnosticQuestions";
import {
  normaliseScores,
  getTotalPercentage,
  getGrowthStage,
  GROWTH_STAGE_INFO,
  getDimensionAssessment,
  getDimensionColor,
  getTop3Gaps,
  GAP_RECOMMENDATIONS,
  getRecommendedService,
} from "@/utils/diagnosticScoring";
import type {
  DiagnosticState,
  DimensionScores,
  UserAnswer,
  Dimension,
  PointAllocation,
} from "@/types/diagnostic";

const INITIAL_SCORES: DimensionScores = { strategy: 0, execution: 0, team: 0, technology: 0, measurement: 0, positioning: 0 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "GRPL Growth Diagnostic",
  description: "Free interactive diagnostic tool that identifies growth gaps and provides personalised marketing leadership recommendations for Australian businesses.",
  url: "https://www.grpl.com.au/growth-diagnostic",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "AUD" },
  provider: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
};

const DIMENSION_LABELS: Record<Dimension, string> = {
  strategy: 'Strategy',
  execution: 'Execution',
  team: 'Team',
  technology: 'Technology',
  measurement: 'Measurement',
  positioning: 'Positioning',
};

export default function GrowthDiagnostic() {
  const [state, setState] = useState<DiagnosticState>({
    phase: 'intro',
    currentQuestionIndex: 0,
    questionHistory: [],
    answers: [],
    scores: { ...INITIAL_SCORES },
    revenueTier: null,
    growthAmbitionTag: null,
    formData: { firstName: '', email: '', companyName: '', phone: '' },
    interstitialText: null,
  });

  const [direction, setDirection] = useState(1);
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [sliderVal, setSliderVal] = useState(3);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Build the question flow for the current user
  const currentQuestionId = state.questionHistory[state.currentQuestionIndex];
  const currentQuestion = diagnosticQuestions.find(q => q.id === currentQuestionId);

  // Total questions for progress (exclude branch if not taken)
  const totalQuestions = state.questionHistory.length > 0
    ? state.questionHistory.length
    : QUESTION_ORDER.length;

  const progressPct = state.phase === 'results' ? 100 :
    state.phase === 'email-gate' ? 100 :
    state.phase === 'intro' ? 0 :
    Math.round(((state.currentQuestionIndex + 1) / totalQuestions) * 100);

  const radarData = useMemo(() => {
    const n = normaliseScores(state.scores);
    return Object.entries(n).map(([k, v]) => ({
      dimension: DIMENSION_LABELS[k as Dimension],
      score: v,
    }));
  }, [state.scores]);

  const addPoints = useCallback((points: PointAllocation[], current: DimensionScores): DimensionScores => {
    const next = { ...current };
    points.forEach(p => { next[p.dimension] = Math.min(15, next[p.dimension] + p.points); });
    return next;
  }, []);

  const startDiagnostic = () => {
    const q1 = diagnosticQuestions.find(q => q.id === 'q1')!;
    setState(s => ({ ...s, phase: 'questions', questionHistory: [q1.id], currentQuestionIndex: 0 }));
  };

  const handleSingleSelect = (answerId: string) => {
    if (!currentQuestion) return;
    const option = currentQuestion.options.find(o => o.id === answerId);
    if (!option) return;

    const newScores = addPoints(option.points, state.scores);
    const answer: UserAnswer = { questionId: currentQuestion.id, answerIds: [answerId] };
    const newAnswers = [...state.answers.filter(a => a.questionId !== currentQuestion.id), answer];

    // Determine next question
    let nextId = option.branch || currentQuestion.defaultNext;
    if (option.interstitial) {
      setState(s => ({ ...s, interstitialText: option.interstitial! }));
      setTimeout(() => {
        advanceToQuestion(nextId!, newScores, newAnswers, option);
        setState(s => ({ ...s, interstitialText: null }));
      }, 2000);
      // Update scores immediately for radar
      setState(s => ({
        ...s,
        scores: newScores,
        answers: newAnswers,
        revenueTier: option.revenueTier || s.revenueTier,
        growthAmbitionTag: option.tag || s.growthAmbitionTag,
      }));
      return;
    }

    advanceToQuestion(nextId!, newScores, newAnswers, option);
  };

  const advanceToQuestion = (nextId: string, newScores: DimensionScores, newAnswers: UserAnswer[], option: any) => {
    setDirection(1);
    if (nextId === 'done') {
      setState(s => ({
        ...s, phase: 'email-gate', scores: newScores, answers: newAnswers,
        revenueTier: option?.revenueTier || s.revenueTier,
        growthAmbitionTag: option?.tag || s.growthAmbitionTag,
      }));
      return;
    }
    setState(s => {
      const newHistory = [...s.questionHistory.slice(0, s.currentQuestionIndex + 1), nextId];
      return {
        ...s,
        scores: newScores,
        answers: newAnswers,
        questionHistory: newHistory,
        currentQuestionIndex: newHistory.length - 1,
        revenueTier: option?.revenueTier || s.revenueTier,
        growthAmbitionTag: option?.tag || s.growthAmbitionTag,
      };
    });
  };

  const handleMultiSubmit = () => {
    if (!currentQuestion) return;
    let newScores = { ...state.scores };
    multiSelected.forEach(id => {
      const opt = currentQuestion.options.find(o => o.id === id);
      if (opt) newScores = addPoints(opt.points, newScores);
    });
    // Bonus scoring
    if (currentQuestion.multiScoring) {
      const count = multiSelected.length;
      for (const t of currentQuestion.multiScoring.bonusThresholds) {
        if (count >= t.min && count <= t.max) {
          newScores = addPoints(t.points, newScores);
          break;
        }
      }
    }
    const answer: UserAnswer = { questionId: currentQuestion.id, answerIds: multiSelected };
    const newAnswers = [...state.answers.filter(a => a.questionId !== currentQuestion.id), answer];
    const nextId = currentQuestion.defaultNext!;
    setMultiSelected([]);
    advanceToQuestion(nextId, newScores, newAnswers, null);
  };

  const handleSliderSubmit = () => {
    if (!currentQuestion?.sliderConfig) return;
    const pts = currentQuestion.sliderConfig.pointMap[sliderVal] || [];
    const newScores = addPoints(pts, state.scores);
    const answer: UserAnswer = { questionId: currentQuestion.id, answerIds: [], sliderValue: sliderVal };
    const newAnswers = [...state.answers.filter(a => a.questionId !== currentQuestion.id), answer];
    advanceToQuestion(currentQuestion.defaultNext!, newScores, newAnswers, null);
  };

  const goBack = () => {
    if (state.currentQuestionIndex <= 0) return;
    setDirection(-1);
    // Revert scores from the current question answer
    const prevIndex = state.currentQuestionIndex - 1;
    // Simple approach: recalculate scores from scratch
    let recalcScores = { ...INITIAL_SCORES };
    const relevantAnswers = state.answers.filter(a =>
      state.questionHistory.slice(0, state.currentQuestionIndex).includes(a.questionId)
    );
    relevantAnswers.forEach(ans => {
      const q = diagnosticQuestions.find(qq => qq.id === ans.questionId);
      if (!q) return;
      if (q.type === 'slider' && q.sliderConfig && ans.sliderValue !== undefined) {
        const pts = q.sliderConfig.pointMap[ans.sliderValue] || [];
        recalcScores = addPoints(pts, recalcScores);
      } else if (q.type === 'multi') {
        ans.answerIds.forEach(aid => {
          const opt = q.options.find(o => o.id === aid);
          if (opt) recalcScores = addPoints(opt.points, recalcScores);
        });
        if (q.multiScoring) {
          const count = ans.answerIds.length;
          for (const t of q.multiScoring.bonusThresholds) {
            if (count >= t.min && count <= t.max) {
              recalcScores = addPoints(t.points, recalcScores);
              break;
            }
          }
        }
      } else {
        ans.answerIds.forEach(aid => {
          const opt = q.options.find(o => o.id === aid);
          if (opt) recalcScores = addPoints(opt.points, recalcScores);
        });
      }
    });
    setState(s => ({
      ...s,
      currentQuestionIndex: prevIndex,
      scores: recalcScores,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!state.formData.firstName.trim()) errs.firstName = 'Required';
    if (!state.formData.email.trim()) errs.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.formData.email)) errs.email = 'Invalid email';
    setFormErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Log submission data
    const normalised = normaliseScores(state.scores);
    const total = getTotalPercentage(normalised);
    const stage = getGrowthStage(total);
    console.log('Growth Diagnostic submission:', {
      firstName: state.formData.firstName,
      email: '[redacted]',
      companyName: state.formData.companyName,
      revenueTier: state.revenueTier,
      growthStage: stage,
      totalScore: total,
      dimensionScores: normalised,
      growthAmbitionTag: state.growthAmbitionTag,
      answers: state.answers.map(a => ({ questionId: a.questionId, answerIds: a.answerIds })),
      completedAt: new Date().toISOString(),
    });

    setState(s => ({ ...s, phase: 'results' }));
  };

  const normalised = normaliseScores(state.scores);
  const totalPct = getTotalPercentage(normalised);
  const growthStage = getGrowthStage(totalPct);
  const stageInfo = GROWTH_STAGE_INFO[growthStage];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  // Existing answer for current question (for pre-filling on back)
  const existingAnswer = currentQuestion ? state.answers.find(a => a.questionId === currentQuestion.id) : null;

  const toggleMulti = (id: string) => {
    setMultiSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  // Share handlers
  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://www.grpl.com.au/growth-diagnostic');
  };

  const handleShareLinkedIn = () => {
    const text = encodeURIComponent("Just took GRPL's Growth Diagnostic. Interesting to see where the gaps actually are. Free tool for any business trying to figure out their marketing priorities.");
    const url = encodeURIComponent('https://www.grpl.com.au/growth-diagnostic');
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-foreground text-background">
      <SEO
        title="Free Growth Diagnostic | Unlock A Clear View | GRPL"
        description="Take GRPL's free 3-minute Growth Diagnostic. Discover your growth stage, identify hidden gaps in your marketing, and get a personalised action plan."
        canonical="https://www.grpl.com.au/growth-diagnostic"
        jsonLd={[jsonLd]}
      />

      {/* Progress bar */}
      {state.phase !== 'intro' && state.phase !== 'results' && (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-background/10">
          <motion.div
            className="h-full bg-accent"
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}

      {/* Mini radar chart (desktop only, during questions) */}
      {state.phase === 'questions' && (
        <div className="hidden lg:block fixed top-8 right-8 z-40 w-[140px] h-[140px] opacity-60">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData} cx="50%" cy="50%">
              <PolarGrid stroke="hsl(0, 0%, 30%)" />
              <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 8, fill: 'hsl(0, 0%, 60%)' }} />
              <Radar dataKey="score" fill="hsl(20, 100%, 50%)" fillOpacity={0.3} stroke="hsl(20, 100%, 50%)" strokeWidth={1.5} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* INTRO */}
      {state.phase === 'intro' && (
        <div className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-center"
          >
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-6">Free Growth Diagnostic</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Where Is Your Growth Actually Stuck?
            </h1>
            <p className="text-background/60 text-lg font-light mb-8">
              Most businesses know something is not working. Few know exactly what, or what to do about it.
            </p>
            <div className="text-left max-w-md mx-auto mb-10 space-y-3 text-background/70 font-light">
              <p>This 3-minute diagnostic asks the questions a fractional CMO would ask in a first meeting. You will get:</p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-3"><span className="text-accent mt-0.5">→</span> Your Growth Maturity Score across 6 dimensions</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-0.5">→</span> A visual map of where your gaps are</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-0.5">→</span> Your Growth Stage profile (where you sit on the maturity curve)</li>
                <li className="flex items-start gap-3"><span className="text-accent mt-0.5">→</span> Specific, actionable next steps. Not generic advice.</li>
              </ul>
            </div>

            {/* Skeleton radar preview */}
            <div className="w-48 h-48 mx-auto mb-10 opacity-20">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={Object.keys(DIMENSION_LABELS).map(k => ({ dimension: DIMENSION_LABELS[k as Dimension], score: 50 }))}>
                  <PolarGrid stroke="hsl(0, 0%, 50%)" />
                  <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 9, fill: 'hsl(0, 0%, 50%)' }} />
                  <Radar dataKey="score" fill="hsl(0, 0%, 40%)" fillOpacity={0.15} stroke="hsl(0, 0%, 40%)" />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <Button
              variant="hero"
              size="xl"
              className="bg-accent text-accent-foreground hover:bg-accent/85 animate-pulse"
              onClick={startDiagnostic}
            >
              Start the Diagnostic
            </Button>
            <p className="text-background/40 text-xs mt-4 font-light">
              Takes about 3 minutes. No login required. Your results are private.
            </p>
          </motion.div>
        </div>
      )}

      {/* INTERSTITIAL */}
      <AnimatePresence>
        {state.interstitialText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 px-6"
          >
            <p className="text-accent text-xl sm:text-2xl font-light text-center max-w-lg">{state.interstitialText}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QUESTIONS */}
      {state.phase === 'questions' && currentQuestion && !state.interstitialText && (
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentQuestion.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full max-w-xl"
            >
              <p className="text-background/40 text-xs font-medium mb-6 tracking-widest uppercase">
                Question {state.currentQuestionIndex + 1} of {totalQuestions}
              </p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
                {currentQuestion.question}
              </h2>
              {currentQuestion.context && (
                <p className="text-background/50 font-light mb-8 text-sm">{currentQuestion.context}</p>
              )}

              {/* SINGLE SELECT */}
              {(currentQuestion.type === 'single' || currentQuestion.type === 'swipe') && (
                <div className="space-y-3">
                  {currentQuestion.options.map(opt => {
                    const isSelected = existingAnswer?.answerIds.includes(opt.id);
                    const swipeColors = currentQuestion.type === 'swipe' ? {
                      0: 'border-green-500/40 hover:bg-green-500/10',
                      [currentQuestion.options.length - 1]: 'border-red-500/40 hover:bg-red-500/10',
                    } : {};
                    const idx = currentQuestion.options.indexOf(opt);
                    const colorClass = swipeColors[idx] || '';
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSingleSelect(opt.id)}
                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                          isSelected
                            ? 'border-accent bg-accent/10 text-background'
                            : `border-background/10 hover:border-background/30 text-background/80 hover:text-background ${colorClass}`
                        }`}
                      >
                        <span className="font-medium text-sm">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* MULTI SELECT */}
              {currentQuestion.type === 'multi' && (
                <div className="space-y-3">
                  {currentQuestion.options.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => toggleMulti(opt.id)}
                      className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center gap-3 ${
                        multiSelected.includes(opt.id)
                          ? 'border-accent bg-accent/10 text-background'
                          : 'border-background/10 hover:border-background/30 text-background/80'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                        multiSelected.includes(opt.id) ? 'bg-accent border-accent' : 'border-background/30'
                      }`}>
                        {multiSelected.includes(opt.id) && <Check className="w-3 h-3 text-foreground" />}
                      </div>
                      <span className="font-medium text-sm">{opt.label}</span>
                    </button>
                  ))}
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/85"
                    onClick={handleMultiSubmit}
                  >
                    Continue
                  </Button>
                </div>
              )}

              {/* SLIDER */}
              {currentQuestion.type === 'slider' && currentQuestion.sliderConfig && (
                <div className="space-y-6 mt-8">
                  <Slider
                    value={[sliderVal]}
                    onValueChange={v => setSliderVal(v[0])}
                    min={currentQuestion.sliderConfig.min}
                    max={currentQuestion.sliderConfig.max}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-background/40 font-light">
                    <span className="max-w-[40%]">{currentQuestion.sliderConfig.leftLabel}</span>
                    <span className="max-w-[40%] text-right">{currentQuestion.sliderConfig.rightLabel}</span>
                  </div>
                  <div className="text-center text-3xl font-black text-accent">{sliderVal}</div>
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/85"
                    onClick={handleSliderSubmit}
                  >
                    Continue
                  </Button>
                </div>
              )}

              {/* BACK BUTTON */}
              {state.currentQuestionIndex > 0 && (
                <button
                  onClick={goBack}
                  className="mt-6 text-background/40 hover:text-background/70 text-sm font-light flex items-center gap-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous question
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* EMAIL GATE */}
      {state.phase === 'email-gate' && (
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md text-center"
          >
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Complete</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">Your Growth Profile is ready.</h2>

            {/* Animated full radar */}
            <div className="w-56 h-56 mx-auto mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(0, 0%, 30%)" />
                  <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 9, fill: 'hsl(0, 0%, 60%)' }} />
                  <Radar dataKey="score" fill="hsl(20, 100%, 50%)" fillOpacity={0.3} stroke="hsl(20, 100%, 50%)" strokeWidth={2} isAnimationActive />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <p className="text-background/60 font-light mb-8 text-sm">
              Enter your details below to see your full results, including your Growth Stage, dimension scores, and personalised recommendations.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              <div>
                <Label className="text-background/70 text-xs">First Name *</Label>
                <Input
                  value={state.formData.firstName}
                  onChange={e => setState(s => ({ ...s, formData: { ...s.formData, firstName: e.target.value } }))}
                  className="bg-background/5 border-background/10 text-background placeholder:text-background/30 mt-1"
                  placeholder="Your first name"
                />
                {formErrors.firstName && <p className="text-red-400 text-xs mt-1">{formErrors.firstName}</p>}
              </div>
              <div>
                <Label className="text-background/70 text-xs">Email *</Label>
                <Input
                  type="email"
                  value={state.formData.email}
                  onChange={e => setState(s => ({ ...s, formData: { ...s.formData, email: e.target.value } }))}
                  className="bg-background/5 border-background/10 text-background placeholder:text-background/30 mt-1"
                  placeholder="you@company.com"
                />
                {formErrors.email && <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <Label className="text-background/70 text-xs">Company Name</Label>
                <Input
                  value={state.formData.companyName}
                  onChange={e => setState(s => ({ ...s, formData: { ...s.formData, companyName: e.target.value } }))}
                  className="bg-background/5 border-background/10 text-background placeholder:text-background/30 mt-1"
                  placeholder="Your company"
                />
              </div>
              <div>
                <Label className="text-background/70 text-xs">Phone</Label>
                <Input
                  type="tel"
                  value={state.formData.phone}
                  onChange={e => setState(s => ({ ...s, formData: { ...s.formData, phone: e.target.value } }))}
                  className="bg-background/5 border-background/10 text-background placeholder:text-background/30 mt-1"
                  placeholder="+61 4XX XXX XXX"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/85">
                See My Results
              </Button>
              <p className="text-background/30 text-xs text-center font-light">
                We will send you a copy of your results. No spam, just your diagnostic.
              </p>
            </form>
          </motion.div>
        </div>
      )}

      {/* RESULTS */}
      {state.phase === 'results' && (
        <div className="min-h-screen px-6 py-20 print:bg-white print:text-black">
          <div className="max-w-3xl mx-auto">
            {/* Growth Stage Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl p-8 sm:p-12 mb-12 text-center"
              style={{ background: `linear-gradient(135deg, ${stageInfo.color}22, ${stageInfo.color}08)`, border: `1px solid ${stageInfo.color}33` }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: stageInfo.color }}>
                Your Growth Stage
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">{stageInfo.title}</h2>
              <p className="text-lg font-light text-background/60 mb-6">{stageInfo.subtitle}</p>
              <p className="text-background/70 font-light text-sm leading-relaxed max-w-xl mx-auto">{stageInfo.description}</p>

              {/* Maturity curve indicator */}
              <div className="mt-8 flex items-center gap-1 max-w-md mx-auto">
                {(['foundation', 'traction', 'scale', 'optimise'] as const).map(s => (
                  <div key={s} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className={`h-2 w-full rounded-full transition-all ${s === growthStage ? 'scale-y-150' : 'opacity-30'}`}
                      style={{ backgroundColor: GROWTH_STAGE_INFO[s].color }}
                    />
                    <span className={`text-[10px] ${s === growthStage ? 'font-bold text-background' : 'text-background/30'}`}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Full Radar Chart */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-12">
              <h3 className="text-xl font-black tracking-tight mb-6 text-center">Your Growth Profile</h3>
              <div className="w-full max-w-[400px] h-[350px] mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(0, 0%, 25%)" />
                    <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 11, fill: 'hsl(0, 0%, 70%)' }} />
                    <Radar
                      dataKey="score"
                      fill="hsl(20, 100%, 50%)"
                      fillOpacity={0.25}
                      stroke="hsl(20, 100%, 50%)"
                      strokeWidth={2}
                      isAnimationActive
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Dimension scores list */}
              <div className="space-y-4 mt-8">
                {(Object.entries(normalised) as [Dimension, number][]).map(([dim, score]) => (
                  <div key={dim} className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: getDimensionColor(score) }} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm">{DIMENSION_LABELS[dim]}</span>
                        <span className="text-sm font-mono" style={{ color: getDimensionColor(score) }}>{score}%</span>
                      </div>
                      <p className="text-background/50 text-xs font-light">{getDimensionAssessment(dim, score)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top 3 Priority Actions */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-12">
              <h3 className="text-xl font-black tracking-tight mb-6">Your Top 3 Priority Actions</h3>
              <div className="space-y-4">
                {getTop3Gaps(normalised).map((dim, i) => {
                  const rec = GAP_RECOMMENDATIONS[dim];
                  return (
                    <div key={dim} className="rounded-xl border border-background/10 p-6">
                      <div className="flex items-start gap-3">
                        <span className="text-accent font-black text-lg">{i + 1}</span>
                        <div>
                          <h4 className="font-bold text-sm mb-2">{rec.title}</h4>
                          <p className="text-background/60 text-sm font-light mb-3">{rec.body}</p>
                          <Link to={rec.link} className="text-accent text-sm font-medium hover:underline">
                            {rec.linkText} →
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Personalised Service Recommendation */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-12">
              {(() => {
                const service = getRecommendedService(growthStage, state.growthAmbitionTag);
                return (
                  <div className="rounded-xl bg-accent/10 border border-accent/20 p-8 text-center">
                    <p className="text-background/50 text-sm font-light mb-2">
                      Based on your Growth Profile, the GRPL service most likely to have the highest impact is:
                    </p>
                    <h3 className="text-2xl font-black tracking-tight mb-3 text-accent">{service.name}</h3>
                    <p className="text-background/60 text-sm font-light mb-6 max-w-md mx-auto">{service.description}</p>
                    <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85" asChild>
                      <Link to={service.path}>Learn More</Link>
                    </Button>
                  </div>
                );
              })()}
            </motion.div>

            {/* CTA Block */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mb-12 text-center">
              <h3 className="text-2xl font-black tracking-tight mb-3">Want to talk through your results?</h3>
              <p className="text-background/60 font-light text-sm mb-6 max-w-lg mx-auto">
                Every GRPL engagement starts with a conversation. No pitch, no pressure. Just a candid discussion about where you are, where you want to be, and whether GRPL is the right fit.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85" asChild>
                  <Link to="/contact">Book a Free Strategy Call</Link>
                </Button>
                <Link to="/services" className="text-background/50 text-sm hover:text-background transition-colors font-light">
                  Or explore all GRPL services →
                </Link>
              </div>
            </motion.div>

            {/* Share / Save */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap items-center justify-center gap-3 pb-12">
              <button onClick={handlePrint} className="px-4 py-2 rounded-full border border-background/20 text-background/60 hover:text-background hover:border-background/40 bg-transparent text-sm font-semibold transition-all">
                Download PDF
              </button>
              <button onClick={handleShareLinkedIn} className="px-4 py-2 rounded-full border border-background/20 text-background/60 hover:text-background hover:border-background/40 bg-transparent text-sm font-semibold transition-all">
                Share on LinkedIn
              </button>
              <button onClick={handleCopyLink} className="px-4 py-2 rounded-full border border-background/20 text-background/60 hover:text-background hover:border-background/40 bg-transparent text-sm font-semibold transition-all">
                Copy Link
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
