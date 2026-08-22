import "./Footer.css";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "mailto:hello@aftabkhalid.com" },
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
          <div className="col-2" data-reveal="group">
            
            <h4 className="mb-40" data-reveal="item">Menu</h4>
            <nav className="nav flex-column">
              {footerLinks.map((link) => (
                <a className="nav-link p-0 fs-24 active" data-reveal="item" aria-current="page" key={link.label} href={link.href}>{link.label}</a>
               ))}
            </nav>

          </div>

          <div className="col-2">
            
            <div className="row align-items-stratch h-100" data-reveal="group">
              <div className="col-12">
                <h4 className="mb-40" data-reveal="item">Contact</h4>
                <p data-reveal="item">
                  Based in Lahore, Pakistan
                  <br />
                  PH: 0092 321 6400806
                </p>
              </div>
              <div className="col-12 mt-auto">
                <a href="mailto:hello@aftabkhalid.com" data-reveal="item">hello@aftabkhalid.com</a>              
              </div>
            </div>

          </div>
          
          <div className="col-3 ms-auto">
            <div className="row align-items-end h-100">
              <div className="col social-icons" data-reveal="group">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    data-reveal="item"
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