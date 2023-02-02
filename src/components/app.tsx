import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styles from "../assets/styles/global.module.css"
import { DefaultLayout } from "./Layouts"

import TakeAction from "./actions/take-action"
import AboutUs from "./about/AboutUs"
import Contact from "./contact/ContactUs"
import { HomePage } from "./Views/"
import { TestimonialSection } from "./Testimonials/"

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/take-actions"
            element={
              <DefaultLayout>
                <TakeAction />
              </DefaultLayout>
            }
          />
          <Route
            path="/testimonials"
            element={
              <DefaultLayout>
                <TestimonialSection />
              </DefaultLayout>
            }
          />
          <Route
            path="/about-us"
            element={
              <DefaultLayout>
                <AboutUs />
              </DefaultLayout>
            }
          />
          <Route
            path="/contact-us"
            element={
              <DefaultLayout>
                <Contact />
              </DefaultLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
