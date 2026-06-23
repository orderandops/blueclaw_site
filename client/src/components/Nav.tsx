import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useModal } from "@/context/ModalContext";

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [location] = useLocation();
  const { openModal } = useModal();

  const closeDrawer = () => setDrawerOpen(false);

  const isActive = (path: string) => location === path;

  const handleSoftware = (e?: React.MouseEvent) => {
    e?.preventDefault();
    closeDrawer();
    if (location !== "/") {
      window.location.href = "/#software";
    } else {
      const el = document.getElementById("software");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="pp-nav">
      <div className="wrap nav-in">
        <Link href="/" className="brand">
          <img src="/assets/payrollproof-logo.jpg" alt="PayrollProof" />
        </Link>

        <div className="nav-links">
          <Link href="/" className={isActive("/") ? "active" : ""}>Home</Link>
          <Link href="/managed-services" className={isActive("/managed-services") ? "active" : ""}>Managed Services</Link>
          <Link href="/bid-win-intensive" className={isActive("/bid-win-intensive") ? "active" : ""}>Bid Win Intensive</Link>
          <a href="/#software" onClick={handleSoftware}>Software</a>
          <Link href="/founder" className={isActive("/founder") ? "active" : ""}>Founder</Link>
          <a href="/brief" target="_blank" rel="noopener">Newsletter</a>
        </div>

        <div className="nav-cta">
          <a className="btn btn-ghost" href="#" onClick={(e) => { e.preventDefault(); closeDrawer(); openModal("managed"); }}>Request a proposal</a>
          <a className="btn btn-orange" href="/#software" onClick={handleSoftware}>Start free trial</a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          {drawerOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className={`mobile-drawer${drawerOpen ? " open" : ""}`}>
        <Link href="/" className={isActive("/") ? "active" : ""} onClick={closeDrawer}>Home</Link>
        <Link href="/managed-services" className={isActive("/managed-services") ? "active" : ""} onClick={closeDrawer}>Managed Services</Link>
        <Link href="/bid-win-intensive" className={isActive("/bid-win-intensive") ? "active" : ""} onClick={closeDrawer}>Bid Win Intensive</Link>
        <a href="/#software" onClick={handleSoftware}>Software</a>
        <Link href="/founder" className={isActive("/founder") ? "active" : ""} onClick={closeDrawer}>Founder</Link>
        <a href="/brief" target="_blank" rel="noopener" onClick={closeDrawer}>Newsletter</a>
        <div className="mctas">
          <a className="btn btn-ghost" style={{ borderColor: "rgba(255,255,255,.25)", color: "#fff" }} href="#" onClick={(e) => { e.preventDefault(); closeDrawer(); openModal("managed"); }}>Request a proposal</a>
          <a className="btn btn-orange" href="/#software" onClick={handleSoftware}>Start free trial</a>
        </div>
      </div>
    </nav>
  );
}
