import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import HallImage from './Hall.jpg'; // Assuming you have this image in the same directory

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <img src={HallImage} alt="Hall" className="hero-image" />

        <nav className="navbar">
          <div className="navbar-left">
            <h1 className="site-title">CareMate</h1>
          </div>
          <ul className="navbar-links">
            <li><Link to="/bmi">BMI Analysis</Link></li>
            <li><Link to="/exercises">Best Exercises</Link></li>
            <li><Link to="/meals">Meal Planning</Link></li>
            <li><Link to="/personalized-care">Personalized Care</Link></li>
          </ul>
          <div className="navbar-right">
            <button className="track-progress">Get Your Plan</button>
          </div>
        </nav>

        <div className="hero-text">
          <h2>TRACK. PLAN. STAY FIT.</h2>
          <p>AI-POWERED FITNESS ANALYSIS & MANAGEMENT</p>
        </div>
      </section>

      {/* You can add more sections below the hero section if needed */}
      {/* <section className="bmi-section">
        <img src={BmiImage} alt="BMI" className="bmi-image" />
      </section> */}
    </div>
  );
};

export default Home;