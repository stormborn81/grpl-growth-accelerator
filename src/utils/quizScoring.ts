import { QuizResult, QUIZ_QUESTIONS } from "@/types/quiz";

export const calculateQuizResult = (answers: { [key: number]: number }): QuizResult => {
  const score = Object.values(answers).reduce((sum, value) => sum + value, 0);
  
  // Determine tier
  let tier: 'transform' | 'scale' | 'elevate';
  let tierTitle: string;
  let tierDescription: string;
  let cta: { primary: string; secondary: string };

  if (score <= 14) {
    tier = 'transform';
    tierTitle = 'Transform';
    tierDescription = "Your marketing foundation needs work, but that's exactly where GRPL excels. We'll help you build the missing pieces: brand strategy, positioning, channel mix, and martech foundations.";
    cta = {
      primary: 'Book Discovery Call',
      secondary: 'Get Free Health Check Report'
    };
  } else if (score <= 22) {
    tier = 'scale';
    tierTitle = 'Scale';
    tierDescription = "You have a solid foundation, but there's room for optimisation. GRPL can help you move from solid to exceptional with targeted improvements in key areas.";
    cta = {
      primary: 'Book Strategy Workshop',
      secondary: 'Request MarTech Audit'
    };
  } else {
    tier = 'elevate';
    tierTitle = 'Elevate';
    tierDescription = 'Congratulations! Your marketing engine is performing well. GRPL can help you unlock advanced growth opportunities and explore new markets.';
    cta = {
      primary: 'Book Growth Strategy Session',
      secondary: 'Download Advanced Playbook'
    };
  }

  // Identify strengths and weaknesses
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  QUIZ_QUESTIONS.forEach((question) => {
    const answer = answers[question.id];
    if (answer === 3) {
      strengths.push(question.pillar);
    } else if (answer <= 1) {
      weaknesses.push(question.pillar);
    }
  });

  return {
    score,
    tier,
    tierTitle,
    tierDescription,
    cta,
    strengths,
    weaknesses
  };
};
