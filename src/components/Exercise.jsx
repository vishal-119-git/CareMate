import React, { useState } from 'react';
import '../assets/style/exercise.css'; // Include CSS specific to Exercise

const Exercise = () => {
  const [bmi, setBmi] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const getExerciseSuggestions = () => {
    // Call API or use a logic to suggest exercises based on BMI
    if (bmi < 18.5) {
      setSuggestions('Strength training, Yoga');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setSuggestions('Cardio, Strength training');
    } else if (bmi >= 25 && bmi <= 29.9) {
      setSuggestions('Cardio, Walking, Swimming');
    } else {
      setSuggestions('Low-impact exercises like walking or swimming');
    }
  };

  return (
    <div className="exercise-container">
      <h2>Exercise Suggestions</h2>
      <input
        type="number"
        placeholder="Enter your BMI"
        value={bmi}
        onChange={(e) => setBmi(e.target.value)}
      />
      <button onClick={getExerciseSuggestions}>Get Exercise Suggestions</button>

      {suggestions && (
        <div className="exercise-suggestions">
          <p>Suggested exercises: {suggestions}</p>
        </div>
      )}
    </div>
  );
};

export default Exercise;
