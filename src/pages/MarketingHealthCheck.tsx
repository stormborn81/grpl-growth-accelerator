import { useState } from "react";
import { QUIZ_QUESTIONS } from "@/types/quiz";
import { calculateQuizResult } from "@/utils/quizScoring";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizResults from "@/components/quiz/QuizResults";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoHorizontal from "@/assets/logo-horizontal.png";

const MarketingHealthCheck = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: number) => {
    setAnswers({
      ...answers,
      [QUIZ_QUESTIONS[currentQuestion].id]: value
    });
  };

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress = ((Object.keys(answers).length) / QUIZ_QUESTIONS.length) * 100;
  const isAnswered = answers[QUIZ_QUESTIONS[currentQuestion]?.id] !== undefined;

  if (showResults) {
    const result = calculateQuizResult(answers);
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-background sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-6 lg:px-8 py-4">
            <Link to="/">
              <img src={logoHorizontal} alt="GRPL" className="h-8" />
            </Link>
          </div>
        </header>

        <main className="py-12 md:py-20 px-6">
          <QuizResults result={result} answers={answers} onRestart={handleRestart} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <Link to="/">
            <img src={logoHorizontal} alt="GRPL" className="h-8" />
          </Link>
        </div>
      </header>

      <main className="py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
              Marketing Health Check
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover where your marketing stands and unlock personalised insights to accelerate growth.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-muted-foreground">
                Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <span className="text-sm font-semibold text-accent">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-8 shadow-sm">
            <QuizQuestion
              question={QUIZ_QUESTIONS[currentQuestion]}
              selectedValue={answers[QUIZ_QUESTIONS[currentQuestion].id] ?? null}
              onSelect={handleAnswer}
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <Button
              size="lg"
              onClick={handleNext}
              disabled={!isAnswered}
              className="gap-2 bg-accent hover:bg-accent/90"
            >
              {currentQuestion === QUIZ_QUESTIONS.length - 1 ? 'View Results' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketingHealthCheck;
