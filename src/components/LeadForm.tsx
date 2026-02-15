interface LeadFormProps {
  heading?: string;
  subtext?: string;
}

const LeadForm = ({
  heading = "Start the Conversation",
  subtext = "Tell us about your business and we'll schedule a free strategy call.",
}: LeadFormProps) => {
  return (
    <div className="bg-secondary rounded-lg p-8 md:p-12">
      <h3 className="text-2xl font-black tracking-tight mb-2">{heading}</h3>
      <p className="text-muted-foreground font-light mb-8">{subtext}</p>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/d/cvbv-65p-v73"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
};

export default LeadForm;
