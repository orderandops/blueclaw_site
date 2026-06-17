import { useModal } from "@/context/ModalContext";

export default function Founder() {
  const { openModal } = useModal();

  return (
    <>
      <div className="page-hero">
        <div className="wrap page-hero-in">
          <span className="eyebrow">Founder</span>
          <h1>Darcie Gregoire</h1>
          <p>The person who enforced Davis-Bacon for the federal government — now in your corner.</p>
        </div>
      </div>

      <section className="pp-section founder-page-sec">
        <div className="wrap">
          <div className="fp-grid">
            <div className="fp-photo">
              <img src="/assets/darcie-headshot.png" alt="Darcie Gregoire, founder of PayrollProof" />
            </div>
            <div className="fp-body">
              <div className="role">Former U.S. Department of Labor Wage &amp; Hour Investigator</div>
              <p>Darcie spent her career inside the systems that govern federal construction. As a DOL Wage and Hour Investigator, she enforced the Davis-Bacon Act — auditing certified payrolls, calculating back wages, and seeing firsthand where contractors got tripped up. She then moved inside the industry as an HR director at a construction company, and went on to consult for contractors navigating the very complexity she once enforced.</p>
              <p>That combination is rare: she knows how the agency thinks, how a job site actually runs, and where the two collide. It's the reason her clients don't just survive an audit — they stop fearing one.</p>
              <div className="fp-creds">
                <span>SPHR</span>
                <span>SHRM-SCP</span>
                <span>Former U.S. DOL WHD Investigator</span>
                <span>Charlotte, NC</span>
              </div>
              <h3>Why she built PayrollProof</h3>
              <p>Across consulting engagements, Darcie kept meeting the same two contractors: the one too intimidated by Davis-Bacon to bid federal work at all, and the one who won and was quietly panicking. The expertise to help them existed — it just wasn't reachable or affordable for a small contractor.</p>
              <p>PayrollProof is her answer. It puts that expertise in reach at every level: full-service compliance administration for the general contractors who carry the liability, a focused setup intensive for subs who just won their first federal bid, and self-service software for everyone who simply needs a clean WH-347 each week.</p>
              <h3>The practice today</h3>
              <p>PayrollProof is a specialized Davis-Bacon prevailing-wage practice and a BlueClaw company, serving general contractors and subcontractors on federally funded construction across the country from its home base in Charlotte.</p>
              <div className="fp-contact">
                Charlotte, NC · (704) 312-0385 · <a href="mailto:darcie@blueclaw.tech">darcie@blueclaw.tech</a>
                <a
                  href="https://www.linkedin.com/in/darciegregoire/"
                  target="_blank"
                  rel="noopener"
                  className="fp-linkedin"
                  aria-label="Darcie Gregoire on LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section contact-band">
        <div className="wrap">
          <span className="eyebrow">Work with Darcie</span>
          <h2>Let's talk about your federal project.</h2>
          <p>Whether you're a GC managing subs or a sub who just won a bid, Darcie can help you stay compliant — and stop losing sleep over it.</p>
          <div className="btns">
            <a className="btn btn-navy" href="#" onClick={(e) => { e.preventDefault(); openModal("managed"); }}>Request a proposal</a>
            <a href="https://calendly.com/darcie-orderandoperations/30min" target="_blank" rel="noopener" className="btn btn-outline">Book a call</a>
          </div>
        </div>
      </section>
    </>
  );
}
