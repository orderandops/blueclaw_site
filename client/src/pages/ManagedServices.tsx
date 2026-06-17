import { useModal } from "@/context/ModalContext";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8.5l3 3 7-7" stroke="#E8732A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ManagedServices() {
  const { openModal } = useModal();

  return (
    <>
      <div className="page-hero">
        <div className="wrap page-hero-in">
          <span className="eyebrow">For General Contractors</span>
          <h1>Managed Compliance Services</h1>
          <p>We become the compliance desk for your federally funded projects — collecting, auditing, remediating, and submitting your subcontractors' certified payrolls so the liability never lands on you.</p>
        </div>
      </div>

      <section className="pp-section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="ms-grid">
            <div>
              <div className="liability">
                Under the 2023 Davis-Bacon Final Rule, the prime carries <strong>strict liability</strong> for a subcontractor's underpayments — back wages with no cap, civil penalties, and liquidated damages that double the shortfall. We run the prevailing-wage compliance function so that exposure never lands on you.
              </div>
              <p style={{ color: "var(--slate)", marginBottom: "22px" }}>Project by project, sub by sub, we own the weekly grind that keeps you audit-ready.</p>
              <div className="incl">
                <div><CheckIcon />Weekly certified payroll collection</div>
                <div><CheckIcon />Davis-Bacon audit vs. wage determination</div>
                <div><CheckIcon />Back-wage &amp; fringe deficiency remediation</div>
                <div><CheckIcon />Portal submission (CB Tracker, LCPtracker, agency)</div>
                <div><CheckIcon />Delinquent payroll follow-up</div>
                <div><CheckIcon />Conformance request management</div>
                <div><CheckIcon />Subcontractor education &amp; onboarding</div>
                <div><CheckIcon />State &amp; local reporting + local-hire tracking</div>
              </div>
            </div>
            <div className="anchorcard">
              <span className="ac-eyebrow">Managed Compliance Services</span>
              <div className="ac-from">Starting from</div>
              <div className="ac-price">$1,500<small>/mo</small></div>
              <p className="ac-desc">Per active project. Pricing scales with number of subs and project complexity.</p>
              <p className="ac-terms">
                Includes all weekly payroll collection,<br />
                auditing, remediation &amp; portal submission.<br />
                Month-to-month. Cancel when the project closes.
              </p>
              <a className="btn btn-orange" href="#" onClick={(e) => { e.preventDefault(); openModal("managed"); }}>Request a proposal →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section contact-band">
        <div className="wrap">
          <span className="eyebrow">Let's keep your project audit-ready</span>
          <h2>Ready to take compliance off your plate?</h2>
          <p>Tell us about your projects and we'll put together a proposal. Or grab a time on Darcie's calendar to talk it through first.</p>
          <div className="btns">
            <a className="btn btn-navy" href="#" onClick={(e) => { e.preventDefault(); openModal("managed"); }}>Request a proposal</a>
            <a href="https://calendly.com/darcie-orderandoperations/30min" target="_blank" rel="noopener" className="btn btn-outline">Book a call</a>
          </div>
        </div>
      </section>
    </>
  );
}
