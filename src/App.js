import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <React.Fragment>
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <Navbar />
            <Routes>
              <Route
                path='/react-portfolio'
                element={<About />}
              />
              <Route
                path='/portfolio'
                element={<Portfolio />}
              />
              <Route
                path='/contact'
                element={<Contact />}
              />
              <Route
                path="/resume"
                element={<Resume />}
              />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;