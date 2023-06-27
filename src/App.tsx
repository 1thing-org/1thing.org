import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import TakeAction from "./components/actions/TakeAction";
import Testimonials from "./components/testimonials/Testimonials";
import AboutUs from "./components/about/AboutUs";
import Contact from "./components/contact/Contact";
import ProjectTogether from "components/projectDetails/ProjectTogether";
import VictimSupportFund from "components/projectDetails/VictimSupportFund";

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
          <Route
            path="/projects/project-together"
            element={<ProjectTogether />}
          />
          <Route
            path="/projects/victim-support-fund"
            element={<VictimSupportFund />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
