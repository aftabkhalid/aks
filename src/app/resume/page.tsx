import Link from "next/link";
import Navigation from "@/components/navigation/Navigation";

export default function ResumePage() {
  return (
    <main className="">

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Navigation />
          </div>
        </div>
      </div>

      <div className="container-fluid text-dark pb-120">

        <section className="row mb-5 py-80">
          <div className="col-12 col-md-9 ms-auto">
            <span className="ak-badge">
              / Resume
            </span>
            <h1 className="display-4 fw-normal mb-4">
              Resume, <span className="font-rubik">Experience,</span> and the details.
            </h1>
            <div className="d-flex gap-2 flex-wrap">
              <a href="/resume.pdf" download className="btn btn-dark rounded-pill px-4 py-2">
                Download Resume
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-dark rounded-pill px-4 py-2">
                View Portfolio
              </a>
              <button type="button" className="btn btn-light border rounded-pill px-4 py-2">
                Share
              </button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="row border-top py-4 align-items-start px-30 fs-16">
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <h2 className="fs-12 text-uppercase">Experience</h2>
          </div>
          <div className="col-12 col-md-9">
            {/* Item 1 */}
            <div className="row mb-4">
              <div className="col-12 col-md-4">Vaival Technologies</div>
              <div className="col-12 col-md-8">
                <div className="mb-2">
                  <span className="fw-semibold">Manager Design Services</span>
                </div>
                <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                  <li>
                    Joined when the design function was 5 people, tooling was outdated, and no infrastructure existed. Today: 12 designers, modern tooling, defined processes, and an AI-augmented workflow that changed how we deliver design at scale.
                  </li>
                </ul>
                <span className="small text-muted">March 2022 – April 2026</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="row mb-4">
              <div className="col-12 col-md-4">BlueEast</div>
              <div className="col-12 col-md-8">
                <div className="mb-2">
                  <span className="fw-semibold">Lead UX Designer</span>
                </div>
                <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                  <li>
                    BlueEast is the technology arm of Orient Group of Companies — Pakistan's leading home appliance corporation. I owned end-to-end UX strategy for BlueBase — Orient's IoT platform connecting ACs, refrigerators, water dispensers, and third-party Wi-Fi devices. A single long-term product with direct commercial stakes.
                  </li>
                </ul>
                <span className="small text-muted">December 2016 – February 2022</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="row mb-4">
              <div className="col-12 col-md-4">KuroBase Inc.</div>
              <div className="col-12 col-md-8">
                <div className="mb-2">
                  <span className="fw-semibold">Principle UI/UX Designer</span>
                </div>
                <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                  <li>
                    KuroBase was a Database-as-a-Service startup built on Couchbase — targeting software developers and technical teams who needed flexible, scalable database management without infrastructure overhead. As Principal UI/UX Designer, I was responsible for the complete design of a product where the primary users were developers: the most demanding, least forgiving audience in product design.
                  </li>
                </ul>
                <span className="small text-muted">October 2012 – December 2016</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="row mb-4">
              <div className="col-12 col-md-4">7Vals</div>
              <div className="col-12 col-md-8">
                <div className="mb-2">
                  <span className="fw-semibold">Front-end UI/UX Designer</span>
                </div>
                <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                  <li>
                    7Vals was a B2B product company building an asset management platform — designed to replace the fragmented, error-prone reality of managing company assets across multiple Excel sheets. As Product Designer, I joined at a stage where no comparable product existed as reference — meaning the UX had to be built from first principles, not borrowed from existing patterns.
                  </li>
                </ul>
                <span className="small text-muted">November 2011 – October 2013</span>
              </div>
            </div>

            {/* Item 5 */}
            <div className="row mb-4">
              <div className="col-12 col-md-4">Hashe Computer Solutions</div>
              <div className="col-12 col-md-8">
                <div className="mb-2">
                  <span className="fw-semibold">Senior Web UI/UX Designer</span>
                </div>
                <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                  <li>
                    Led UI/UX design across multiple client projects at a computer solutions firm — delivering user-friendly interfaces for diverse client requirements while managing client relationships directly. Mentored junior designers and collaborated with development teams to ensure design accuracy from concept to implementation.
                  </li>
                </ul>
                <span className="small text-muted">August 2010 – October 2011</span>
              </div>
            </div>

            {/* Item 6 */}
            <div className="row mb-4">
              <div className="col-12 col-md-4">Crystal IT Expert </div>
              <div className="col-12 col-md-8">
                <div className="mb-2">
                  <span className="fw-semibold">Senior Web Designer & Team Lead</span>
                </div>
                <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                  <li>
                    Managed the web design team at a client-facing IT firm — overseeing design and development of client websites, ensuring usability and accessibility standards were met, and staying current with emerging web design technologies. Conducted design reviews and maintained quality standards across all client deliverables.
                  </li>
                </ul>
                <span className="small text-muted">April 2009 – July 2010</span>
              </div>
            </div>

            {/* Item 7 */}
            <div className="row mb-4">
              <div className="col-12 col-md-4">Hashe Computer Solutions</div>
              <div className="col-12 col-md-8">
                <div className="mb-2">
                  <span className="fw-semibold">Web Graphic Designer</span>
                </div>
                <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                  <li>
                    Designed visual and interactive elements for web applications and marketing materials — collaborating with developers to ensure accurate implementation and maintaining brand consistency across digital platforms. Managed multiple concurrent projects while ensuring timely delivery and client alignment.
                  </li>
                </ul>
                <span className="small text-muted">March 2007 – March 2009</span>
              </div>
            </div>

            {/* Item 8 */}
            <div className="row mb-4">
              <div className="col-12 col-md-4">Ravont Inc</div>
              <div className="col-12 col-md-8">
                <div className="mb-2">
                  <span className="fw-semibold">Web Graphic Designer</span>
                </div>
                <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                  <li>
                    Created visual designs for websites and web applications — working directly with clients to understand requirements and deliver tailored design solutions. Maintained brand consistency across digital platforms and collaborated with development teams to bridge design intent and technical execution.
                  </li>
                </ul>
                <span className="small text-muted">February 2006 – February 2007</span>
              </div>
            </div>

            {/* Item 9 */}
            <div className="row mb-4">
              <div className="col-12 col-md-4">Image Zone</div>
              <div className="col-12 col-md-8">
                <div className="mb-2">
                  <span className="fw-semibold">Graphic Designer</span>
                </div>
                <ul className="list-unstyled text-secondary small d-flex flex-column gap-2">
                  <li>
                    Started my design career at Image Zone — designing print and digital materials including branding, logos, brochures, and advertisements. Managed multiple simultaneous projects, developed foundational skills in visual communication and client management that have underpinned every subsequent role across 24 years.
                  </li>
                </ul>
                <span className="small text-muted">June 2002 – January 2006</span>
              </div>
            </div>
            
          </div>
        </section>

        {/* Skills Section */}
        <section className="row border-top py-4 align-items-start px-30 fs-16">
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <h2 className="fs-12 text-uppercase">Skills</h2>
          </div>
          <div className="col-12 col-md-9">
            <div className="row mb-3">
              <div className="col-12 col-md-4">UX Research & Strategy</div>
              <div className="col-12 col-md-8 text-secondary">
                User-Centered design, User persona, User journey, Accessibility design, Usability design, Information architecture, A/B testing, Competitive analysis, Quantitative & aualitative research.
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-4">Visual & UI Design</div>
              <div className="col-12 col-md-8 text-secondary">
                Design System, UI Pattern, Responsive Design, Visual Hierarchy, Branding, Design Tokens.
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-4">Tools</div>
              <div className="col-12 col-md-8 text-secondary">
                Figma, FigJam, Affinity Design, Adobe Illustrator, Adobe Photoshop, Webflow
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">AI-Driven Design</div>
              <div className="col-12 col-md-8 text-secondary">
                Claude Code, Lovable, V0, Figma Make, Google Stitch, MCP
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="row border-top py-4 align-items-start px-30 fs-16">
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <h2 className="fs-12 text-uppercase">Details</h2>
          </div>
          <div className="col-12 col-md-9">
            <div className="row mb-2">
              <div className="col-12 col-md-4">Location</div>
              <div className="col-12 col-md-8 text-secondary">Lahore, Pakistan</div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-4">Languages</div>
              <div className="col-12 col-md-8 text-secondary">English, Urdu, Panjabi</div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-4">Email</div>
              <div className="col-12 col-md-8">
                <a href="mailto:hello@aftabkhalid.com" className="text-decoration-none text-dark border-bottom">
                  hello@aftabkhalid.com
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">LinkedIn</div>
              <div className="col-12 col-md-8">
                <a href="https://linkedin.com/in/aftabkhalid" target="_blank" rel="noreferrer" className="text-decoration-none text-dark border-bottom">
                  linkedin.com ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}