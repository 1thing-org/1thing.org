import { Component } from "react";
import Mailchimp from "react-mailchimp-form";

import styles from "../components/footer/Footer"


class MailChimpForm extends Component {
  render() {
    return (
      <Mailchimp
        action="https://1thing.us20.list-manage.com/subscribe/post?u=21d473c726961a9ff53d21a35&id=81aac402d9"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true
          }
        ]}
        messages={{
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "Please provide a valid e-mail.",
          duplicate: "Too many subscribe attempts for this email address",
          button: "Subscribe!"
        }}
      />
    )
  }
}

export default MailChimpForm;