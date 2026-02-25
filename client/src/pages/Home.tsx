import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  XCircle, 
  FileText, 
  ShieldCheck, 
  UploadCloud, 
  Zap, 
  Clock, 
  Search, 
  Map, 
  Lock, 
  Menu,
  X,
  ChevronDown,
  Brain,
  Download,
  CreditCard,
  Phone,
  User,
  ExternalLink,
  Shield
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
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignUp = (e: React.FormEvent) => {
    // If you want to use Formspree, you can change the form tag to:
    // <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    // and remove this onSubmit handler.
    
    e.preventDefault();
    if (!email) return;
    
    console.log("Sign up:", email);
    
    // For a real production app on Replit, you would typically:
    // 1. Create a backend API endpoint (e.g., /api/waitlist)
    // 2. Use fetch() or axios to send the email to that endpoint
    // 3. Store it in a database (like Replit's Postgres)
    
    toast({
      title: "Early access requested!",
      description: "We've logged your interest (check the console!). In a full app, this would save to a database.",
    });
    setEmail("");
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-white py-4"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary tracking-tight">PayrollProof</span>
            </div>
            <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">by O&O Consulting</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <Button onClick={() => document.getElementById('hero-email')?.focus()} className="bg-secondary hover:bg-secondary/90 text-white rounded-lg px-6 font-bold shadow-sm">
              Sign Up Now
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4 shadow-xl"
            >
              <a href="#how-it-works" className="block px-4 py-3 font-medium hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#pricing" className="block px-4 py-3 font-medium hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#faq" className="block px-4 py-3 font-medium hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <Button onClick={() => { document.getElementById('hero-email')?.focus(); setMobileMenuOpen(false); }} className="w-full bg-secondary py-6 text-lg">
                Sign Up Now
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-8">
            <motion.div variants={fadeIn}>
              <Badge className="bg-[#f59e0b] text-[#451a03] hover:bg-[#f59e0b] border-none px-4 py-1.5 rounded-full font-bold text-sm shadow-sm">
                🚀 Early Access — 25% Off All Plans
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Stop struggling with <br/>
              <span className="text-primary">certified payroll.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Generate compliant WH-347 reports in minutes—not hours. AI-powered classification matching catches errors before they become penalties. Built by a former DOL investigator.
            </motion.p>
            
            <motion.div variants={fadeIn} className="max-w-xl mx-auto mt-10">
              <form onSubmit={handleSignUp} className="flex flex-col sm:flex-row gap-3">
                <Input 
                  id="hero-email"
                  type="email" 
                  placeholder="Enter your work email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 px-5 rounded-xl border-gray-200 focus-visible:ring-secondary text-lg flex-1 shadow-sm"
                  required
                />
                <Button type="submit" className="h-14 px-8 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold text-lg shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0">
                  Sign Up Now
                </Button>
              </form>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm text-gray-500 font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-secondary" /> No credit card required</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-secondary" /> 25% off early access</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-secondary" /> Cancel anytime</span>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                <Lock className="h-5 w-5" />
                <span className="font-bold text-sm">🔒 Bank-level encryption</span>
              </div>
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                <Shield className="h-5 w-5" />
                <span className="font-bold text-sm">🛡️ SOC 2 compliant</span>
              </div>
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                <FileText className="h-5 w-5" />
                <span className="font-bold text-sm">📋 DOL-compliant output</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-[#f9fafb] border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Sound familiar?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-5">
              {[
                "You won a prevailing wage job, but the paperwork is confusing",
                "The GC keeps asking where your certified payroll is",
                "You're not sure if you classified workers correctly",
                "Your payroll system doesn't create WH-347s",
                "You're worried about getting flagged in an audit"
              ].map((pain, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm border border-gray-100">
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-gray-900 font-bold text-lg leading-snug">{pain}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-primary p-12 rounded-[2rem] text-white text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">$197 Million+</div>
                <p className="text-xl md:text-2xl text-blue-100 font-medium">
                  in back wages paid by contractors for Davis-Bacon violations since 1985. One misclassification case alone cost $2 million.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-2xl text-gray-500 font-medium max-w-3xl mx-auto">
            You're not alone. Most subcontractors lose 3-5 hours per week on certified payroll—or risk mistakes that trigger costly penalties.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">There's a simpler way.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />
            
            {[
              {
                step: "1",
                title: "Upload your payroll",
                desc: "Export from QuickBooks, Gusto, or Excel. Use our template or upload your existing format. We map the data automatically.",
                icon: UploadCloud
              },
              {
                step: "2",
                title: "AI maps and validates",
                desc: "Our AI reads your wage determination, matches workers to correct classifications, and flags errors before they become penalties.",
                icon: Brain
              },
              {
                step: "3",
                title: "Download your WH-347",
                desc: "Get a compliant certified payroll report ready to submit. Every week. In minutes, not hours.",
                icon: Download
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform relative">
                  <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl border-4 border-white">
                    {item.step}
                  </span>
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Built different.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="bg-gray-100 p-12">
              <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-3">
                <XCircle className="h-6 w-6" /> Other Solutions
              </h3>
              <ul className="space-y-6">
                {[
                  "Require you to switch payroll systems",
                  "Built for agencies and large GCs",
                  "Weeks of training to learn",
                  "$500–2,000+/month",
                  "Built by software people",
                  "Check for completeness only"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-500 font-medium">
                    <span className="text-red-400 font-bold shrink-0">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-12 border-l-8 border-secondary">
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary" /> PayrollProof
              </h3>
              <ul className="space-y-6">
                {[
                  "Works with your existing payroll",
                  "Built for subcontractors like you",
                  "No training—upload and go",
                  "Starting at $74/month",
                  "Built by a former DOL investigator",
                  "Catches the errors that trigger audits"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-900 font-bold">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why trust us?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary rounded-full" />
              <div className="pl-10">
                <blockquote className="text-2xl md:text-3xl font-serif text-gray-700 italic leading-relaxed mb-8">
                  "I spent years as a DOL investigator reviewing certified payroll—and then as an HR Director at a construction company assisting payroll. I built this because I know exactly what compliance looks like—and how hard it is without help."
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="h-16 w-16 rounded-full bg-gray-200 border-2 border-secondary overflow-hidden shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold text-xl">DG</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">Darcie Gregoire, SPHR, SHRM-SCP</div>
                    <div className="text-gray-500 font-semibold">Former DOL Wage & Hour Investigator and HR Director</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
               <ShieldCheck className="w-48 h-48 text-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#f9fafb] border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Everything you need. Nothing you don't.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Smart Classification Matching",
                desc: "Describe what workers did in plain English. AI matches to correct wage determination codes and explains why."
              },
              {
                icon: Zap,
                title: "Pre-Submission Validation",
                desc: "Catch rate errors, fringe shortfalls, and classification mismatches before you submit—not during an audit."
              },
              {
                icon: UploadCloud,
                title: "Any Payroll Format",
                desc: "Upload from QuickBooks, Gusto, Excel, or use our template. No payroll system switch required."
              },
              {
                icon: FileText,
                title: "Instant WH-347 Generation",
                desc: "Compliant reports formatted exactly how agencies expect. Download as PDF, ready to submit."
              },
              {
                icon: ShieldCheck,
                title: "Audit-Ready Records",
                desc: "Every classification decision documented and exportable. Nothing to scramble for when auditors call."
              },
              {
                icon: Map,
                title: "State Prevailing Wage",
                desc: "California DIR, New York, and more. One tool for federal and state compliance.",
                badge: "Coming Soon"
              }
            ].map((feat, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <feat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{feat.title}</h3>
                  {feat.badge && <Badge className="bg-blue-100 text-primary border-none text-[10px] uppercase font-bold px-2">{feat.badge}</Badge>}
                </div>
                <p className="text-gray-500 leading-relaxed font-medium">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Simple pricing. Serious protection.</h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">Choose the plan that fits your business. All plans include unlimited certified payrolls.</p>
          </div>
          
          <div className="bg-[#f59e0b] text-center py-4 text-[#451a03] font-black tracking-widest text-sm rounded-t-2xl mb-8 flex items-center justify-center gap-2">
            <span>🎉 EARLY ACCESS: 25% OFF ALL PLANS — LIMITED TIME</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1: Starter */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col hover:shadow-xl transition-all">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">For small specialty subs</div>
              <div className="mb-8">
                <div className="text-gray-400 line-through text-lg font-bold mb-1">$99/mo</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-secondary">$74</span>
                  <span className="text-gray-500 font-bold">/mo</span>
                </div>
                <div className="text-gray-400 text-sm font-bold mt-2">Billed monthly · Cancel anytime</div>
              </div>
              <div className="w-full h-px bg-gray-100 mb-8" />
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "1 active project",
                  "Up to 15 workers",
                  "Unlimited certified payrolls",
                  "AI classification matching",
                  "Pre-submission validation",
                  "WH-347 PDF generation",
                  "Email support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-semibold text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => document.getElementById('hero-email')?.focus()} variant="outline" className="w-full h-14 rounded-xl border-secondary text-secondary hover:bg-secondary hover:text-white font-bold text-lg">
                Sign Up Now
              </Button>
            </div>

            {/* CARD 2: Professional */}
            <div className="bg-white rounded-3xl p-8 pricing-card-highlight flex flex-col relative scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-6 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">
                MOST POPULAR
              </div>
              <div className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-6">For growing contractors</div>
              <div className="mb-8">
                <div className="text-gray-400 line-through text-lg font-bold mb-1">$199/mo</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-secondary">$149</span>
                  <span className="text-gray-500 font-bold">/mo</span>
                </div>
                <div className="text-gray-400 text-sm font-bold mt-2">Billed monthly · Cancel anytime</div>
              </div>
              <div className="w-full h-px bg-gray-100 mb-8" />
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Everything in Starter, plus:",
                  "3 active projects",
                  "Up to 50 workers",
                  "Priority email support",
                  "Multi-state wage determinations",
                  "Classification audit log"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-bold text-gray-900">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => document.getElementById('hero-email')?.focus()} className="w-full h-14 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold text-lg shadow-lg">
                Sign Up Now
              </Button>
            </div>

            {/* CARD 3: Business */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col hover:shadow-xl transition-all">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">For established contractors</div>
              <div className="mb-8">
                <div className="text-gray-400 line-through text-lg font-bold mb-1">$399/mo</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-secondary">$299</span>
                  <span className="text-gray-500 font-bold">/mo</span>
                </div>
                <div className="text-gray-400 text-sm font-bold mt-2">Billed monthly · Cancel anytime</div>
              </div>
              <div className="w-full h-px bg-gray-100 mb-8" />
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Everything in Professional, plus:",
                  "Unlimited projects",
                  "Unlimited workers",
                  "Phone support",
                  "Dedicated account manager",
                  "Custom onboarding",
                  "API access (coming soon)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-semibold text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => document.getElementById('hero-email')?.focus()} variant="outline" className="w-full h-14 rounded-xl border-secondary text-secondary hover:bg-secondary hover:text-white font-bold text-lg">
                Sign Up Now
              </Button>
            </div>
          </div>
          
          <div className="mt-16 text-center text-gray-500 font-bold text-lg">
            All plans include a 30-day money-back guarantee. Questions? Email <a href="mailto:hello@orderandoperations.com" className="text-primary hover:underline">hello@orderandoperations.com</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-[#f9fafb] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Questions? We've got answers.</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "Do I need to switch payroll systems?",
                a: "No. Keep using QuickBooks, Gusto, ADP, or whatever you use now. Export your payroll data, upload it to PayrollProof, and we generate the certified payroll report. No migration, no disruption."
              },
              {
                q: "What if I don't know how to classify my workers?",
                a: "That's exactly what we solve. Describe what your workers did in plain English—like 'ran conduit and pulled wire'—and our AI matches it to the correct wage determination classification. We explain why, so you learn as you go."
              },
              {
                q: "Is this for federal Davis-Bacon or state prevailing wage?",
                a: "We fully support federal Davis-Bacon projects at launch. State prevailing wage support (California DIR, New York, and others) is coming soon."
              },
              {
                q: "How is this different from LCPtracker or eMars?",
                a: "Those tools are built for agencies to collect payrolls and for large GCs to manage compliance across dozens of subs. PayrollProof is built for you—the subcontractor who needs to get the form right and submit it. No training, no complexity, no enterprise sales process."
              },
              {
                q: "What if I get audited?",
                a: "Our reports are formatted to DOL standards, and our validation engine is built by someone who used to conduct those audits. You'll have clean documentation and records of every classification decision. That said, we're a tool—not legal advice. For specific compliance questions, consult a labor attorney."
              },
              {
                q: "How do you keep my data secure?",
                a: "We use bank-level encryption (AES-256) for all data at rest and in transit. We only store the last 4 digits of Social Security Numbers—never the full number. You can delete your data anytime. Our infrastructure is SOC 2 compliant."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. All plans are month-to-month with no long-term contracts. Cancel anytime from your dashboard—no questions asked."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-2xl border border-gray-100 px-6 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-xl font-bold text-gray-900 py-6 hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-500 font-medium pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-800" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter">Ready to stop dreading <br className="hidden md:block" /> certified payroll?</h2>
          <p className="text-2xl text-blue-100 font-bold mb-12">Sign up now and lock in 25% off before early access ends.</p>
          
          <form onSubmit={handleSignUp} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <Input 
              type="email" 
              placeholder="Enter your work email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-16 px-6 rounded-2xl border-none bg-white text-gray-900 text-xl font-bold shadow-2xl flex-1"
              required
            />
            <Button type="submit" className="h-16 px-10 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-xl shadow-2xl">
              Sign Up Now
            </Button>
          </form>
          
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-blue-200 font-black uppercase tracking-widest">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-secondary" /> No credit card required</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-secondary" /> 30-day guarantee</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left mb-16">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <ShieldCheck className="h-6 w-6 text-gray-500" />
                <span className="text-2xl font-black text-white tracking-tighter">PayrollProof</span>
              </div>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">by O&O Consulting</span>
            </div>
            
            <div className="flex justify-center gap-8 text-sm font-black uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            
            <div className="md:text-right">
              <div className="text-sm font-bold text-gray-500 mb-1">Questions?</div>
              <a href="mailto:hello@orderandoperations.com" className="text-lg font-black text-white hover:text-secondary transition-colors">hello@orderandoperations.com</a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
            © 2026 Order and Operations Consulting. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}