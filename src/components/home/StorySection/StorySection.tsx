import Story from "./Story";
import Card from "react-bootstrap/Card";
import "./StorySection-2.css";
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
  {
    name: "Hannelore B.",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
    picUrl: require("assets/home-page/profile-placeholder.jpeg"),
  },
];

function StorySection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 896);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 896);
    });
  }, []);
  return (
    <div id="story-section">
      
      <Container id="story-desc">
      <Col style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"8px"}}>
      <img src={logo} style={{width:'37px', height: '23.5px'}}></img>
        <h2 className="our-story">Our Story</h2>
        </Col>
        <p className="story-text">
        
          1 Thing Against Racism began as a slide deck shared around the offices
          at Google. Today, it is a mission driven organization comprised of
          volunteers who contribute their time to our mission.
        </p>
        <Button className="story-button" href="#">
          Read More
        </Button>
      </Container>

      {isMobile ? (
        <Carousel
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
          useKeyboardArrows={true}
        >
          <Card id="story">
            <Card.Text id="story-quote">
            The presentation experience shifted my perspective, motivating me to take manageable actions without fretting over immediate results and encouraging others to join me. I believed that if enough people became mobilized, real change would follow. This led me to establish the non-profit organization, 1 Thing Against Racism.
            </Card.Text>
            <Card.Body id="story-body">
              <Card.Img
                id="profile-pic"
                src={require("assets/volunteers/Li.png")}
              />
              <Card.Text id="story-name">Li M.</Card.Text>
            </Card.Body>
          </Card>
          <Card id="story">
            <Card.Text id="story-quote">
            Sometimes we can be daunted by how big of an idea we have but once we start breaking it down and just start doing something, no matter how big or small it is at least we are doing something. The big idea will feel less daunting and more achievable.
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
            Share your story, because how else are you going to get to know another person? Be empathetic. You have to start somewhere and what easier place to start than with your personal story?
            </Card.Text>
            <Card.Body id="story-body">
              <Card.Img
                id="profile-pic"
                src={require("assets/volunteers/Josh.png")}
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