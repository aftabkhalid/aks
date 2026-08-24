import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation/Navigation";
import FooterSection from "@/components/footer/FooterSection";

export default function AboutPage() {
  return (
    <main className="">

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Navigation />
          </div>
        </div>
      </div>

      <div className="container-fluid px-30 text-dark pb-120">
      
        {/* Top Hero / Intro Section */}
        <section className="row gy-4 mb-5 pt-4 align-items-end" data-reveal="group">
          {/* Left Column: Big Headline */}
          <div className="col-12 col-lg-5 pe-lg-5">
            <h1 className="display-2 fw-semibold lh-1 mb-3">
              <span data-reveal="item">Aftab</span><br /><span data-reveal="item">Khalid</span>
            </h1>
            <p className="text-secondary small" data-reveal="item">UX Designer • Lahore</p>
          </div>

          {/* Right Column: Photo + Narrative Bio */}
          <div className="col-12 col-lg-6 ms-auto">
            <div className="row gy-4">
              <div className="col-12 col-md-6">
                <div className="ratio ak-ratio rounded-3 overflow-hidden bg-light">
                  <Image
                    src="/ak-profile.png"
                    alt="Aftab Khalid"
                    fill
                    className="object-fit-cover"
                    priority
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
                <div className="small text-secondary d-flex flex-column gap-4">
                  <p className="m-0">
                    Most products fail not from bad design, but from solving the wrong problem. Across 24 years in SaaS, Fintech, IoT, and AI, my focus has always been on what happens before opening Figma: interrogating assumptions, validating briefs, and aligning design with commercial reality.
                  </p>
                  <p className="m-0">
                    I have led products end-to-end—from an IoT platform serving 150,000 users for Pakistan’s largest appliance brand, to enterprise SaaS with clients like Microsoft and Pepsi, to founding a productized design agency with 100% client retention.
                  </p>
                </div>

                {/* Quick Contact Bar */}
                <div className="pt-4 border-top mt-4 d-flex justify-content-between align-items-center gap-2 flex-wrap extra-small">
                  <a href="mailto:hello@aftabkhalid.com" className="text-dark text-decoration-none">
                    Email
                  </a>
                  <a href="mailto:hello@aftabkhalid.com" className="text-dark text-decoration-none">
                    Book a call
                  </a>
                  <a href="https://linkedin.com/in/aftabkhalid" target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                    LinkedIn
                  </a>
                  <Link href="/resume" className="text-dark text-decoration-none">
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="row border-top py-5 align-items-start">
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h2 className="fs-24 fw-bold">Details</h2>
          </div>
          <div className="col-12 col-md-9">
            <div className="row g-4">
              <div className="col-12 col-md-3">
                <p className="extra-small text-muted mb-2 uppercase tracking-wide">Experience</p>
                <ul className="list-unstyled small text-secondary d-flex flex-column gap-1">
                  <li>/ Vaival Technologies</li>
                  <li>/ BlueEAST</li>
                  <li>/ KuroBase</li>
                  <li>/ 7Vals</li>
                  <li><a className="" href="/resume">See resume</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-3">
                <p className="extra-small text-muted mb-2 uppercase tracking-wide">Client Involvements</p>
                <ul className="list-unstyled small text-secondary d-flex flex-column gap-1">
                  <li>/ Taskify AI</li>
                  <li>/ Epic Group</li>
                  <li>/ OceanMoney</li>
                  <li>/ Taskpay</li>
                  <li><a className="" href="/">See work</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-3">
                <p className="extra-small text-muted mb-2 uppercase tracking-wide">Languages</p>
                <ul className="list-unstyled small text-secondary d-flex flex-column gap-1">
                  <li>/ English</li>
                  <li>/ Urdu</li>
                  <li>/ Punjabi</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section className="row border-top py-5 align-items-start">
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h2 className="fs-24 fw-bold">Stack</h2>
          </div>
          <div className="col-12 col-md-9">
            <div className="row g-4">
              <div className="col-12 col-md-3">
                <p className="extra-small text-muted mb-2 uppercase tracking-wide">UX Research & Strategy</p>
                <ul className="list-unstyled small text-secondary d-flex flex-column gap-1">
                  <li>/ User-Centered Design</li>
                  <li>/ User Persona</li>
                  <li>/ User Journey</li>
                  <li>/ Accessibility Design</li>
                  <li>/ Usability Design</li>
                  <li>/ Information Architecture</li>
                  <li>/ A/B Testing</li>
                </ul>
              </div>
              <div className="col-12 col-md-3">
                <p className="extra-small text-muted mb-2 uppercase tracking-wide">Visual & UI Design</p>
                <ul className="list-unstyled small text-secondary d-flex flex-column gap-1">
                  <li>/ Design System</li>
                  <li>/ UI Pattern</li>
                  <li>/ Responsive Design,</li>
                  <li>/ Branding & Logo Design</li>
                  <li>/ Design Tokens</li>
                </ul>
              </div>
              <div className="col-12 col-md-3">
                <p className="extra-small text-muted mb-2 uppercase tracking-wide">Tools</p>
                <ul className="list-unstyled small text-secondary d-flex flex-column gap-1">
                  <li>/ Figma</li>
                  <li>/ FigJam</li>
                  <li>/ Affinity Design</li>
                  <li>/ Adobe Illustrator</li>
                  <li>/ Adobe Photoshop</li>
                  <li>/ Webflow</li>
                </ul>
              </div>
              <div className="col-12 col-md-3">
                <p className="extra-small text-muted mb-2 uppercase tracking-wide">AI-Driven Design</p>
                <ul className="list-unstyled small text-secondary d-flex flex-column gap-1">
                  <li>/ Claude Code</li>
                  <li>/ Lovable</li>
                  <li>/ V0</li>
                  <li>/ Figma Make</li>
                  <li>/ Google Stitch</li>
                  <li>/ MCP</li>
                </ul>
              </div>
              
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </main>
  );
}