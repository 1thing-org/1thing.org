import { Component } from "react"
import { AiOutlineMail } from "react-icons/ai"
import { ImGithub } from "react-icons/im"
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti"
import { Link } from "react-router-dom"
import "./footer.css"

class FooterSection extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="left-side">
            <h4>1 Thing Against Racism</h4>
            <p>
              1 Thing Against Racism is a grassroots, non-profit organization of volunteers founded in 2022. We believe
              ending racism and hate begins with uniting people through compassion and advocacy. Together we can make
              the world a more beautiful place — one thing at a time.
            </p>
            <div className="social-icons flex space-x-4 text-xl">
              <Link target="_self" to="#" onClick={() => ((window as Window).location = "mailto:info@1thing.org")}>
                <AiOutlineMail />
              </Link>
              <Link to="https://twitter.com/1Thing_Org">
                <TiSocialTwitter />
              </Link>
              <Link to="https://www.linkedin.com/company/1-thing-org">
                <TiSocialLinkedin />
              </Link>
              <Link to="https://www.facebook.com/people/One-Thing-Org/100081311228444">
                <TiSocialFacebook />
              </Link>
              <Link to="https://github.com/1thing-org">
                <ImGithub />
              </Link>
            </div>
          </div>
          <div className="split-line"></div>
          <div className="right-side">
            <p>Sign up for our newsletter for updates on the organization and the projects we’re working on.</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default FooterSection
