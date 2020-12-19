import React from 'react';
import './App.css';

import HowItWorks from './howitworks/HowItWorks';
import ContactUs from './contactus/ContactUs';
import Home from './home/Home';
import Team from './team/Team';
import Visualizer from './visualizer/sortingvisualizer/Visualizer';
import Logo from './component/logo/logo';

function App() {
  return (
    <div className="app">
      <nav className="nav-bar">
        <div className="nav-logo">
          <Logo />
          <a href="#home">SortAlgo</a>
        </div>
        <ul className="nav-menu">
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#howItWorks">How It Works</a>
          </li>
          <li>
            <a href="#visualizer">Visualizer</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#contactUs">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="app-container">
        <Home />
        <HowItWorks />
        <Visualizer />
        <Team />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
