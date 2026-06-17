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
              <img src="/assets/darcie-headshot.jpg" alt="Darcie Gregoire, founder of PayrollProof" />
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
