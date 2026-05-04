import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  XCircle, 
  FileText, 
  ShieldCheck, 
  UploadCloud, 
  Zap, 
  Map, 
  Lock, 
  Menu,
  X,
  Brain,
  Download,
  Shield,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to sign up");
      }
      toast({ title: "You're in!", description: "Your 7-day free trial is ready." });
      setEmail("");
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white overflow-x-hidden">

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"} border-b border-gray-100`}>
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <img src="/payrollproof-logo.png" alt="PayrollProof" className="h-10 w-auto" />
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <Button onClick={() => document.getElementById('hero-email')?.focus()} className="bg-secondary hover:bg-secondary/90 text-white rounded-lg px-6 font-bold shadow-sm">
              Start Free Trial
            </Button>
          </div>
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-3 shadow-xl">
              <a href="#how-it-works" className="block px-4 py-3 font-medium hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#pricing" className="block px-4 py-3 font-medium hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#faq" className="block px-4 py-3 font-medium hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <Button onClick={() => { document.getElementById('hero-email')?.focus(); setMobileMenuOpen(false); }} className="w-full bg-secondary">Start Free Trial</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section — left-aligned, two-column */}
      <section className="bg-white pt-16 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-7">
              <motion.div variants={fadeIn}>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
                  Built for construction subcontractors
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Certified payroll.<br />
                <span className="text-secondary">Done in minutes.</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-xl text-gray-500 leading-relaxed">
                Generate compliant WH-347 reports without switching payroll systems. Built by a former DOL investigator.
              </motion.p>

              <motion.div variants={fadeIn} className="space-y-4">
                <form onSubmit={handleSignUp} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <Input
                    id="hero-email"
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-13 px-4 rounded-xl border-gray-200 focus-visible:ring-secondary text-base flex-1 shadow-sm"
                    required
                  />
                  <Button type="submit" className="h-13 px-7 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold text-base shadow-md whitespace-nowrap">
                    Start Free Trial
                  </Button>
                </form>
                <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 font-semibold">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-secondary" /> 7-day free trial</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-secondary" /> No credit card needed</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-secondary" /> Cancel anytime</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero visual */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block">
              <div className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-blue-200 text-sm font-bold uppercase tracking-widest">Report Generated</span>
                  </div>
                  {[
                    { label: "Worker Classifications", status: "✓ Verified", ok: true },
                    { label: "Wage Rates", status: "✓ Compliant", ok: true },
                    { label: "Fringe Benefits", status: "✓ Checked", ok: true },
                    { label: "CWHSSA Overtime", status: "✓ Flagged & Fixed", ok: true },
                    { label: "WH-347 Output", status: "Ready to submit", ok: true },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-blue-100 font-medium">{row.label}</span>
                      <span className="text-secondary font-bold text-sm">{row.status}</span>
                    </div>
                  ))}
                  <div className="bg-secondary/20 border border-secondary/30 rounded-xl p-4 flex items-center justify-between mt-6">
                    <span className="font-bold">WH-347 Report</span>
                    <span className="text-secondary font-black text-sm flex items-center gap-1"><Download className="h-4 w-4" /> Download PDF</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Sound familiar?</h2>
              <div className="space-y-4">
                {[
                  "The paperwork is confusing—and nobody explains it",
                  "The GC keeps chasing you for certified payroll",
                  "You're not sure if workers are classified correctly",
                  "Your payroll software doesn't make WH-347s",
                  "You're worried about triggering an audit"
                ].map((pain, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-gray-800 font-semibold">{pain}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-3xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="text-6xl font-black mb-3 tracking-tighter">$197M+</div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  in back wages paid by contractors for Davis-Bacon violations. One misclassification case cost $2 million.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Three steps. That's it.</h2>
          <p className="text-gray-500 text-lg mb-16">No training. No switching payroll systems. No guessing.</p>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-1/6 w-2/3 h-0.5 bg-gray-100" />
            {[
              { step: "1", title: "Upload your payroll", desc: "Export from QuickBooks, Gusto, or Excel and drop it in.", icon: UploadCloud },
              { step: "2", title: "AI validates everything", desc: "We match workers to correct classifications and catch errors.", icon: Brain },
              { step: "3", title: "Download your WH-347", desc: "Compliant report, ready to submit. Every week, in minutes.", icon: Download }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white shadow-xl border-4 border-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative">
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm border-4 border-white">{item.step}</span>
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Built different.</h2>
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <div className="bg-gray-100 p-10">
              <h3 className="text-lg font-bold text-gray-400 mb-6 flex items-center gap-2"><XCircle className="h-5 w-5" /> Other Tools</h3>
              <ul className="space-y-4">
                {["Require switching payroll systems", "Built for agencies and big GCs", "Weeks of training", "$500–2,000+/month", "Built by software people"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-500 font-medium"><span className="text-red-400 font-bold">✗</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 border-l-8 border-secondary">
              <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-secondary" /> PayrollProof</h3>
              <ul className="space-y-4">
                {["Works with your existing payroll", "Built for subcontractors", "No training—upload and go", "Starting at $99/month", "Built by a former DOL investigator"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-900 font-bold"><CheckCircle2 className="h-5 w-5 text-secondary shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100 relative">
            <div className="absolute top-8 left-10 text-gray-200 text-8xl font-serif leading-none">"</div>
            <div className="relative z-10 pl-6">
              <blockquote className="text-xl md:text-2xl text-gray-700 font-serif italic leading-relaxed mb-8">
                I spent years as a DOL investigator reviewing certified payroll—then as an HR Director at a construction company filing it. I built this because I know exactly what compliance looks like, and how hard it is without the right tool.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold text-lg shrink-0">DG</div>
                <div>
                  <div className="font-bold text-gray-900">Darcie Gregoire, SPHR, SHRM-SCP</div>
                  <div className="text-gray-500 text-sm font-semibold">Former DOL Wage & Hour Investigator</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">What's included</h2>
          <p className="text-center text-gray-500 text-lg mb-14">Every plan. Every tier.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Smart Classification", desc: "Describe work in plain English. AI maps to the correct WD code." },
              { icon: Zap, title: "Pre-Submission Validation", desc: "Catch wage, fringe, and classification errors before you submit." },
              { icon: UploadCloud, title: "Any Payroll Format", desc: "QuickBooks, Gusto, Excel, or our template. No system switch." },
              { icon: FileText, title: "Instant WH-347 Output", desc: "PDF formatted exactly how agencies expect. Download and submit." },
              { icon: ShieldCheck, title: "Audit-Ready Records", desc: "Every decision documented and exportable. Ready when auditors call." },
              { icon: Map, title: "State Prevailing Wage", desc: "CA DIR, NY, and more coming soon.", badge: "Coming Soon" }
            ].map((feat, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <feat.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-gray-900">{feat.title}</h3>
                  {feat.badge && <span className="text-[10px] bg-blue-100 text-primary font-black px-2 py-0.5 rounded-full uppercase">{feat.badge}</span>}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Simple pricing.</h2>
          <p className="text-center text-gray-500 text-lg mb-10">Start free. No credit card needed.</p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-bold text-sm ${billing === "monthly" ? "text-gray-900" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setBilling(billing === "monthly" ? "annual" : "monthly")}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${billing === "annual" ? "bg-secondary" : "bg-gray-200"}`}
            >
              <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${billing === "annual" ? "translate-x-8" : "translate-x-1"}`} />
            </button>
            <span className={`font-bold text-sm ${billing === "annual" ? "text-gray-900" : "text-gray-400"}`}>
              Annual <span className="ml-1.5 bg-green-100 text-green-700 text-xs font-black px-2 py-0.5 rounded-full">SAVE 20%</span>
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col hover:shadow-lg transition-all">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Starter</div>
              <div className="text-xs text-gray-400 mb-6">For small specialty subs</div>
              <div className="mb-6">
                {billing === "annual" && <div className="text-gray-400 line-through text-sm font-bold mb-0.5">$99/mo</div>}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-gray-900">{billing === "monthly" ? "$99" : "$79"}</span>
                  <span className="text-gray-400 font-semibold">/mo</span>
                </div>
                {billing === "annual" && <div className="text-green-600 text-xs font-bold mt-1">Save $240/yr</div>}
              </div>
              <div className="w-full h-px bg-gray-100 mb-6" />
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl mb-8">
                <div className="text-3xl font-black text-primary">6</div>
                <div><div className="font-bold text-gray-900 text-sm">payroll generations/mo</div></div>
              </div>
              <Button onClick={() => document.getElementById('hero-email')?.focus()} variant="outline" className="w-full h-12 rounded-xl border-gray-300 text-gray-700 hover:border-secondary hover:text-secondary font-bold mt-auto">
                Start Free Trial
              </Button>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-3xl p-8 border-2 border-secondary shadow-xl flex flex-col relative scale-[1.03] z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-5 py-1 rounded-full text-xs font-black tracking-widest uppercase">Most Popular</div>
              <div className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-1">Professional</div>
              <div className="text-xs text-gray-400 mb-6">For growing contractors</div>
              <div className="mb-6">
                {billing === "annual" && <div className="text-gray-400 line-through text-sm font-bold mb-0.5">$179/mo</div>}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-secondary">{billing === "monthly" ? "$179" : "$143"}</span>
                  <span className="text-gray-400 font-semibold">/mo</span>
                </div>
                {billing === "annual" && <div className="text-green-600 text-xs font-bold mt-1">Save $432/yr</div>}
              </div>
              <div className="w-full h-px bg-gray-100 mb-6" />
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl mb-8">
                <div className="text-3xl font-black text-primary">25</div>
                <div><div className="font-bold text-gray-900 text-sm">payroll generations/mo</div></div>
              </div>
              <Button onClick={() => document.getElementById('hero-email')?.focus()} className="w-full h-12 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold shadow-lg mt-auto">
                Start Free Trial
              </Button>
            </div>

            {/* Business */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col hover:shadow-lg transition-all">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Business</div>
              <div className="text-xs text-gray-400 mb-6">For established contractors</div>
              <div className="mb-6">
                {billing === "annual" && <div className="text-gray-400 line-through text-sm font-bold mb-0.5">$349/mo</div>}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-gray-900">{billing === "monthly" ? "$349" : "$279"}</span>
                  <span className="text-gray-400 font-semibold">/mo</span>
                </div>
                {billing === "annual" && <div className="text-green-600 text-xs font-bold mt-1">Save $840/yr</div>}
              </div>
              <div className="w-full h-px bg-gray-100 mb-6" />
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl mb-8">
                <div className="text-3xl font-black text-primary">∞</div>
                <div><div className="font-bold text-gray-900 text-sm">payroll generations/mo</div></div>
              </div>
              <Button onClick={() => document.getElementById('hero-email')?.focus()} variant="outline" className="w-full h-12 rounded-xl border-gray-300 text-gray-700 hover:border-secondary hover:text-secondary font-bold mt-auto">
                Start Free Trial
              </Button>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm font-semibold">All plans include unlimited projects, wage determination lookup, compliance checking, e-signature, and PDF storage.</p>
            <p className="text-gray-400 text-sm font-semibold mt-1">Questions? <a href="mailto:hello@orderandoperations.com" className="text-primary hover:underline">hello@orderandoperations.com</a></p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Do I need to switch payroll systems?", a: "No. Keep using QuickBooks, Gusto, ADP, or whatever you use. Export, upload, done." },
              { q: "What if I don't know my workers' classifications?", a: "Describe what they did in plain English. We match it to the correct wage determination code and explain why." },
              { q: "Federal Davis-Bacon or state prevailing wage?", a: "Full federal Davis-Bacon support at launch. California DIR, New York, and others coming soon." },
              { q: "How is this different from LCPtracker?", a: "LCPtracker is built for agencies and large GCs. PayrollProof is built for subs who just need to get the form right and submit it." },
              { q: "What if I get audited?", a: "Our reports follow DOL standards and every classification decision is documented. We're a tool, not legal advice—consult a labor attorney for specific questions." },
              { q: "How do you protect my data?", a: "AES-256 encryption for all data. We only store the last 4 digits of SSNs—never the full number. Delete your data anytime." },
              { q: "Can I cancel anytime?", a: "Yes. Month-to-month, no contracts. Cancel from your dashboard, no questions asked." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-2xl border border-gray-100 px-6 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-gray-900 py-5 hover:no-underline text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-500 pb-5 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-800" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Ready to get compliant?</h2>
          <p className="text-blue-100 text-xl font-medium mb-10">Start your 7-day free trial. No credit card needed.</p>
          <form onSubmit={handleSignUp} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 px-5 rounded-xl border-none bg-white text-gray-900 text-base font-semibold shadow-2xl flex-1"
              required
            />
            <Button type="submit" className="h-14 px-8 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-black text-lg shadow-2xl">
              Start Free Trial
            </Button>
          </form>
          <p className="text-blue-200 text-sm font-semibold">No credit card · Cancel anytime</p>
        </div>
      </section>

      {/* Footer — minimal, one row, white */}
      <footer className="bg-white border-t border-gray-100 py-5">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-semibold">
          <span>© 2026 Order and Operations Consulting. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
            <a href="mailto:hello@orderandoperations.com" className="hover:text-gray-700 transition-colors">hello@orderandoperations.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
