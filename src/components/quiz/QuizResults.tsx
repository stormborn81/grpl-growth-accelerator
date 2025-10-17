import { QuizResult } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";
import buttonOctagon from "@/assets/button-octagon.png";

interface QuizResultsProps {
  result: QuizResult;
  answers: { [key: number]: number };
  onRestart: () => void;
}

const QuizResults = ({ result, answers, onRestart }: QuizResultsProps) => {
  const getIcon = () => {
    switch (result.tier) {
      case 'transform':
        return <AlertCircle className="w-16 h-16 text-accent" />;
      case 'scale':
        return <TrendingUp className="w-16 h-16 text-accent" />;
      case 'elevate':
        return <CheckCircle2 className="w-16 h-16 text-accent" />;
    }
  };

  const getBgGradient = () => {
    switch (result.tier) {
      case 'transform':
        return 'from-red-50 to-orange-50';
      case 'scale':
        return 'from-orange-50 to-yellow-50';
      case 'elevate':
        return 'from-green-50 to-emerald-50';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Score Banner */}
      <div className={`bg-gradient-to-br ${getBgGradient()} rounded-2xl p-8 md:p-12 mb-8 text-center`}>
        <div className="flex justify-center mb-6">
          {getIcon()}
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
          {result.tierTitle}
        </h2>
        <div className="text-6xl md:text-7xl font-black text-accent mb-4">
          {result.score}<span className="text-3xl text-muted-foreground">/30</span>
        </div>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          {result.tierDescription}
        </p>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {result.strengths.length > 0 && (
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-xl font-black text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Your Strengths
            </h3>
            <ul className="space-y-2">
              {result.strengths.map((strength, index) => (
                <li key={index} className="text-foreground/80 flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {result.weaknesses.length > 0 && (
          <div className="bg-orange-50 rounded-xl p-6">
            <h3 className="text-xl font-black text-foreground mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              Areas for Growth
            </h3>
            <ul className="space-y-2">
              {result.weaknesses.map((weakness, index) => (
                <li key={index} className="text-foreground/80 flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-[#000000] rounded-2xl p-8 md:p-12 text-center text-white mb-6">
        <h3 className="text-3xl md:text-4xl font-black mb-6">
          Ready to {result.tier === 'elevate' ? 'Elevate Further' : result.tier === 'scale' ? 'Scale Smarter' : 'Transform Your Marketing'}?
        </h3>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          GRPL specialises in helping businesses like yours {
            result.tier === 'elevate' 
              ? 'unlock advanced growth opportunities and expand into new markets'
              : result.tier === 'scale'
              ? 'optimise their marketing operations and maximise ROI'
              : 'build a solid marketing foundation that drives sustainable growth'
          }.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={() => window.location.href = 'mailto:hello@grpl.co?subject=Discovery Call Request'}
          >
            {result.cta.primary}
            <img src={buttonOctagon} alt="" className="ml-2 h-3 w-3" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10"
            onClick={() => window.location.href = 'mailto:hello@grpl.co?subject=Marketing Audit Request'}
          >
            {result.cta.secondary}
            <img src={buttonOctagon} alt="" className="ml-2 h-3 w-3 opacity-50" />
          </Button>
        </div>
        <div className="mt-8 text-sm text-white/60">
          <p>Questions? Email us at <a href="mailto:hello@grpl.co" className="underline hover:text-white transition-colors">hello@grpl.co</a></p>
        </div>
      </div>

      {/* Retake Button */}
      <div className="text-center">
        <Button variant="outline" onClick={onRestart}>
          Retake Assessment
        </Button>
      </div>
    </div>
  );
};

export default QuizResults;
