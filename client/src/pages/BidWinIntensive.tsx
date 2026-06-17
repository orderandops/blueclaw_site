import { useModal } from "@/context/ModalContext";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8.5l3 3 7-7" stroke="#E8732A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function BidWinIntensive() {
  const { openModal } = useModal();

  return (
    <>
      <div className="page-hero">
        <div className="wrap page-hero-in">
          <span className="eyebrow">For Subs New to Federal Work</span>
          <h1>Bid Win Intensive</h1>
          <p>You won the bid. Now you need to run a compliant federal job. In four weeks, we stand up your entire certified payroll process — and hand it back to you with a written playbook.</p>
        </div>
      </div>

      <section className="pp-section" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <div className="preferred">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 3l2.3 4.6 5.1.7-3.7 3.6.9 5.1L12 14.6 7.4 17l.9-5.1L4.6 8.3l5.1-.7L12 3z" stroke="#E8732A" strokeWidth="1.7" strokeLinejoin="round" />
            </svg>
            <p><b>GCs call back the subs who make compliance effortless.</b> Walking into your next federal bid with an established process — and a track record of clean certified payrolls — makes you the preferred sub before you ever shake hands.</p>
          </div>

          <div className="value-head">
            <span className="eyebrow">Why $4,500 is a no-brainer</span>
            <h3>What that one fee actually buys you</h3>
          </div>
          <div className="values">
            <div className="vcard">
              <div className="vi">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l8 3v6c0 5-3.4 8.6-8 11-4.6-2.4-8-6-8-11V5l8-3z" stroke="#E8732A" strokeWidth="1.7" strokeLinejoin="round" />
                  <path d="M8.5 12l2.3 2.3L15.5 9.6" stroke="#E8732A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4>Zero back-wage exposure</h4>
              <p>Uncapped back wages, doubled liquidated damages, and $13,508-per-violation penalties never land on you.</p>
            </div>
            <div className="vcard">
              <div className="vi">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l2.3 4.6 5.1.7-3.7 3.6.9 5.1L12 14.6 7.4 17l.9-5.1L4.6 8.3l5.1-.7L12 3z" stroke="#E8732A" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
              </div>
              <h4>Become a preferred sub</h4>
              <p>GCs call back the subs who make compliance effortless. Smooth admin wins you the next bid, and the one after.</p>
            </div>
            <div className="vcard">
              <div className="vi">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#E8732A" strokeWidth="1.7" />
                  <path d="M12 7v5l3.5 2" stroke="#E8732A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4>End the admin nightmare</h4>
              <p>No weekly scramble, no "we won — now what," no time suck. A process that runs the same way every week.</p>
            </div>
            <div className="vcard">
              <div className="vi">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M7 11V8a5 5 0 0110 0v3" stroke="#E8732A" strokeWidth="1.7" strokeLinecap="round" />
                  <rect x="5" y="11" width="14" height="9" rx="2" stroke="#E8732A" strokeWidth="1.7" />
                </svg>
              </div>
              <h4>You own it forever</h4>
              <p>The process and written playbook are yours — plus six months of PayrollProof software. Never pay for setup again.</p>
            </div>
          </div>

          <div className="mech-head">
            <span className="eyebrow" style={{ color: "var(--navy)" }}>How the month works</span>
            <h3>Four weeks, then you're running it yourself</h3>
          </div>
          <div className="timeline">
            <div className="week">
              <div className="wk">Week 1</div>
              <h4>Assess &amp; set up</h4>
              <p>Review the contract and wage determination, identify classifications, flag any conformance requests needed, and stand up your payroll process, software, and portal access.</p>
            </div>
            <div className="week">
              <div className="wk">Week 2</div>
              <h4>Train &amp; first payroll</h4>
              <p>Train your team, then prepare and submit your first weekly certified payroll together — coordinating with your GC as needed.</p>
            </div>
            <div className="week">
              <div className="wk">Week 3</div>
              <h4>Review &amp; refine</h4>
              <p>Work through the next payrolls, resolve any issues, and submit conformance requests if a classification isn't on the WD.</p>
            </div>
            <div className="week">
              <div className="wk">Week 4</div>
              <h4>Independence &amp; handoff</h4>
              <p>Final review, deliver your written compliance playbook, and hand off the process — with 30 days of follow-up support.</p>
            </div>
          </div>

          <div className="deliver-wrap">
            <div className="deliver">
              <h3>What you walk away with</h3>
              <ul>
                <li><CheckIcon />A documented compliance process for your project</li>
                <li><CheckIcon />Your wage determination decoded &amp; mapped to workers</li>
                <li><CheckIcon />Worker classifications established and documented</li>
                <li><CheckIcon /><b>Conformance requests</b> identified, prepared &amp; submitted</li>
                <li><CheckIcon />Fringe benefit calculations documented</li>
                <li><CheckIcon />3–4 certified payrolls prepared &amp; submitted with you</li>
                <li><CheckIcon /><b>Coordination with your GC / prime</b> as needed</li>
                <li><CheckIcon />A written go-forward compliance playbook</li>
                <li><CheckIcon />30 days of post-engagement support</li>
                <li><CheckIcon /><b>6 months of PayrollProof software</b> included</li>
              </ul>
            </div>
            <div className="price-card">
              <span className="p-eyebrow">One flat fee · everything included</span>
              <div className="p-amt">$4,500</div>
              <div className="p-flat">No per-worker pricing · no surprises</div>
              <p className="p-allin">The same complete setup whether you run 6 workers or 26. One project, one team, fully stood up.</p>
              <div className="p-incl">Includes PayrollProof setup, team training &amp; <b>6 months of software access</b></div>
              <p className="p-pay">Prefer to spread it out? Ask about splitting the fee across the engagement.</p>
              <a className="btn btn-orange" onClick={() => openModal("intensive")}>Just won a bid? Let's set it up</a>
              <div className="p-frac">Typically under 1–2% of your federal contract value — and it protects every dollar of it.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
