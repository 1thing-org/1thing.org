import React from "react";
import "./WorkingOn.css";
import placeholderimg from "../../../assets//home-page/working-on-placeholder.svg";

function WorkingOn() {
  return (
    <div className="working-on-container">
      <h1 className="main-title">We're also Working on</h1>
      <div className="images">
        <div className="image-container">
          <img className="left-image" src={placeholderimg} alt="Left Image" />
          <h2 className="title">Project Together</h2>
          <p className="working-text">
            Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim
            porttitor tristique id lectus. Eget orci vestibulum fringilla diam
            adipiscing proin.{" "}
          </p>
          <a href="/projects/1">Learn More</a>
        </div>
        <div className="image-container">
          <img className="right-image" src={placeholderimg} alt="Right Image" />
          <h2 className="title">Supporting Victims</h2>
          <p className="working-text">
            Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim
            porttitor tristique id lectus. Eget orci vestibulum fringilla diam
            adipiscing proin.{" "}
          </p>
          <a className="working-link" href="/projects/2">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
export default WorkingOn;
