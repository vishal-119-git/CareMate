import React, { useState } from 'react';
import '../assets/style/bmi.css';

const Bmi = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
    }
  };

  const bmiCategory = () => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    if (bmi < 35) return 'Obese';
    return 'Extremely Obese';
  };

  return (
    <div className="bmi-page">
      <section className="bmi-hero">
        <h1>BMI Calculator and Analysis</h1>
        <p>It helps you understand your body weight category and get personalized health recommendations.</p>
      </section>

      <section className="bmi-content">
        <div className="bmi-info">
          <h2>What is BMI?</h2>
          <p>Body Mass Index (BMI) is a numerical value calculated from a person's weight and height. It assesses whether an individual falls within a healthy weight range relative to their height.</p>

          <h2>How is it calculated?</h2>
          <p><strong>Metric System:</strong> Weight (kg) / Height² (m²)</p>
          <p><strong>Imperial System:</strong> Weight (lbs) × 703 / Height² (in²)</p>

          <h2>Importance of BMI</h2>
          <p>It helps evaluate health risks associated with being underweight or overweight and maintain a healthy lifestyle.</p>

          <h2>What Should You Do After Knowing Your BMI?</h2>
          <ul>
            <li><strong>Underweight:</strong> Focus on nutrition-rich diet and strength training.</li>
            <li><strong>Normal:</strong> Maintain with a balanced diet and regular exercise.</li>
            <li><strong>Overweight:</strong> Focus on healthy habits like portion control and exercise.</li>
            <li><strong>Obese:</strong> Consult a doctor or nutritionist for a personalized weight management plan.</li>
          </ul>
        </div>

        <div className="bmi-calculator">
          <h2>Body Mass Index Calculator</h2>
          <div className="input-group">
            <label>Enter your height (cm):</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Enter your weight (kg):</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button onClick={calculateBMI}>Calculate BMI</button>

          {bmi && (
            <div className="bmi-result">
              <h3>Your BMI: {bmi}</h3>
              <p>Category: {bmiCategory()}</p>
            </div>
          )}
        </div>
      </section>

      <section className="bmi-categories">
        <img src="/bmi-categories.png" alt="BMI Categories" />
      </section>

      <section className="bmi-featured">
        <h2>Featured</h2>
        <div className="featured-boxes">
          <div className="feature-item">
            <h3>Analyze your Health Status</h3>
            <p>AI-driven health assistant helps you track and receive customized health recommendations.</p>
          </div>
          <div className="feature-item">
            <h3>Choose what you need</h3>
            <p>CareMate provides personalized insights: gain muscle mass or lose fat, maintain a balanced lifestyle.</p>
          </div>
          <div className="feature-item">
            <h3>Chat Your Way to Better Health!</h3>
            <p>BotMate, an AI-powered chatbot is available 24/7 to answer your health-related questions.</p>
          </div>
        </div>
      </section>

      <footer className="bmi-footer">
        <div className="footer-left">
          <h2>CareMate</h2>
        </div>
        <div className="footer-center">
          <ul>
            <li>Home</li>
            <li>BMI Calculator</li>
            <li>Best Exercises</li>
            <li>Meal Planning</li>
            <li>Personalized Care</li>
          </ul>
        </div>
        <div className="footer-right">
          <ul>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <p>©2030 CareMate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Bmi;
