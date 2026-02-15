import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface LeadFormProps {
  heading?: string;
  subtext?: string;
}

const LeadForm = ({
  heading = "Start the Conversation",
  subtext = "Tell us about your business and we'll schedule a free strategy call.",
}: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    revenue: "",
    challenge: "",
  });

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address";
    if (!form.company.trim()) errs.company = "Company name is required";
    if (!form.revenue) errs.revenue = "Please select a revenue range";
    if (!form.challenge.trim()) errs.challenge = "Please describe your challenge";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    console.log("Lead form submission:", { ...form, email: "[redacted]" });
    setSubmitted(true);
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  if (submitted) {
    return (
      <div className="bg-secondary rounded-lg p-8 md:p-12 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-black tracking-tight mb-2">Thanks — we'll be in touch within 24 hours</h3>
        <p className="text-muted-foreground font-light">We'll schedule your free strategy call shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-secondary rounded-lg p-8 md:p-12">
      <h3 className="text-2xl font-black tracking-tight mb-2">{heading}</h3>
      <p className="text-muted-foreground font-light mb-8">{subtext}</p>
      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="lead-name">Full Name *</Label>
          <Input id="lead-name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lead-email">Email Address *</Label>
          <Input id="lead-email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lead-company">Company Name *</Label>
          <Input id="lead-company" value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Your company" />
          {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lead-phone">Phone Number</Label>
          <Input id="lead-phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+61 4XX XXX XXX" />
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label>Annual Revenue Range *</Label>
          <Select value={form.revenue} onValueChange={(v) => update("revenue", v)}>
            <SelectTrigger><SelectValue placeholder="Select revenue range" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="under-1m">Under $1M</SelectItem>
              <SelectItem value="1m-5m">$1M – $5M</SelectItem>
              <SelectItem value="5m-15m">$5M – $15M</SelectItem>
              <SelectItem value="15m-30m">$15M – $30M</SelectItem>
              <SelectItem value="30m-plus">$30M+</SelectItem>
            </SelectContent>
          </Select>
          {errors.revenue && <p className="text-xs text-destructive">{errors.revenue}</p>}
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="lead-challenge">What challenge are you facing? *</Label>
          <Textarea id="lead-challenge" rows={3} value={form.challenge} onChange={(e) => update("challenge", e.target.value)} placeholder="Describe your current marketing challenge..." />
          {errors.challenge && <p className="text-xs text-destructive">{errors.challenge}</p>}
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
            Book Your Free Strategy Call
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
