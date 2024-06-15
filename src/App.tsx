import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import TakeAction from "./components/actions/TakeAction";
import Testimonials from "./components/testimonials/Testimonials";
import AboutUs from "./components/about/AboutUs";
import Contact from "./components/contact/Contact";
import ProjectTogether from "components/projects/projectTogether/ProjectTogether";
import VictimSupportFund from "components/projects/victimSupportFund/VictimSupportFund";
import VolunteerSection from "./components/testimonials/VolunteerSection/VolunteerSection";
import LiMPage from "./components/testimonials/testimonialsDetails/LiMPage";
import KaiKPage from "./components/testimonials/testimonialsDetails/KaiKPage";
import JoshCPage from "./components/testimonials/testimonialsDetails/JoshCPage";
import projectTracker from "./components/projects/projectTracker/ProjectTracker";
import ProjectTracker from "./components/projects/projectTracker/ProjectTracker";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/takeaction" element={<TakeAction />} />

          <Route path="/testimonials" element={<Testimonials />} />

          <Route path="/volunteers" element={<VolunteerSection />} />
          <Route path="/interviews/LiM" element={<LiMPage />} />
          <Route path="/interviews/KaiK" element={<KaiKPage />} />
          <Route path="/interviews/JoshC" element={<JoshCPage />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route
              path="/projects/project-tracker"
              element={<ProjectTracker />}
          />
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
