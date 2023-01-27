import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import TakeAction from './components/actions/TakeAction';
import Testimonials from './components/testimonials/Testimonials';
import AboutUs from './components/about/AboutUs';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/takeaction" element={<TakeAction />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
