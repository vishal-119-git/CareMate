# Overview
CareMate is a healthcare web application designed to help users understand their health status through BMI analysis, personalized exercise recommendations, meal planning, and an AI-powered health assistant.

The platform provides simple, easy-to-understand health insights and encourages users to build healthier daily habits through personalized guidance.

# Features
📊 BMI Analysis
Calculate Body Mass Index (BMI) using height and weight.
Instant BMI classification:
Underweight
Normal Weight
Overweight
Obese
Health recommendations based on BMI results.
🏃 Personalized Exercise Recommendations

Receive exercise suggestions tailored to your BMI category.

# Examples include:
Walking
Jogging
Cycling
Yoga
Strength Training
Stretching Exercises
🥗 Smart Meal Planning

Choose a meal plan based on your goal and dietary preference.

# Goals
Weight Loss
Weight Maintenance
Muscle Gain
Dietary Preferences
Vegan
Vegetarian
Eggetarian

A total of 9 personalized meal categories are available.

🤖 BotMate – AI Health Assistant

An integrated chatbot that provides:

General wellness guidance
Healthy lifestyle suggestions
Exercise recommendations
Meal planning support

# Technologies Used
Frontend
React.js
React Router
Axios
CSS
Backend
Node.js
Express.js
Database
MongoDB
Mongoose

# Project Structure
CareMate/
│
├── frontend/
│   ├── Home
│   ├── BMI Analysis
│   ├── Exercises
│   ├── Meal Planning
│   └── BotMate
│
├── backend/
│   ├── BMI API
│   ├── Exercise API
│   ├── Meal API
│   └── Chatbot API
│
└── MongoDB Database

#How It Works
Enter your height and weight.
CareMate calculates your BMI.
The system determines your BMI category.
Personalized exercise recommendations are generated.
Users can browse meal plans based on their goals and dietary preferences.
BotMate provides additional health and wellness assistance.

# Installation
Clone the Repository
git clone https://github.com/yourusername/caremate.git

# Navigate to the Project
cd caremate

# Install Frontend Dependencies
cd frontend
npm install

# Install Backend Dependencies
cd ../backend
npm install

# Configure Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=mongodb://localhost:27017/caremate

# Run Backend
npm start

# Run Frontend
npm run dev

# Screens
Home Page
BMI Analysis Page
Exercise Recommendation Page
Meal Planning Page
Personalized Care (BotMate)

# Future Enhancements
Integration with wearable devices
Progress tracking dashboard
AI-powered health predictions
Mobile application support
Multilingual chatbot
Personalized reminders and goal tracking

# Disclaimer
CareMate is developed for educational and informational purposes only. The recommendations provided by the application should not be considered professional medical advice. Always consult qualified healthcare professionals for medical concerns.

# Author
Vishal Kumar
Bachelor of Technology (Computer Science)
Guru Gobind Singh Indraprastha University
