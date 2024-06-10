import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/login';
import Apply from './components/Apply';
import Benefit from './components/benefit';
import Consider from './components/consider';
import Interview from './components/interview';
import Doc from './components/Doc';
import Doc2 from './components/Doc2';
import Doc3 from './components/Doc3';

function App() {
  return (
    <div className="App">
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/apply" element={<Apply />} /> 
        <Route path="/benefit" element={<Benefit />} /> 
        <Route path="/consider" element={<Consider/>} /> 
        <Route path="/interview" element={<Interview/>} /> 
        <Route path="/doc" element={<Doc/>} /> 
        <Route path="/doc2" element={<Doc2/>} /> 
        <Route path="/doc3" element={<Doc3/>} /> 
      </Routes>
    </Router>
  </div>
  );
}

export default App;