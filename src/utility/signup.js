import { Component } from "react";
import { Row, Col } from "reactstrap";
import Mailchimp from "react-mailchimp-form";
import logo from "../assets/home-page/smallLogo.svg";

class SignUpForm extends Component {
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
            {signupTitle}
          </Col>
        </Row>
        <div className="signup">
          <Mailchimp
            action="https://1thing.us20.list-manage.com/subscribe/post?u=21d473c726961a9ff53d21a35&id=81aac402d9"
            fields={[
              {
                name: "NAME",
                label: "Name",
                placeholder: "Enter your name",
                type: "name",
                required: true,
              },
              {
                name: "EMAIL",
                label: "Email",
                placeholder: "Enter your email",
                type: "email",
                required: true,
              },
              {
                name: "COMMENTS",
                label: "Message",
                placeholder: "Type your message here",
                type: "text",
                required: true,
              },
            ]}
            messages={{
              sending: "Sending...",
              success: "Thank you for subscribing!",
              error: "An unexpected internal error has occurred.",
              empty: "Please provide a valid e-mail.",
              duplicate: "Too many subscribe attempts for this email address",
              button: "CONFIRM!",
            }}
          />
        </div>
      </>
    );
  }
}

export default SignUpForm;
