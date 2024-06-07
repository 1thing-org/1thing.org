import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import ActionsGroup from "./actionsgroup/ActionsGroup";
import HeroSection from "./heroaction/HeroAction";
import HeroActionImage from "assets/hero-action.svg";
import Signup from "components/signup/SignUp";
import { Container } from "react-bootstrap";

function TakeAction() {
  return (
    <div>
      <NavBar />
      <HeroSection imageSrc={HeroActionImage} />
      <ActionsGroup />
      <Container
        style={{
          width: "100vw",
          backgroundColor: "#f5f5f5",
          marginTop: "120px",
          marginBottom: "120px",
        }}
      >
        <Container style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <Signup signupTitle={"Share Your One Thing"} containsSubject={true} />
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default TakeAction;
