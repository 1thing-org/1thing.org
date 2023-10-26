import Story from "./Story";
import Card from "react-bootstrap/Card";
// import "./StorySection-2.css";
import "./Story.css";
import { Button } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useState, useEffect } from "react";
import logo from "../../../assets/home-page/smallLogo.svg"
import {Container, Row, Col} from 'react-bootstrap'
const storyData: { name: string; quote: string; picUrl: string }[] = [
  {
    name: "Li M.",
    quote:
    "The presentation experience shifted my perspective, motivating me to take manageable actions without fretting over immediate results and encouraging others to join me. I believed that if enough people became mobilized, real change would follow. This led me to establish the non-profit organization, 1 Thing Against Racism.",
    picUrl: require("assets/volunteers/Li.png"),
  },
  {
    name: "Kai K.",
    quote:
      "Sometimes we can be daunted by how big of an idea we have but once we start breaking it down and just start doing something, no matter how big or small it is at least we are doing something. The big idea will feel less daunting and more achievable.",
    picUrl: require("assets/home-page/profile-placeholder.jpeg"),
  },
  {
    name: "Josh C.",
    quote:
      "Share your story, because how else are you going to get to know another person? Be empathetic. You have to start somewhere and what easier place to start than with your personal story?",
    picUrl: require("assets/volunteers/Josh.png"),
  },
];

function StorySection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 700);
    });
  }, []);
  return (
    <div id="story-section">
      <Container id="our-sotry-text-container">
        <img src={logo} style={{ width: "37px", height: "23.5px" }}></img>

        <h2 className="our-story">Our Story</h2>
      </Container>
      <Col className="mt-1 mb-2">
        <p className="story-text">
          1 Thing Against Racism began as a slide deck shared around the offices
          at Google. Today, it is a mission driven organization comprised of
          volunteers who contribute their time to our mission.
        </p>
      </Col>

      <Row>
        {isMobile ? (
          <Carousel
            showThumbs={false}
            showStatus={false}
            dynamicHeight={false}
            useKeyboardArrows={true}
          >
            <Col className="mt-0 mb-0">
              <Card id="story">
                <Card.Text id="story-name" className="story-name">
                  Li M.
                </Card.Text>
                <Card.Text id="story-quote">
                  The presentation experience shifted my perspective, motivating
                  me to take manageable actions without fretting over immediate
                  results and encouraging others to join me. I believed that if
                  enough people became mobilized, real change would follow. This
                  led me to establish the non-profit organization, 1 Thing
                  Against Racism.
                </Card.Text>
                <Card.Body id="story-body">
                  <Card.Img
                    id="profile-pic"
                    src={require("assets/volunteers/Li.png")}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-0 mb-0">
              <Card id="story">
                <Card.Text id="story-name" className="story-name">
                  Kai K.
                </Card.Text>
                <Card.Text id="story-quote">
                  Sometimes we can be daunted by how big of an idea we have but
                  once we start breaking it down and just start doing something,
                  no matter how big or small it is at least we are doing
                  something. The big idea will feel less daunting and more
                  achievable.
                </Card.Text>
                <Card.Body id="story-body">
                  <Card.Img
                    id="profile-pic"
                    src={require("assets/home-page/profile-placeholder.jpeg")}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-0 mb-0">
              <Card id="story">
                <Card.Text id="story-name" className="story-name">
                  Josh C.
                </Card.Text>
                <Card.Text id="story-quote">
                  Share your story, because how else are you going to get to
                  know another person? Be empathetic. You have to start
                  somewhere and what easier place to start than with your
                  personal story?
                </Card.Text>
                <Card.Body id="story-body">
                  <Card.Img
                    id="profile-pic"
                    src={require("assets/volunteers/Josh.png")}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Carousel>
        ) : (
          <div id="stories">
            {storyData.map((story) => (
              <Story
                name={story.name}
                quote={story.quote}
                picUrl={story.picUrl}
              />
            ))}
          </div>
        )}
      </Row>
      <Row>
        <Button className="story-button" href="#">
          Read More
        </Button>
      </Row>
    </div>
  );
}

export default StorySection;