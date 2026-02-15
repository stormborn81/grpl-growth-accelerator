import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const MarketingHealthCheck = lazy(() => import("./pages/MarketingHealthCheck"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Privacy = lazy(() => import("./pages/Privacy"));
const HiringCMO = lazy(() => import("./pages/HiringCMO"));
const Blog = lazy(() => import("./pages/Blog"));
const FractionalCMOAustraliaGuide = lazy(() => import("./pages/blog/FractionalCMOAustraliaGuide"));
const FractionalCMOvsMarketingAgency = lazy(() => import("./pages/blog/FractionalCMOvsMarketingAgency"));
const WhatDoesChiefGrowthOfficerDo = lazy(() => import("./pages/blog/WhatDoesChiefGrowthOfficerDo"));
const FractionalCMOCostAustralia = lazy(() => import("./pages/blog/FractionalCMOCostAustralia"));
const AIReshapingCMORole2026 = lazy(() => import("./pages/blog/AIReshapingCMORole2026"));
const MarketingAuditFramework = lazy(() => import("./pages/blog/MarketingAuditFramework"));
const WhenReadyForFractionalCMO = lazy(() => import("./pages/blog/WhenReadyForFractionalCMO"));
const B2BMarketingLeadership = lazy(() => import("./pages/blog/B2BMarketingLeadership"));
const ServicesHub = lazy(() => import("./pages/Services"));
const ServiceFractionalCMO = lazy(() => import("./pages/services/FractionalCMO"));
const ServiceChiefGrowthOfficer = lazy(() => import("./pages/services/ChiefGrowthOfficer"));
const ServiceMarketingAudit = lazy(() => import("./pages/services/MarketingAudit"));
const ServiceOutsourcedMarketing = lazy(() => import("./pages/services/OutsourcedMarketingDepartment"));
const ServiceBrandFoundation = lazy(() => import("./pages/services/BrandFoundation"));
const ServiceGrowthProjects = lazy(() => import("./pages/services/GrowthProjects"));
const ServiceInterimCMO = lazy(() => import("./pages/services/InterimCMO"));
const FractionalCMOSydney = lazy(() => import("./pages/FractionalCMOSydney"));
const FractionalCMOMelbourne = lazy(() => import("./pages/FractionalCMOMelbourne"));
const FractionalCMOBrisbane = lazy(() => import("./pages/FractionalCMOBrisbane"));
const FractionalCMOPerth = lazy(() => import("./pages/FractionalCMOPerth"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <span className="animate-pulse text-muted-foreground">Loading...</span>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/marketing-health-check" element={<MarketingHealthCheck />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/hiring-cmo" element={<HiringCMO />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/fractional-cmo-australia-guide" element={<FractionalCMOAustraliaGuide />} />
              <Route path="/blog/fractional-cmo-vs-marketing-agency" element={<FractionalCMOvsMarketingAgency />} />
              <Route path="/blog/what-does-chief-growth-officer-do" element={<WhatDoesChiefGrowthOfficerDo />} />
              <Route path="/blog/fractional-cmo-cost-australia" element={<FractionalCMOCostAustralia />} />
              <Route path="/blog/ai-reshaping-cmo-role-2026" element={<AIReshapingCMORole2026 />} />
              <Route path="/blog/marketing-audit-framework" element={<MarketingAuditFramework />} />
              <Route path="/blog/when-ready-for-fractional-cmo" element={<WhenReadyForFractionalCMO />} />
              <Route path="/blog/b2b-marketing-leadership-strategy-execution" element={<B2BMarketingLeadership />} />
              <Route path="/services" element={<ServicesHub />} />
              <Route path="/services/fractional-cmo" element={<ServiceFractionalCMO />} />
              <Route path="/services/chief-growth-officer" element={<ServiceChiefGrowthOfficer />} />
              <Route path="/services/marketing-audit" element={<ServiceMarketingAudit />} />
              <Route path="/services/outsourced-marketing-department" element={<ServiceOutsourcedMarketing />} />
              <Route path="/services/brand-foundation" element={<ServiceBrandFoundation />} />
              <Route path="/services/growth-projects" element={<ServiceGrowthProjects />} />
              <Route path="/services/interim-cmo" element={<ServiceInterimCMO />} />
              <Route path="/hiring-cmo" element={<ServiceInterimCMO />} />
              <Route path="/fractional-cmo-sydney" element={<FractionalCMOSydney />} />
              <Route path="/fractional-cmo-melbourne" element={<FractionalCMOMelbourne />} />
              <Route path="/fractional-cmo-brisbane" element={<FractionalCMOBrisbane />} />
              <Route path="/fractional-cmo-perth" element={<FractionalCMOPerth />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
