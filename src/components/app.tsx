import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styles from "../assets/styles/global.module.css"

import { HomePage, TakeActionPage, AboutPage, ContactPage, TestimonialsPage } from "./Views/"

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/take-actions" element={<TakeActionPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
