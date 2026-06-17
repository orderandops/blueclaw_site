import { useState, useRef } from "react";
import { useModal } from "@/context/ModalContext";

const COPY = {
  managed: {
    eyebrow: "Managed Services · For General Contractors",
    title: "Request a proposal",
    sub: "Tell us a little about your projects and we'll put together a tailored managed-services quote. Prefer to talk it through first? Book a call below.",
    submit: "Request my proposal",
    type: "Managed Services",
  },
  intensive: {
    eyebrow: "Bid Win Intensive · For Subcontractors",
    title: "Start your Bid Win Intensive",
    sub: "Just won a federal bid? Share a few details and we'll get your Intensive scheduled. Prefer to talk it through first? Book a call below.",
    submit: "Request my Intensive",
    type: "Bid Win Intensive",
  },
};

type FieldName = "first" | "last" | "email" | "phone" | "company";
type Errors = Partial<Record<FieldName, string>>;

export default function ProposalModal() {
  const { modalType, closeModal } = useModal();
  const [step, setStep] = useState<1 | 2>(1);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);

  if (!modalType) return null;

  const copy = COPY[modalType];

  const validate = (form: HTMLFormElement): Errors => {
    const errs: Errors = {};
    const required: FieldName[] = ["first", "last", "email", "phone", "company"];
    for (const name of required) {
      const val = (form.elements.namedItem(name) as HTMLInputElement)?.value?.trim();
      if (!val) errs[name] = name === "email" ? "Please enter a valid email address." : `Please enter your ${name}.`;
    }
    const emailVal = (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim();
    if (emailVal && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailVal)) {
      errs.email = "Please enter a valid email address.";
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);

    const data = new FormData(form);
    // Dynamic subject line
    const first = (data.get("first") as string) || "";
    const last = (data.get("last") as string) || "";
    const company = (data.get("company") as string) || "";
    data.set("subject", `New ${copy.type} inquiry from ${first} ${last} (${company})`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json();
      if (!json.success) console.error("Web3Forms error:", json);
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setSubmitting(false);
      setStep(2);
    }
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => setStep(1), 300);
  };

  const fieldError = (name: FieldName) => errors[name];

  return (
    <div
      className={`modal-overlay open`}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="modal-x" onClick={handleClose} aria-label="Close">&times;</button>
        <div className="modal-body">

          {/* Step 1: Form */}
          {step === 1 && (
            <div>
              <span className="modal-eyebrow">{copy.eyebrow}</span>
              <h3 id="modalTitle">{copy.title}</h3>
              <p className="modal-sub">{copy.sub}</p>

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                {/* Web3Forms hidden fields */}
                <input type="hidden" name="access_key" value="WEB3FORMS_ACCESS_KEY_HERE" />
                <input type="hidden" name="from_name" value="PayrollProof Website" />
                <input type="hidden" name="inquiry_type" value={copy.type} />
                <input type="checkbox" name="botcheck" style={{ display: "none" }} />

                <div className="row2">
                  <div className={`field${fieldError("first") ? " invalid" : ""}`}>
                    <label>First name <span className="req">*</span></label>
                    <input name="first" autoComplete="given-name" />
                    <div className="err">{fieldError("first") || "Please enter your first name."}</div>
                  </div>
                  <div className={`field${fieldError("last") ? " invalid" : ""}`}>
                    <label>Last name <span className="req">*</span></label>
                    <input name="last" autoComplete="family-name" />
                    <div className="err">{fieldError("last") || "Please enter your last name."}</div>
                  </div>
                </div>
                <div className={`field${fieldError("email") ? " invalid" : ""}`}>
                  <label>Email <span className="req">*</span></label>
                  <input name="email" type="email" autoComplete="email" />
                  <div className="err">{fieldError("email") || "Please enter a valid email address."}</div>
                </div>
                <div className={`field${fieldError("phone") ? " invalid" : ""}`}>
                  <label>Phone <span className="req">*</span></label>
                  <input name="phone" type="tel" autoComplete="tel" />
                  <div className="err">{fieldError("phone") || "Please enter your phone number."}</div>
                </div>
                <div className={`field${fieldError("company") ? " invalid" : ""}`}>
                  <label>Company name <span className="req">*</span></label>
                  <input name="company" autoComplete="organization" />
                  <div className="err">{fieldError("company") || "Please enter your company name."}</div>
                </div>
                <div className="row2">
                  <div className="field">
                    <label>Project county</label>
                    <input name="county" />
                  </div>
                  <div className="field">
                    <label>State</label>
                    <input name="state" />
                  </div>
                </div>
                <div className="field">
                  <label>Any additional information</label>
                  <textarea name="notes" placeholder="Number of active projects, subs, the portals you use, your timeline…" />
                </div>
                <button type="submit" className="btn btn-orange modal-submit" disabled={submitting}>
                  {submitting ? "Sending…" : copy.submit}
                </button>
              </form>

              <div className="modal-or"><span>or</span></div>
              <a
                href="https://calendly.com/darcie-orderandoperations/30min"
                target="_blank"
                rel="noopener"
                className="btn btn-outline modal-cal"
              >
                Book a meeting on my calendar →
              </a>
            </div>
          )}

          {/* Step 2: Success */}
          {step === 2 && (
            <div className="modal-success show">
              <div className="s-check">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12.5l4 4 10-10" stroke="#E8732A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Ready to talk?</h3>
              <p>Thanks — your request is in, and I'll review your projects before we meet. The fastest next step is to grab a time on my calendar.</p>
              <a
                href="https://calendly.com/darcie-orderandoperations/30min"
                target="_blank"
                rel="noopener"
                className="btn btn-orange"
              >
                Book a 30-minute call →
              </a>
              <button className="btn btn-outline" onClick={handleClose}>Done</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
