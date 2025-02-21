import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import BackgroundCollage from './components/BackgroundCollage';
import Search from './pages/Search';
import Library from './pages/Library';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/search" element={<Search />} />
      <Route path="/library" element={<Library />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
  )
}

export default App;
