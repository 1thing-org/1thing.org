import React, { Component } from "react"
// import the component
import Mailchimp from "react-mailchimp-form"

import styles from "../components/Footers/Footer.module.scss"

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
        // Change predetermined language
        messages={{
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "Please provide a valid e-mail.",
          duplicate: "Too many subscribe attempts for this email address",
          button: "Subscribe!"
        }}
        // Add a personalized class
        className={styles.email}
      />
    )
  }
}

export default MailChimpForm
