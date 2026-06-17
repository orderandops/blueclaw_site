import { useModal } from "@/context/ModalContext";
import { Link } from "wouter";

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path d="M3 8.5l3 3 7-7" stroke="#E8732A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldCheckSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l8 3v6c0 5-3.4 8.6-8 11-4.6-2.4-8-6-8-11V5l8-3z" stroke="#2B4C7E" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M8 12l3 3 5-5" stroke="#E8732A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  const { openModal } = useModal();

  const handleSoftware = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("software");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-in">
          <div className="hero-text">
            <span className="eyebrow">Certified Payroll · Prevailing Wage · WH-347</span>
            <h1>Davis-Bacon compliance, <em>from award to audit.</em></h1>
            <p className="lead">A specialized prevailing-wage practice for federally funded construction — full-service compliance administration for general contractors, a one-month setup intensive for subs who just won their first federal bid, and self-service certified payroll software for everyone else.</p>
            <div className="cred-badge">
              <span className="seal">DOL</span>
              <span>Founded by a former <strong>U.S. Department of Labor Wage &amp; Hour Investigator</strong> who enforced Davis-Bacon before helping contractors comply with it.</span>
            </div>
            <div className="hero-cta">
              <Link href="/managed-services" className="btn btn-orange">I'm a GC — manage my subs →</Link>
              <Link href="/bid-win-intensive" className="btn btn-ghost">I just won a federal bid →</Link>
              <a className="txtlink" href="/#software" onClick={handleSoftware}>Just need the WH-347 generator?</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="n">$217B+</div>
                <div className="l">in annual U.S. federal &amp; federally assisted construction subject to Davis-Bacon</div>
              </div>
              <div className="stat">
                <div className="n">1.2M</div>
                <div className="l">construction workers covered nationwide</div>
              </div>
              <div className="stat">
                <div className="n">2023</div>
                <div className="l">Final Rule — strict prime liability for sub underpayments</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/assets/team-jobsite.jpg" alt="A compliance professional reviewing certified payroll on a tablet with a project team on a federal construction job site" />
            <div className="hero-tag">
              <span className="dot" />
              Compliance review · weekly certified payroll
            </div>
          </div>
        </div>
      </header>

      {/* THREE OFFERINGS */}
      <section className="pp-section fork">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Three doors onto a compliant federal job</span>
            <h2>The prime carries the liability. The subs carry the paperwork. We cover all of it.</h2>
            <p>Wherever you sit — and whatever stage you're at — there's a way in.</p>
          </div>
          <div className="three">
            <div className="path gc">
              <span className="who">For General Contractors</span>
              <h3>Managed Compliance Services</h3>
              <span className="tag">Full-service · recurring</span>
              <p className="pitch">You're liable for every subcontractor's payroll. We run the compliance function so it's right — every week, every project.</p>
              <div className="from">from <b>$1,500/mo</b></div>
              <Link href="/managed-services" className="btn btn-navy">Managed Services →</Link>
            </div>
            <div className="path intensive">
              <span className="who">For Subs New to Federal Work</span>
              <h3>Bid Win Intensive</h3>
              <span className="tag">One-time · 30-day setup</span>
              <p className="pitch">Just won a federal bid and not sure how to administer it? In four weeks we stand up your entire compliance process — and hand it back to you.</p>
              <div className="from">flat fee <b>$4,500</b></div>
              <Link href="/bid-win-intensive" className="btn btn-orange">Bid Win Intensive →</Link>
            </div>
            <div className="path sub">
              <span className="who">For Subs Running Their Own Payroll</span>
              <h3>PayrollProof Software</h3>
              <span className="tag">Self-service · monthly</span>
              <p className="pitch">Already know the drill? Generate a compliant WH-347 in minutes, not hours — with the checks built in.</p>
              <div className="from">from <b>$79/mo</b></div>
              <a className="btn btn-outline" href="/#software" onClick={handleSoftware}>See plans below ↓</a>
            </div>
          </div>
        </div>
      </section>

      {/* SOFTWARE */}
      <section className="pp-section sw" id="software">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">For subs running their own payroll</span>
            <h2>PayrollProof Software</h2>
            <p>The self-service certified payroll generator. Built for the contractor who knows the drill and just needs a clean WH-347 every week — without a compliance department.</p>
          </div>
          <div className="steps">
            <div className="step"><div className="num">01</div><h4>Set up the project</h4><p>Enter project details and upload your wage determination once. We parse the classifications, rates, and fringes.</p></div>
            <div className="step"><div className="num">02</div><h4>Upload the week</h4><p>Drop in your time records and payroll data. We read them and build editable employee cards.</p></div>
            <div className="step"><div className="num">03</div><h4>Review the flags</h4><p>We check rates, classifications, fringe, and CWHSSA overtime — and flag anything to look at, in plain language.</p></div>
            <div className="step"><div className="num">04</div><h4>Sign &amp; generate</h4><p>Certify electronically and download an audit-ready, two-page WH-347. Re-download anytime.</p></div>
          </div>
          <div className="privacy-note">
            <ShieldCheckSvg />
            <div><strong>Your employees' data never touches our servers.</strong> Names, SSNs, and pay details stay in your browser for the session. Only the finished WH-347 PDF is saved — so you can re-download it, and nothing else is stored.</div>
          </div>
          <div className="tiers">
            <div className="tier">
              <span className="tname">Starter</span>
              <div className="tprice">$79<span>/mo</span></div>
              <div className="tgen">6 WH-347 generations / month</div>
              <ul>
                <li><CheckIcon />Unlimited projects</li>
                <li><CheckIcon />Wage determination parsing</li>
                <li><CheckIcon />Compliance flags &amp; e-signature</li>
              </ul>
              <a href="#" className="btn btn-outline">Start free trial</a>
            </div>
            <div className="tier feat">
              <span className="ribbon">Most popular</span>
              <span className="tname">Professional</span>
              <div className="tprice">$179<span>/mo</span></div>
              <div className="tgen">25 WH-347 generations / month</div>
              <ul>
                <li><CheckIcon />Everything in Starter</li>
                <li><CheckIcon />Priority support</li>
                <li><CheckIcon />Stored PDFs for re-download</li>
              </ul>
              <a href="#" className="btn btn-orange">Start free trial</a>
            </div>
            <div className="tier">
              <span className="tname">Business</span>
              <div className="tprice">$349<span>/mo</span></div>
              <div className="tgen">Unlimited generations</div>
              <ul>
                <li><CheckIcon />Everything in Professional</li>
                <li><CheckIcon />Multiple team members</li>
                <li><CheckIcon />Outgrowing it? Ask about managed services</li>
              </ul>
              <a href="#" className="btn btn-outline">Start free trial</a>
            </div>
          </div>
          <p style={{ textAlign: "center", color: "var(--slate)", fontSize: ".88rem", marginTop: "22px" }}>7-day free trial on every plan. No long-term contract.</p>
        </div>
      </section>

      {/* FOUNDER TEASER */}
      <section className="pp-section f-teaser">
        <div className="wrap f-teaser-in">
          <div className="f-mini">
            <img src="/assets/darcie-headshot.jpg" alt="Darcie Gregoire, founder of PayrollProof" />
          </div>
          <div>
            <span className="eyebrow">Founder</span>
            <h3>Darcie Gregoire</h3>
            <div className="creds">SPHR · SHRM-SCP · Former U.S. DOL Wage &amp; Hour Investigator</div>
            <p>She enforced Davis-Bacon for the federal government before building the practice that now helps contractors comply with it. PayrollProof is the result.</p>
          </div>
          <Link href="/founder" className="btn btn-orange">Read Darcie's story →</Link>
        </div>
      </section>

      {/* CONTACT BAND */}
      <section className="pp-section contact-band">
        <div className="wrap">
          <span className="eyebrow">Let's keep your project audit-ready</span>
          <h2>Federal work doesn't have to be a compliance headache.</h2>
          <p>Tell us where you sit — managing subs, just won a bid, or running your own payroll — and we'll point you to the right side of the practice.</p>
          <div className="btns">
            <Link href="/managed-services" className="btn btn-navy">Managed services for GCs</Link>
            <Link href="/bid-win-intensive" className="btn btn-orange">Just won a bid?</Link>
          </div>
        </div>
      </section>
    </>
  );
}
