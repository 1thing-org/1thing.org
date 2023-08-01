
import "./WorkingOn.css";
import placeholderimg from "../../../assets//home-page/working-on-placeholder.svg";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useState, useEffect } from "react";

function WorkingOn() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 767);
    });
  }, []);
  return (
    <div className="working-on-container">
      <h1 className="main-title">We're also Working on</h1>
      <div className="images">
      {isMobile ? (
      <Carousel showThumbs={false} showStatus={false} dynamicHeight={false} useKeyboardArrows={true}>
        <div className="image-container-project">
          <img className="left-image" src={placeholderimg} alt="Left Image" />
          <h2 className="title">Project Together</h2>
          <p className="working-text">
              The Asian American and Pacific Islander (AAPI) community is facing
              a number of challenges, including increased hate crimes,
              discrimination, and lack of representation. These challenges can
              be overwhelming, and it can be difficult to know where to start to
              help.         
          </p>
          <br></br>
          <Link to="/projects/project-together">Learn More</Link>
        </div>
        <div className="image-container-victim">
          <img className="right-image" src={placeholderimg} alt="Right Image" />
          <h2 className="title">Victim Support Fund</h2>
          <p className="working-text">
            As a 501C(3) non profit, 1thing.org receives donations from
            individuals and corporations like Google. We disburse the funds to
            victims of anti-Asian hate crimes in a transparent and accountable
            manner, and provide regular updates to donors and the public on the
            progress of the fundraising campaign and how the funds are being
            used. With careful planning and execution, we ensure that the funds
            are used effectively and efficiently. We ensure that victims receive
            support and resources to address their needs and challenges.
            <br></br>
              Click to learn about the disbursement process and the impact of
              the funds on the victims and the community.
          </p>
          <br></br>
          <Link to="/projects/victim-support-fund">Learn More</Link>
        </div>
        </Carousel>
           ) : (
            <>
             <div className="image-container">
          <img className="left-image" src={placeholderimg} alt="Left Image" />
          <h2 className="title">Project Together</h2>
          <p className="working-text">
              The Asian American and Pacific Islander (AAPI) community is facing
              a number of challenges, including increased hate crimes,
              discrimination, and lack of representation. These challenges can
              be overwhelming, and it can be difficult to know where to start to
              help.         
          </p>
          <br></br>
          <Link to="/projects/project-together">Learn More</Link>
          </div>
        <div className="image-container">
          <img className="right-image" src={placeholderimg} alt="Right Image" />
          <h2 className="title">Victim Support Fund</h2>
          <p className="working-text">
            As a 501C(3) non profit, 1thing.org receives donations from
            individuals and corporations like Google. We disburse the funds to
            victims of anti-Asian hate crimes in a transparent and accountable
            manner, and provide regular updates to donors and the public on the
            progress of the fundraising campaign and how the funds are being
            used. With careful planning and execution, we ensure that the funds
            are used effectively and efficiently. We ensure that victims receive
            support and resources to address their needs and challenges.
            <br></br>
              Click to learn about the disbursement process and the impact of
              the funds on the victims and the community.
          </p>
          <br></br>
          <Link to="/projects/victim-support-fund">Learn More</Link>
        </div>
        </>
        )}

      </div>
    </div>
  );
}
export default WorkingOn;
