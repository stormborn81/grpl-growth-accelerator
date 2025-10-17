import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-foreground/70">
                Schedule a discovery call to discuss your marketing needs
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2aEHN-quI3FFLXnJ_fBgsVi9-Z6_2WK-Ws5-lArN72_NsDR08H-s93os7bSdsacJA4nl0YSRID?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Google Calendar Appointment Scheduling"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
