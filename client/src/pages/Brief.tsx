import { useEffect } from "react";

const PAGE_CSS = `
* { box-sizing: border-box; }
body { margin: 0; padding: 0; }
.brief-wrap {
  font-family: Georgia, 'Times New Roman', serif;
  color: #1a1a1a;
  line-height: 1.6;
  background-color: #f5f5f5;
  min-height: 100vh;
}
.brief-wrap .container {
  max-width: 760px;
  margin: 0 auto;
  background-color: #ffffff;
}
.brief-wrap .header {
  background-color: #ffffff;
  padding: 32px 48px 24px 48px;
  text-align: left;
  border-bottom: 4px solid #1B3358;
}
.brief-wrap .header .logo {
  max-width: 280px;
  width: 100%;
  height: auto;
  display: block;
}
.brief-wrap .hero {
  padding: 80px 48px 60px 48px;
  background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
}
.brief-wrap .hero .tag {
  color: #E8732A;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.brief-wrap .hero h1 {
  color: #1B3358;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 44px;
  line-height: 1.1;
  margin: 0 0 24px 0;
  font-weight: bold;
}
.brief-wrap .hero .subtitle {
  font-size: 20px;
  color: #4a4a4a;
  margin: 0 0 12px 0;
  line-height: 1.5;
}
.brief-wrap .hero .pitch {
  font-size: 17px;
  color: #4a4a4a;
  margin: 0 0 40px 0;
  line-height: 1.6;
}
.brief-wrap .signup-box {
  background-color: #ffffff;
  border: 2px solid #1B3358;
  padding: 32px;
  margin: 0;
}
.brief-wrap .signup-box h3 {
  color: #1B3358;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin: 0 0 8px 0;
}
.brief-wrap .signup-box > p {
  font-size: 15px;
  color: #666666;
  margin: 0 0 20px 0;
}
.brief-wrap .section {
  padding: 60px 48px;
}
.brief-wrap .section.alt {
  background-color: #fafafa;
}
.brief-wrap .section h2 {
  color: #1B3358;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  margin: 0 0 12px 0;
}
.brief-wrap .section .section-tag {
  color: #666666;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 32px 0;
}
.brief-wrap .what-you-get {
  margin: 0;
  padding: 0;
  list-style: none;
}
.brief-wrap .what-you-get li {
  padding: 20px 0;
  border-bottom: 1px solid #e5e5e5;
  font-size: 17px;
  line-height: 1.6;
}
.brief-wrap .what-you-get li:last-child { border-bottom: none; }
.brief-wrap .what-you-get .arrow {
  color: #E8732A;
  font-weight: bold;
  margin-right: 8px;
}
.brief-wrap .what-you-get strong { color: #1B3358; }
.brief-wrap .lead-magnet-box {
  background-color: #1B3358;
  color: #ffffff;
  padding: 40px;
  margin: 0;
}
.brief-wrap .lead-magnet-box .tag {
  color: #E8732A;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.brief-wrap .lead-magnet-box h3 {
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  margin: 0 0 20px 0;
  line-height: 1.3;
}
.brief-wrap .lead-magnet-box p {
  color: #d6d6d6;
  font-size: 17px;
  margin: 0 0 12px 0;
  line-height: 1.6;
}
.brief-wrap .lead-magnet-box .highlight {
  color: #E8732A;
  font-weight: bold;
}
.brief-wrap .about-section {
  padding: 60px 48px;
}
.brief-wrap .about-section h2 {
  color: #1B3358;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  margin: 0 0 24px 0;
}
.brief-wrap .about-section p {
  font-size: 17px;
  margin: 0 0 18px 0;
}
.brief-wrap .credentials {
  background-color: #fef9f4;
  border-left: 4px solid #E8732A;
  padding: 24px 28px;
  margin: 32px 0 0 0;
}
.brief-wrap .credentials p {
  font-size: 15px;
  color: #4a4a4a;
  margin: 0 0 8px 0;
  font-family: Arial, Helvetica, sans-serif;
}
.brief-wrap .credentials p:last-child { margin-bottom: 0; }
.brief-wrap .credentials strong { color: #1B3358; }
.brief-wrap .second-signup {
  background-color: #1B3358;
  padding: 60px 48px;
  text-align: center;
}
.brief-wrap .second-signup h2 {
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  margin: 0 0 16px 0;
}
.brief-wrap .second-signup p {
  color: #d6d6d6;
  font-size: 17px;
  margin: 0 0 32px 0;
}
.brief-wrap .footer {
  background-color: #0f1f3a;
  padding: 32px 48px;
  text-align: center;
}
.brief-wrap .footer p {
  color: #cccccc;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  margin: 0 0 12px 0;
  line-height: 1.6;
}
.brief-wrap .footer strong { color: #ffffff; }
.brief-wrap .footer a {
  color: #E8732A;
  text-decoration: none;
  font-weight: bold;
}
.brief-wrap .footer a:hover { text-decoration: underline; }
@media (max-width: 600px) {
  .brief-wrap .header,
  .brief-wrap .hero,
  .brief-wrap .section,
  .brief-wrap .about-section,
  .brief-wrap .second-signup,
  .brief-wrap .footer { padding-left: 24px; padding-right: 24px; }
  .brief-wrap .hero h1 { font-size: 32px; }
  .brief-wrap .section h2 { font-size: 26px; }
  .brief-wrap .lead-magnet-box { padding: 28px; }
  .brief-wrap .lead-magnet-box h3 { font-size: 22px; }
}
`;

