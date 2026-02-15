import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import buttonOctagon from "@/assets/button-octagon.png";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 bg-grpl-black text-grpl-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
        <img src="/src/assets/octagon-rings.png" alt="" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-grpl-white">
            Ready to Turn Marketing Into a Growth Engine?
          </h2>
          
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8"></div>
          
          <p className="text-xl text-grpl-white/70 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Start with a free discovery call or run a confidential marketing health check. No pitch. No pressure. Just a conversation about where you are and where you want to be.
          </p>
          
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" onClick={() => window.open('https://calendar.app.google/uQKcAZf3Z9cbxe9o8', '_blank')}>
                Book a Discovery Call
                <img src={buttonOctagon} alt="" className="ml-2 h-3 w-3" />
              </Button>
              <Button variant="heroSecondary" size="lg" onClick={() => navigate('/marketing-health-check')}>
                Run Marketing Health Check
                <img src={buttonOctagon} alt="" className="ml-2 h-3 w-3 opacity-50" />
              </Button>
            </div>
            <p className="text-sm text-grpl-white/60 font-light">Free. Confidential. Instant results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
