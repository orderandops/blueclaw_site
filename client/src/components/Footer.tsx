import { Link } from "wouter";
import { useModal } from "@/context/ModalContext";

export default function Footer() {
  const { openModal } = useModal();

  const handleSoftware = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("software");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#software";
    }
  };

  return (
    <footer className="pp-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link href="/" className="brand" style={{ display: "inline-flex" }}>
              <img src="/assets/payrollproof-logo.jpg" alt="PayrollProof" />
            </Link>
            <p className="fnote">A specialized Davis-Bacon prevailing-wage practice for federally funded construction. A BlueClaw company.</p>
          </div>
          <div className="fcols">
            <div>
              <h5>For GCs</h5>
              <Link href="/managed-services">Managed Services</Link>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal("managed"); }}>Request a proposal</a>
            </div>
            <div>
              <h5>For Subs</h5>
              <Link href="/bid-win-intensive">Bid Win Intensive</Link>
              <a href="/#software" onClick={handleSoftware}>Software &amp; plans</a>
            </div>
            <div>
              <h5>Company</h5>
              <Link href="/founder">Founder</Link>
              <a href="mailto:darcie@blueclaw.tech">Contact</a>
              <a href="https://blueclaw.tech" target="_blank" rel="noopener">BlueClaw</a>
            </div>
          </div>
        </div>
        <div className="foot-base">
          <span>© 2026 PayrollProof · BlueClaw · Charlotte, NC</span>
        </div>
      </div>
    </footer>
  );
}
