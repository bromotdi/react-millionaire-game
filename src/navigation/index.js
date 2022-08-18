import * as React from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from '../view/screens/HomeScreen'
import QuizScreen from '../view/screens/QuizScreen'
import FinalScreen from '../view/screens/FinalScreen'

const Navigation = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/quiz" element={<QuizScreen />} />
        <Route path="/final" element={<FinalScreen />} />
      </Routes>
    </div>
  );
}

export default Navigation
