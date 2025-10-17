import { QuizQuestion as QuizQuestionType } from "@/types/quiz";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

const QuizQuestion = ({ question, selectedValue, onSelect }: QuizQuestionProps) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-sm font-semibold text-accent mb-2 tracking-wide uppercase">
          {question.pillar}
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3">
          {question.question}
        </h3>
        <p className="text-sm text-muted-foreground italic">
          {question.rationale}
        </p>
      </div>

      <RadioGroup
        value={selectedValue?.toString() || ""}
        onValueChange={(value) => onSelect(parseInt(value))}
        className="space-y-3"
      >
        {question.answers.map((answer) => (
          <div
            key={answer.value}
            className={`relative flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-accent/50 ${
              selectedValue === answer.value
                ? "border-accent bg-accent/5"
                : "border-border bg-background"
            }`}
            onClick={() => onSelect(answer.value)}
          >
            <RadioGroupItem value={answer.value.toString()} id={`q${question.id}-${answer.value}`} className="mt-1" />
            <Label
              htmlFor={`q${question.id}-${answer.value}`}
              className="flex-1 cursor-pointer"
            >
              <div className="font-semibold text-foreground mb-1">
                {answer.value} – {answer.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {answer.description}
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default QuizQuestion;
