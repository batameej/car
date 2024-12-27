import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure this import is included

import Login from './components/Login';
import Signup from './components/Signup';
import CarPrediction from './components/CarPrediction';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/predict" element={<CarPrediction />} />
      </Routes>
    </div>
  );
};

export default App;
