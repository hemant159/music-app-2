import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import BackgroundCollage from './components/BackgroundCollage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  </Router>
  )
}

export default App;
