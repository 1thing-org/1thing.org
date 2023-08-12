import Story from "./Story";
import Card from "react-bootstrap/Card";
import "./StorySection-2.css";
import { Button } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useState, useEffect } from "react";

const storyData: { name: string; quote: string; picUrl: string }[] = [
  {
    name: "Li M.",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
    picUrl: require("assets/home-page/profile-placeholder.jpeg"),
  },
  {
    name: "Kai K.",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
    picUrl: require("assets/home-page/profile-placeholder.jpeg"),
  },
  {
    name: "Josh C.",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
    picUrl: require("assets/home-page/profile-placeholder.jpeg"),
  },
  {
    name: "Hannelore B.",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
    picUrl: require("assets/home-page/profile-placeholder.jpeg"),
  },
];

function StorySection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 767);
    });
  }, []);
  return (
    <div id="story-section">
      <div id="story-desc">
        <h2 className="our-story">Our Story</h2>
        <p className="story-text">
          1 Thing Against Racism began as a slide deck shared around the offices
          at Google. Today, it is a mission driven organization comprised of
          volunteers who contribute their time to our mission.
        </p>
        <Button className="story-button" href="#">
          Read More
        </Button>
      </div>

      {isMobile ? (
        <Carousel
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
          useKeyboardArrows={true}
        >
          <Card id="story">
            <Card.Text id="story-quote">
              Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim
              porttitor tristique id lectus.
            </Card.Text>
            <Card.Body id="story-body">
              <Card.Img
                id="profile-pic"
                src={require("assets/home-page/profile-placeholder.jpeg")}
              />
              <Card.Text id="story-name">Li M.</Card.Text>
            </Card.Body>
          </Card>
          <Card id="story">
            <Card.Text id="story-quote">
              Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim
              porttitor tristique id lectus.
            </Card.Text>
            <Card.Body id="story-body">
              <Card.Img
                id="profile-pic"
                src={require("assets/home-page/profile-placeholder.jpeg")}
              />
              <Card.Text id="story-name">Kai K.</Card.Text>
            </Card.Body>
          </Card>
          <Card id="story">
            <Card.Text id="story-quote">
              Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim
              porttitor tristique id lectus.
            </Card.Text>
            <Card.Body id="story-body">
              <Card.Img
                id="profile-pic"
                src={require("assets/home-page/profile-placeholder.jpeg")}
              />
              <Card.Text id="story-name">Josh C.</Card.Text>
            </Card.Body>
          </Card>
          <Card id="story">
            <Card.Text id="story-quote">
              Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim
              porttitor tristique id lectus.
            </Card.Text>
            <Card.Body id="story-body">
              <Card.Img
                id="profile-pic"
                src={require("assets/home-page/profile-placeholder.jpeg")}
              />
              <Card.Text id="story-name">Hannelore B.</Card.Text>
            </Card.Body>
          </Card>
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
    </div>
  );
}

export default StorySection;
