import { Component } from "react"

import Mailchimp from "react-mailchimp-form"


class SignUpForm extends Component {
  render() {
    return (
        <div>
            <Mailchimp
            action="https://1thing.us20.list-manage.com/subscribe/post?u=21d473c726961a9ff53d21a35&id=81aac402d9"
            fields={[
                {
                name: "NAME",
                label: "Name",
                placeholder: "Enter your name",
                type: "name",
                required: true
                },
                {
                name: "EMAIL",
                label:"Email",
                placeholder: "Enter your email",
                type: "email",
                required: true
                }, 
                {
                name: "COMMENTS",
                label: "Message",
                placeholder: "Type your message here",
                type: "text",
                required: true
                }, 
            ]}
            messages={{
                sending: "Sending...",
                success: "Thank you for subscribing!",
                error: "An unexpected internal error has occurred.",
                empty: "Please provide a valid e-mail.",
                duplicate: "Too many subscribe attempts for this email address",
                button: "Subscribe!"
            }}
            className="signup"
            />
      </div>
    )
  }
}

export default SignUpForm;