import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';

import ChartView from "components/HCTChart/ChartView.js";

import Action from "components/Actions/Actions.js";
import Header from "components/Headers/Header.js";
import TopSection from "components/TopSections/TopSection.js";
import Footer from "components/Footers/Footer.js";
import OneThingNavbar from './Headers/index';
import OneThingFooter from './Footers';


class Welcome extends Component {
    render() {
  
      return (
        // <Router>
        <>
        <div>
          {/* <Header /> */}
          <OneThingNavbar/>
          <TopSection />
          <ChartView />
          <Action/>
          <Footer />
          {/* <OneThingFooter/> */}
          </div>
        </>
        // </Router>
      )
  
    }

  }
export default Welcome