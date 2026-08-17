import "./Footer.css";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const socialLinks = [
  { label: "LinkedIn", shortLabel: "LinkedIn", href: "https://linkedin.com/in/aftabkhalid" },
  { label: "Dribbble", shortLabel: "Dribbble", href: "https://dribbble.com/aftabkhalid" },
];

export default function Footer() {
  return (
   <footer className="footer">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-2">
            
            <h4 className="mb-40">Menu</h4>
            <nav className="nav flex-column">
              {footerLinks.map((link) => (
                <a className="nav-link p-0 fs-24 active" aria-current="page" key={link.label} href={link.href}>{link.label}</a>
               ))}
            </nav>

          </div>

          <div className="col-2">
            
            <div className="row align-items-stratch h-100">
              <div className="col-12">
                <h4 className="mb-40">Contact</h4>
                <p>
                  Based in Lahore, Pakistan
                  <br />
                  PH: 0092 321 6400806
                </p>
              </div>
              <div className="col-12 mt-auto">
                <a href="mailto:hello@aftabkhalid.com">hello@aftabkhalid.com</a>              
              </div>
            </div>

          </div>
          
          <div className="col-3 ms-auto">
            <div className="row align-items-end h-100">
              <div className="col social-icons">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.shortLabel}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}