const ML_CSS = `
@import url("https://assets.mlcdn.com/fonts.css?version=1782196");
.ml-form-embedSubmitLoad { display: inline-block; width: 20px; height: 20px; }
.g-recaptcha { transform: scale(1); -webkit-transform: scale(1); transform-origin: 0 0; -webkit-transform-origin: 0 0; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
.ml-form-embedSubmitLoad:after { content: " "; display: block; width: 11px; height: 11px; margin: 1px; border-radius: 50%; border: 4px solid #fff; border-color: #ffffff #ffffff #ffffff transparent; animation: ml-form-embedSubmitLoad 1.2s linear infinite; }
@keyframes ml-form-embedSubmitLoad { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
#mlb2-42969011.ml-form-embedContainer { box-sizing: border-box; display: table; margin: 0 auto; position: static; width: 100% !important; }
#mlb2-42969011.ml-form-embedContainer h4, #mlb2-42969011.ml-form-embedContainer p, #mlb2-42969011.ml-form-embedContainer span, #mlb2-42969011.ml-form-embedContainer button { text-transform: none !important; letter-spacing: normal !important; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper { background-color: #ffffff; border-width: 0px; border-color: transparent; border-radius: 4px; border-style: solid; box-sizing: border-box; display: inline-block !important; margin: 0; padding: 0; position: relative; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper.embedForm { max-width: 100%; width: 100%; }
#mlb2-42969011.ml-form-embedContainer .ml-form-align-default { display: table-cell !important; vertical-align: middle !important; text-align: center !important; }
#mlb2-42969011.ml-form-embedContainer .ml-form-align-center { text-align: center; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody, #mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody { padding: 0; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent, #mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent { text-align: left; margin: 0 0 20px 0; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4, #mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4 { color: #1B3358; font-family: 'Open Sans', Arial, Helvetica, sans-serif; font-size: 22px; font-weight: 700; margin: 0 0 10px 0; text-align: left; word-break: break-word; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p, #mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p { color: #333333; font-family: 'Open Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; margin: 0 0 10px 0; text-align: left; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group { text-align: left!important; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label { margin-bottom: 5px; color: #333333; font-size: 14px; font-family: 'Open Sans', Arial, Helvetica, sans-serif; font-weight: bold; display: inline-block; line-height: 20px; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form { margin: 0; width: 100%; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent { margin: 0 0 20px 0; width: 100%; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow { margin: 0 0 14px 0; width: 100%; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item { margin: 0 0 4px 0; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input { background-color: #ffffff !important; color: #333333 !important; border-color: #cccccc; border-radius: 4px !important; border-style: solid !important; border-width: 1px !important; font-family: 'Open Sans', Arial, Helvetica, sans-serif; font-size: 15px !important; height: auto; line-height: 21px !important; margin: 0; padding: 12px 12px !important; width: 100% !important; box-sizing: border-box !important; max-width: 100% !important; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit { margin: 0; float: left; width: 100%; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button { background-color: #1b3358 !important; border: none !important; border-radius: 4px !important; box-shadow: none !important; color: #ffffff !important; cursor: pointer; font-family: 'Open Sans', Arial, Helvetica, sans-serif !important; font-size: 15px !important; font-weight: 700 !important; line-height: 21px !important; height: auto; padding: 14px !important; width: 100% !important; box-sizing: border-box !important; letter-spacing: 0.5px; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading { display: none; }
#mlb2-42969011.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover { background-color: #e8732a !important; }
.ml-error input, .ml-error textarea, .ml-error select { border-color: red!important; }
.ml-error .label-description, .ml-error .label-description p, .ml-error label:first-child { color: #ff0000 !important; }
`;

