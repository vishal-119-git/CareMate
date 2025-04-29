import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exercise from './components/Exercise'
import Bmi from './components/Bmi'
import Chatbot from './components/Chatbot'
import Meal from './components/Meal'
import Home from './Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/exercises" element={<Exercise />} />
        <Route path="/meals" element={<Meal />} />
        <Route path="/personalized-care" element={<Chatbot />} />
      </Routes>
    </Router>
    {/* <Home/> */}
    {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router> */}
      {/* <Meal /> */}
      {/* <Exercise/> */}
      {/* <Bmi /> */}
      {/* <Chatbot /> */}
    </>
  )
}

export default App
