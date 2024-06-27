import { Component } from "react";
import { Row, Col } from "reactstrap";
import Mailchimp from "./mailChimp";
import logo from "../../assets/home-page/smallLogo.svg";
import "../signup/SignUp.css";
import { Container } from "react-bootstrap";

class Signup extends Component {
  render() {
    const { signupTitle, containsSubject } = this.props;
    const fields = [
      {
        name: "NAME",
        type: "text",
        required: true,
      },
      {
        name: "EMAIL",
        type: "email",
        required: true,
      },
      {
        name: "MESSAGE",
        type: "textarea",
        required: true,
        rows: 7,
      },
    ];
    if (containsSubject) {
      fields.splice(1, 0, {
        name: "SUBJECT",
        type: "text",
        required: true,
      });
    }
    return (
      <Container id="signup-email-container">
        <Row className="signup-title-section-row">
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
        <div className="signup">
          <Mailchimp
            action="https://1thing.us20.list-manage.com/subscribe/post?u=21d473c726961a9ff53d21a35&id=81aac402d9"
            fields={fields}
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
      </Container>
    );
  }
}

export default Signup;
