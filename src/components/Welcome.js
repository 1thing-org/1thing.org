import React, { Component } from "react";

import ChartView from "components/HCTChart/ChartView.js";

import Action from "components/Actions/Actions.js";
import TopSection from "components/TopSections/TopSection.js";
import Footer from "components/Footers/Footer.js";
import OneThingNavbar from "./Headers/index";
import ActionTickerTape from "./ActionTickerTape/ActionTickerTape";

class Welcome extends Component {
  render() {
    return (
      <>
        <div>
          <OneThingNavbar />
          <TopSection />
          <ActionTickerTape />
          <ChartView />
          <Action />
          <Footer />
        </div>
      </>
    );
  }
}
export default Welcome;
