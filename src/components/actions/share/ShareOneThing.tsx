import "./ShareOneThing.css";
import smallLogo from "../../../assets/home-page/smallLogo.svg"

function ShareOneThing() {
  return (
    <div className="share form">
      <div className="wrapper">
        <div className="form-inner-cont">
          <form
            action="https://sendmail.w3layouts.com/submitForm"
            method="post"
            className="signin-form"
          >
            <h4>
              <img
                src = {smallLogo}
                style={{ width: "37.4px", height: "23.5px" }}
                alt="1 Thing Logo"
              />
              <span> Share You One Thing</span>
            </h4>
            <div className="form-input">
              <label className="smallTitle" htmlFor="w3lName">
                Name
              </label>
              <input
                type="text"
                name="w3lName"
                id="w3lName"
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
              <label className="smallTitle" htmlFor="w3lSender">
                Email
              </label>
              <input
                type="email"
                name="w3lSender"
                id="w3lSender"
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
export default ShareOneThing;
