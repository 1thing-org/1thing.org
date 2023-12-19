import { Col, Container } from "react-bootstrap";
import logo from "../../assets/home-page/smallLogo.svg"
import "./ContactUs.css"

function ContactOneThing() {
    return (
      <div
        className="share-us-form"
      >
        <div className="wrapper">
          <div className="form-inner-cont">
            <form
              action="https://1thing.us20.list-manage.com/subscribe/post?u=21d473c726961a9ff53d21a35&id=81aac402d9"
              method="post"
              className="signin-form"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "37px", height: "23.5px" }}
                />
                <h4 style={{ textAlign: "center", marginBottom: "0" }}>
                  Contact Us
                </h4>
              </div>
              <div className="form-input">
                <label className="smallTitle" htmlFor="FNAME">
                  Name
                </label>
                <input
                  type="text"
                  name="FNAME"
                  id="FNAME"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-input">
                <label className="smallTitle" htmlFor="w3lSubject">
                  Subject
                </label>
                <input
                  type="text"
                  name="w3lSubject"
                  id="w3lSubject"
                  placeholder="Enter subject"
                  required
                />
              </div>
              <div className="form-input">
                <label className="smallTitle" htmlFor="EMAIL">
                  Email
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  id="EMAIL"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-input">
                <label className="smallTitle" htmlFor="w3lMessage">
                  Message
                </label>
                <textarea
                  name="w3lMessage"
                  id="w3lMessage"
                  placeholder="Type your query here"
                ></textarea>
              </div>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ContactOneThing;
