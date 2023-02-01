import { Component } from "react"
import "./footer.css"

import { Link } from "react-router-dom"
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="left-side">
            <h4>1 Thing Against Racism</h4>
            <p>
              1 Thing Against Racism is a grassroots, non-profit organization of volunteers founded in [DATE]. We
              believe ending racism and hate begins with uniting people through compassion and advocacy. Together we can
              make the world a more beautiful place — one thing at a time.
            </p>
            <div className="social-icons">
              <Link to="https://twitter.com/1Thing_Org">Email</Link>
              <Link to="https://twitter.com/1Thing_Org">Twitter</Link>
              <Link to="https://www.linkedin.com/company/1-thing-org">Linkedin</Link>
              <Link to="https://www.facebook.com/people/One-Thing-Org/100081311228444">Facebook</Link>
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

export default Footer
