import { Component } from "react";
import { Row, Col } from "reactstrap";
import Mailchimp from "./mailChimp";
import logo from "../../assets/home-page/smallLogo.svg";
import "../signup/SignUp.css";
import { Container } from "react-bootstrap";

class Signup extends Component {
  render() {
    const { signupTitle } = this.props;
    return (
      <>
        <Row>
          <Col className="signup-title-section">
            <img
              src={logo}
              style={{ width: "37px", height: "23.5px" }}
              alt="1 Thing Logo"
            ></img>
            &nbsp;
            <h1 className="signup-title">{signupTitle}</h1>
          </Col>
        </Row>
        <div>
          <Mailchimp
            action="https://1thing.us20.list-manage.com/subscribe/post?u=21d473c726961a9ff53d21a35&id=81aac402d9"
            fields={[
              {
                name: "NAME",
                placeholder: "Enter your Name",
                type: "text",
                required: true,
              },

              {
                name: "Subject",
                placeholder: "Enter your email",
                type: "text",
                required: true,
              },
              {
                name: "EMAIL",
                placeholder: "Enter your email",
                type: "email",
                required: true,
              },
              {
                name: "MESSAGE",
                placeholder: "Enter your message",
                type: "textarea",
                required: true,
                rows: 7,
              },
            ]}
            messages={{
              sending: "Sending...",
              success: "Thank you for subscribing!",
              error: "An unexpected internal error has occurred.",
              empty: "Please provide a valid e-mail.",
              duplicate: "Too many subscribe attempts for this email address",
              button: "Submit",
            }}
          />
        </div>
      </>
    );
  }
}

export default Signup;
