import Story from "./Story";
import "./Story.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import logo from "../../../assets/home-page/smallLogo.svg";
import { Container, Row, Col } from "react-bootstrap";
const storyData: {
  name: string;
  quote: string;
  picUrl: string;
  link: string;
}[] = [
  {
    name: "Li M.",
    quote:
      '"The presentation experience shifted my perspective, motivating me to take manageable actions without fretting over immediate results and encouraging others to join me. I believed that if enough people became mobilized, real change would follow. This led me to establish the non-profit organization, 1 Thing Against Racism."',
    picUrl: require("assets/volunteers/Li.png"),
    link: "/interviews/LiM",
  },
  {
    name: "Kai K.",
    quote:
      '"Sometimes we can be daunted by how big of an idea we have but once we start breaking it down and just start doing something, no matter how big or small it is at least we are doing something. The big idea will feel less daunting and more achievable."',
    picUrl: require("assets/volunteers/Kai.png"),
    link: "/interviews/KaiK",
  },
  {
    name: "Josh C.",
    quote:
      '"Share your story, because how else are you going to get to know another person? Be empathetic. You have to start somewhere and what easier place to start than with your personal story?"',
    picUrl: require("assets/volunteers/Josh.png"),
    link: "/interviews/JoshC",
  },
];

function StorySection() {
  return (
    <div id="story-section">
      <Container id="our-sotry-text-container">
        <img
          src={logo}
          style={{ width: "37px", height: "23.5px" }}
          alt="1thing logo"
        ></img>
        <h2 className="our-story">Our Story</h2>
      </Container>
      <Col className="mt-1 mb-2">
        <p className="story-text">
          1 Thing Against Racism began as a presentation shared around the
          offices at work. Today, it is a mission-driven organization comprised
          of volunteers who contribute their time to realize our goals.
        </p>
      </Col>

      <Row>
        <div id="stories">
          {storyData.map((story) => (
            <Story
              key={story.name}
              name={story.name}
              quote={story.quote}
              picUrl={story.picUrl}
              link={story.link}
            />
          ))}
        </div>
      </Row>
    </div>
  );
}

export default StorySection;
