import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Chart from "components/HCTChart/Chart.js";
import Action from "components/Actions/Actions.js";
import Header from "components/Headers/Header.js";
import TopSection from "components/TopSections/TopSection.js";
import Footer from "components/Footers/Footer.js";



class Welcome extends Component {
  render() {

    return (
      <Router>
        <div>
          <Header />
          <TopSection />
          <Chart />
          <Action />
          <Footer />
        </div>
      </Router>
    )

  }
}

export default Welcome