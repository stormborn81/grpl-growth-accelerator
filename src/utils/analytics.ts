// Google Analytics event tracking utility
// Uses the gtag global defined in index.html

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// --- Diagnostic funnel events ---
export const trackDiagnosticStart = () =>
  trackEvent('diagnostic_start');

export const trackDiagnosticQuestionAnswered = (questionId: string, questionIndex: number, totalQuestions: number) =>
  trackEvent('diagnostic_question_answered', { question_id: questionId, question_index: questionIndex, total_questions: totalQuestions });

export const trackDiagnosticFormViewed = () =>
  trackEvent('diagnostic_form_viewed');

export const trackDiagnosticComplete = (growthStage: string, totalScore: number) =>
  trackEvent('diagnostic_complete', { growth_stage: growthStage, total_score: totalScore });

// --- Contact / CTA events ---
export const trackContactPageView = () =>
  trackEvent('contact_page_view');

export const trackBookCallClick = (source: string) =>
  trackEvent('book_call_click', { source });

export const trackHealthCheckClick = (source: string) =>
  trackEvent('health_check_click', { source });

// --- Engagement events ---
export const trackCTAClick = (ctaName: string, source: string) =>
  trackEvent('cta_click', { cta_name: ctaName, source });

export const trackShareClick = (method: string) =>
  trackEvent('share_click', { method });

export const trackServicePageView = (serviceName: string) =>
  trackEvent('service_page_view', { service_name: serviceName });

export const trackBlogPostView = (postSlug: string) =>
  trackEvent('blog_post_view', { post_slug: postSlug });
