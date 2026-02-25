import { useState } from "react";
import { motion } from "framer-motion";
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
  ChevronRight
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

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate form submission
    console.log("Waitlist joined:", email);
    toast({
      title: "You're on the list!",
      description: "We'll notify you when we launch.",
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
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary tracking-tight">PayrollProof</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <Button onClick={() => document.getElementById('join')?.focus()} className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-lg">
            <a href="#how-it-works" className="block px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#pricing" className="block px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="block px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <Button onClick={() => { document.getElementById('join')?.focus(); setMobileMenuOpen(false); }} className="w-full bg-primary hover:bg-primary/90">
              Join Waitlist
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium border border-blue-100 mb-4">
              <Zap className="h-4 w-4" />
              <span>The modern way to handle prevailing wage</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Stop struggling with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                certified payroll.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Generate compliant WH-347 reports in minutes—not hours. No training required. No payroll system switch. Built by a former DOL investigator.
            </motion.p>
            
            <motion.div variants={fadeIn} className="max-w-md mx-auto mt-10">
              <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-3">
                <Input 
                  id="join"
                  type="email" 
                  placeholder="name@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 px-4 rounded-xl border-gray-300 focus-visible:ring-primary shadow-sm flex-1"
                  required
                />
                <Button type="submit" className="h-12 px-8 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-medium shadow-sm w-full sm:w-auto">
                  Join the Waitlist
                </Button>
              </form>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500 font-medium">
                <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-secondary" /> No credit card required</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-secondary" /> 50% off early access</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sound familiar?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Most subcontractors lose 3-5 hours per week on certified payroll—or worse, make mistakes that trigger penalties.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                "You won a prevailing wage job, but the paperwork is confusing",
                "The GC keeps asking where your certified payroll is",
                "You're not sure if you classified workers correctly",
                "Your payroll system doesn't create WH-347s",
                "You're worried about getting flagged in an audit"
              ].map((pain, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{pain}</p>
                </div>
              ))}
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white hidden md:flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent pointer-events-none" />
              <div className="text-center space-y-4 relative z-10">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Stop wasting time</h3>
                <p className="text-gray-600">You're not alone. Let software do the heavy lifting so you can get back to building.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">There's a simpler way.</h2>
            <p className="text-xl text-gray-600">Generate perfect reports in three simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: UploadCloud,
                title: "1. Upload your payroll",
                desc: "Export from QuickBooks, Gusto, or Excel. Drop it in.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: Map,
                title: "2. We map and validate",
                desc: "AI matches workers to correct classifications and flags issues.",
                color: "bg-indigo-100 text-indigo-600"
              },
              {
                icon: FileText,
                title: "3. Download your WH-347",
                desc: "Compliant report ready to submit. Every week. In minutes.",
                color: "bg-green-100 text-secondary"
              }
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow group">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${step.color} group-hover:scale-110 transition-transform`}>
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built different.</h2>
            <p className="text-blue-200 text-xl">Designed specifically for subcontractors, not enterprise GCs.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="text-xl font-bold text-blue-200 mb-6 flex items-center gap-2">
                  <XCircle className="h-5 w-5" /> Other Tools
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><span className="text-blue-300 opacity-50">—</span> Require you to switch payroll systems</li>
                  <li className="flex items-start gap-3"><span className="text-blue-300 opacity-50">—</span> Built for agencies and big GCs</li>
                  <li className="flex items-start gap-3"><span className="text-blue-300 opacity-50">—</span> Weeks of training required</li>
                  <li className="flex items-start gap-3"><span className="text-blue-300 opacity-50">—</span> $200+/month expensive subscriptions</li>
                  <li className="flex items-start gap-3"><span className="text-blue-300 opacity-50">—</span> Built by software people</li>
                </ul>
              </div>
              <div className="p-8 md:p-12 bg-white/5">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" /> PayrollProof
                </h3>
                <ul className="space-y-4 font-medium">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-secondary shrink-0" /> Works with your existing payroll</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-secondary shrink-0" /> Built for subcontractors like you</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-secondary shrink-0" /> No training—just upload and go</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-secondary shrink-0" /> One project, one simple price</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-secondary shrink-0" /> Built by a former DOL investigator</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Why trust us?</h2>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative border border-gray-100">
            <svg className="absolute top-8 left-8 text-gray-200 h-16 w-16" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <div className="relative z-10 pl-4 md:pl-16">
              <blockquote className="font-serif text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-8">
                "I spent years as a DOL investigator reviewing certified payrolls—and then years at a construction company filing them. I've seen every mistake that triggers audits. I built this because I know exactly what compliance looks like—and how hard it is without help."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold text-xl">
                  JS
                </div>
                <div>
                  <div className="font-bold text-gray-900">John Smith</div>
                  <div className="text-primary font-medium text-sm">Former DOL Wage & Hour Investigator</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What you get</h2>
            <p className="text-xl text-gray-600">Everything you need for perfect compliance.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Search, title: "Wage determination lookup", desc: "Auto-pull correct rates for your project automatically." },
              { icon: Zap, title: "Smart classification matching", desc: "Describe work in plain English → we map to correct WD codes." },
              { icon: ShieldCheck, title: "Pre-submission validation", desc: "Catch errors and missing data before they become penalties." },
              { icon: FileText, title: "Compliant WH-347 output", desc: "Formatted perfectly, exactly how agencies expect to see it." },
              { icon: Map, title: "State prevailing wage", desc: "Federal Davis-Bacon ready. CA, NY, and more coming soon." },
              { icon: Lock, title: "Audit-ready records", desc: "Everything safely documented, encrypted, and exportable." }
            ].map((feat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <feat.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple pricing. No subscriptions.</h2>
            <p className="text-xl text-gray-600">Pay only for the projects you're working on.</p>
          </div>
          
          <div className="max-w-md mx-auto bg-white rounded-3xl border-2 border-primary shadow-xl overflow-hidden relative">
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary to-secondary" />
            <div className="bg-primary text-center py-2 text-sm font-medium text-white tracking-wide uppercase">
              Waitlist Special
            </div>
            
            <div className="p-8">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-extrabold text-gray-900">$79</span>
                <span className="text-gray-500 font-medium">/ project</span>
              </div>
              <p className="text-center text-secondary font-bold text-sm mb-8 bg-green-50 py-1 px-3 rounded-full inline-block mx-auto">50% off your first project</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited certified payrolls for that project",
                  "All workers, all weeks included",
                  "Wage determination lookup included",
                  "Priority email support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button onClick={() => document.getElementById('join')?.focus()} className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-sm">
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Questions? We've got answers.</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            {[
              {
                q: "Do I need to switch payroll systems?",
                a: "No. Keep using QuickBooks, Gusto, ADP, or whatever you use. Export, upload, done."
              },
              {
                q: "What if I don't know how to classify my workers?",
                a: "Describe what they did in plain English. We match it to the correct wage determination classification and explain why."
              },
              {
                q: "Is this for federal or state prevailing wage?",
                a: "Federal Davis-Bacon at launch. State (California DIR, etc.) coming soon."
              },
              {
                q: "How is this different from LCPtracker?",
                a: "LCPtracker is for agencies and big GCs. We're for subs who just need to get the form right and submit it."
              },
              {
                q: "How do you keep my data secure?",
                a: "Bank-level encryption (AES-256). We only store last 4 digits of SSN—never the full number. Delete your data anytime."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-100 last:border-0 px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 py-4 hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-800" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to stop dreading certified payroll?</h2>
          <p className="text-xl text-blue-100 mb-10">Join the waitlist today and get 50% off your first project when we launch.</p>
          
          <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
            <Input 
              type="email" 
              placeholder="name@company.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 px-4 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-blue-200 focus-visible:ring-white flex-1"
              required
            />
            <Button type="submit" className="h-14 px-8 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-medium shadow-lg sm:w-auto text-lg">
              Join the Waitlist
            </Button>
          </form>
          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-blue-200 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-secondary" /> No credit card</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-secondary" /> 50% off early access</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-secondary" /> Unsubscribe anytime</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-gray-500" />
            <span className="text-xl font-bold text-gray-300">PayrollProof</span>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:hello@payrollproof.com" className="hover:text-white transition-colors">hello@payrollproof.com</a>
          </div>
          
          <div className="text-sm">
            © {new Date().getFullYear()} PayrollProof. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}