export default function Brief() {
  useEffect(() => {
    document.title = "The Federal Construction Intel Brief | PayrollProof";

    if (document.getElementById("ml-brief-callback")) return;

    const cbScript = document.createElement("script");
    cbScript.id = "ml-brief-callback";
    cbScript.textContent = `
      function ml_webform_success_42969011() {
        var $ = ml_jQuery || jQuery;
        $('.ml-subscribe-form-42969011 .row-success').show();
        $('.ml-subscribe-form-42969011 .row-form').hide();
      }
    `;
    document.body.appendChild(cbScript);

    const loaderScript = document.createElement("script");
    loaderScript.id = "ml-brief-loader";
    loaderScript.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519";
    loaderScript.type = "text/javascript";
    document.body.appendChild(loaderScript);

    const takelScript = document.createElement("script");
    takelScript.id = "ml-brief-takel";
    takelScript.textContent = `fetch("https://assets.mailerlite.com/jsonp/2463912/forms/191091771568030995/takel");`;
    document.body.appendChild(takelScript);

    return () => {
      document.title = "PayrollProof — Davis-Bacon Compliance for Federal Construction";
    };
  }, []);

  return (
    <div className="brief-wrap">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <style dangerouslySetInnerHTML={{ __html: ML_CSS }} />

      <div className="container">

        {/* HEADER */}
        <div className="header">
          <img src="/assets/payrollproof-logo.jpg" alt="PayrollProof" className="logo" />
        </div>

        {/* HERO */}
        <div className="hero" id="top">
          <div className="tag">A monthly newsletter</div>
          <h1>The Federal Construction<br />Intel Brief</h1>
          <p className="subtitle">Where federal-aid money landed last month, what's bidding next, and what to do about it.</p>
          <p className="pitch">For contractors in the Carolinas and Virginia who work federally-funded construction &mdash; or want to. One short, practical read on the first Thursday of every month.</p>

          {/* SIGNUP BOX (PRIMARY) */}
          <div className="signup-box">
            <h3>Subscribe free</h3>
            <p>Drop your email below. Subscribe today and your welcome email is the full Q2 2026 federal-aid wrap &mdash; the perfect way to dive in before the next issue.</p>

            {/* MAILERLITE FORM */}
            <div id="mlb2-42969011" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-42969011">
              <div className="ml-form-align-center">
                <div className="ml-form-embedWrapper embedForm">
                  <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                    <form
                      className="ml-block-form"
                      action="https://assets.mailerlite.com/jsonp/2463912/forms/191091771568030995/subscribe"
                      data-code=""
                      method="post"
                      target="_blank"
                    >
                      <div className="ml-form-formContent">
                        <div className="ml-form-fieldRow">
                          <div className="ml-field-group ml-field-name">
                            <label>Name</label>
                            <input aria-label="name" type="text" className="form-control" name="fields[name]" placeholder="" autoComplete="given-name" />
                          </div>
                        </div>
                        <div className="ml-form-fieldRow ml-last-item">
                          <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                            <label>Email</label>
                            <input aria-label="email" aria-required="true" type="email" className="form-control" name="fields[email]" placeholder="" autoComplete="email" />
                          </div>
                        </div>
                      </div>
                      <input type="hidden" name="ml-submit" value="1" />
                      <div className="ml-form-embedSubmit">
                        <button type="submit" className="primary">Subscribe</button>
                        <button disabled type="button" className="loading" style={{ display: "none" }}>
                          <div className="ml-form-embedSubmitLoad"></div>
                          <span className="sr-only">Loading...</span>
                        </button>
                      </div>
                      <input type="hidden" name="anticsrf" value="true" />
                    </form>
                  </div>
                  <div className="ml-form-successBody row-success" style={{ display: "none" }}>
                    <div className="ml-form-successContent">
                      <h4>Thank you!</h4>
                      <p>You have successfully joined our subscriber list.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END MAILERLITE FORM */}
          </div>
        </div>

        {/* WHAT YOU GET */}
        <div className="section alt">
          <h2>What you get every month</h2>
          <p className="section-tag">Five sections &middot; one read &middot; built to act on</p>
          <ul className="what-you-get">
            <li><span className="arrow">&rsaquo;</span> <strong>Where the money landed.</strong> Last month's federal-aid prime awards in the Carolinas and Virginia &mdash; by state, prime, county, and scope.</li>
            <li><span className="arrow">&rsaquo;</span> <strong>Opening soon.</strong> The federal-aid bidding calendar that matters &mdash; NCDOT, SCDOT, VDOT, FAA, FTA, EPA SRF.</li>
            <li><span className="arrow">&rsaquo;</span> <strong>Pipeline watch.</strong> Federally-funded entities about to procure construction &mdash; municipalities, utilities, airports, transit. The work no one else is tracking yet.</li>
            <li><span className="arrow">&rsaquo;</span> <strong>The practitioner note.</strong> One piece of Davis-Bacon hard-won wisdom each month &mdash; regulatory updates, audit lessons, classification calls.</li>
            <li><span className="arrow">&rsaquo;</span> <strong>This month's 5 moves.</strong> Concrete actions every reader can take this month &mdash; tiered for subs, small/mid GCs, and federal-aid primes.</li>
          </ul>
        </div>

        {/* LEAD MAGNET */}
        <div className="section" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="lead-magnet-box">
            <div className="tag">Subscribe today &middot; welcome email</div>
            <h3>Your Q2 2026 Federal-Aid Construction Wrap &mdash; Carolinas and Virginia</h3>
            <p>The moment you subscribe, your welcome email arrives with the full Q2 wrap:</p>
            <p>&rsaquo; <span className="highlight">$645M</span> in federal-aid prime contracts across the Carolinas and Virginia last quarter</p>
            <p>&rsaquo; The <span className="highlight">Top 10 awards</span> by dollar value, with primes, counties, and scope</p>
            <p>&rsaquo; <span className="highlight">Action items</span> for subs, small/mid GCs, and federal-aid primes</p>
            <p>&rsaquo; The <span className="highlight">pipeline</span> that's about to procure construction work in NC over the next 18 months</p>
          </div>
        </div>

        {/* ABOUT */}
        <div className="about-section">
          <h2>Who's behind it</h2>
          <p>I'm Darcie Gregoire. I run PayrollProof, the specialized Davis-Bacon and IRA prevailing wage compliance practice for federally-funded construction in the Carolinas and Virginia.</p>
          <p>Before building this practice, I spent years at the U.S. Department of Labor as a Wage and Hour Investigator &mdash; the person on the other end of the audit. After that, I ran HR for an 850-employee general contractor that lived and breathed federal-aid work.</p>
          <p>This newsletter exists because most of what makes federal-aid construction hard isn't the regulations &mdash; it's that the intelligence and the practitioner know-how live in different rooms. I'm pulling them together here.</p>
          <div className="credentials">
            <p><strong>Former U.S. Department of Labor Wage and Hour Investigator</strong></p>
            <p>Former HR Director, 850-employee general contractor</p>
            <p>SPHR &middot; SHRM-SCP credentialed</p>
          </div>
        </div>

        {/* SECOND SIGNUP CTA */}
        <div className="second-signup">
          <h2>Ready for the next issue?</h2>
          <p>Scroll back up and drop your email. New issues land the first Thursday of every month.</p>
          <p style={{ marginTop: "24px" }}>
            <a href="#top" style={{ color: "#E8732A", textDecoration: "none", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase" }}>
              &uarr; Back to top &amp; subscribe
            </a>
          </p>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <p><strong>PayrollProof</strong> &mdash; Davis-Bacon and IRA prevailing wage compliance for federally-funded construction in the Carolinas and Virginia.</p>
          <p>Need to talk about a project? <a href="https://calendly.com/blueclaw/30min">Book 30 minutes &rarr;</a></p>
        </div>

      </div>
    </div>
  );
}
