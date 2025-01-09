import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { IconName, IconProp } from "@fortawesome/fontawesome-svg-core";
import "./Footer.css";
import { Navbar } from "react-bootstrap";
import footerLogo from "../../assets/logo.svg";
import footerText from "../../assets/1 Thing Against Racism.svg";
import MailChimpForm from "../../utility/mailchimp";

function SocialMedia({ name, refLink }: { name: IconProp; refLink: string }) {
  return (
    <a
      className="icon"
      href={refLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={name as IconName} />
    </a>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left-side">
          <Navbar.Brand className="brand-container">
            <img
              className="footer-logo"
              src={footerLogo}
              width="100"
              height="100"
              alt="1 Thing Org logo"
            />
          </Navbar.Brand>
          <div className="social-icons">
            <SocialMedia name={faEnvelope} refLink="mailto:info@1thing.org" />
            <SocialMedia
              name={faTwitter}
              refLink="https://twitter.com/1Thing_Org"
            />
            <SocialMedia
              name={faLinkedin}
              refLink="https://www.linkedin.com/company/1-thing-org/"
            />
            <SocialMedia
              name={faFacebook}
              refLink="https://www.facebook.com/people/One-Thing-Org/100081311228444/"
            />
          </div>
          <p className="copy-right">
            1 Thing Against Racism © {currentYear} All rights reserved.{" "}
          </p>
        </div>
        <div className="split-line"></div>
        <div className="footer-right-side">
          <p className="sign-up-text">
            Sign up for our newsletter to get updates on the organization and
            the projects we’re working on.
          </p>
          <div className="subscribe-form">
            <MailChimpForm />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
