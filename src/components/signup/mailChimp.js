import React from "react";
import jsonp from "jsonp";
import PropTypes from "prop-types";
import "./mailChimp.css";
import { Container } from "react-bootstrap";

class Mailchimp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      ...props.fields.reduce(
        (acc, field) => ({ ...acc, [field.name]: "" }),
        {}
      ),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { fields, action } = this.props;
    const values = fields
      .map((field) => {
        return `${field.name}=${encodeURIComponent(this.state[field.name])}`;
      })
      .join("&");
    const path = `${action}&${values}`;
    const url = path.replace("/post?", "/post-json?");
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    const email = this.state["EMAIL"];
    !regex.test(email)
      ? this.setState({ status: "empty" })
      : this.sendData(url);
  }

  sendData(url) {
    this.setState({ status: "sending" });
    jsonp(url, { param: "c" }, (err, data) => {
      if (data.msg.includes("already subscribed")) {
        this.setState({ status: "duplicate" });
      } else if (err) {
        this.setState({ status: "error" });
      } else if (data.result !== "success") {
        this.setState({ status: "error" });
      } else {
        this.setState({ status: "success" }, () => {
          setTimeout(() => {
            // Clear form fields by resetting the state
            this.setState(
              this.props.fields.reduce(
                (acc, field) => ({
                  ...acc,
                  [field.name]: "",
                }),
                { status: "" }
              )
            );
          }, 3000); // Clear after 1.5 seconds
        });
      }
    });
  }

  renderField(input, index) {
    return (
      <Container id="signUpFormContainer" key={index}>
        <div className="form-group">
          <label htmlFor={input.name}>{input.name.toUpperCase()}</label>
          {input.type === "textarea" ? (
            <textarea
              {...input}
              id={input.name}
              className="form-control"
              onChange={({ target }) =>
                this.setState({ [input.name]: target.value })
              }
              value={this.state[input.name]} // Controlled component
              rows={input.rows || 4}
            />
          ) : (
            <input
              {...input}
              id={input.name}
              className="form-control"
              onChange={({ target }) =>
                this.setState({ [input.name]: target.value })
              }
              value={this.state[input.name]} // Controlled component
            />
          )}
        </div>
      </Container>
    );
  }

  render() {
    const { fields, className, buttonClassName } = this.props;
    const messages = {
      ...Mailchimp.defaultProps.messages,
      ...this.props.messages,
    };
    const { status } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={className}>
        {fields.map((input, idx) => this.renderField(input, idx))}
        <button
          disabled={status === "sending" || status === "success"}
          type="submit"
          className={buttonClassName}
        >
          {messages.button}
        </button>
        <div className="msg-alert">
          {status === "sending" && <p>{messages.sending}</p>}
          {status === "success" && <p>{messages.success}</p>}
          {status === "duplicate" && <p>{messages.duplicate}</p>}
          {status === "empty" && <p>{messages.empty}</p>}
          {status === "error" && <p>{messages.error}</p>}
        </div>
      </form>
    );
  }
}

Mailchimp.defaultProps = {
  messages: {
    sending: "Sending...",
    success: "Thank you for subscribing!",
    error: "An unexpected internal error has occurred.",
    empty: "You must write an e-mail.",
    duplicate: "Too many subscribe attempts for this email address",
    button: "Subscribe!",
  },
  buttonClassName: "btn",
  className: "mailchimp-form",
};

Mailchimp.propTypes = {
  action: PropTypes.string.isRequired,
  messages: PropTypes.object,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      type: PropTypes.string,
      required: PropTypes.bool,
      rows: PropTypes.number,
    })
  ).isRequired,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default Mailchimp;
