import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AboutPage from './Components/About';
import VideoShow from './Components/VideoShow';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/videos/:videoId" element={<VideoShow />} />
      </Routes>
    </Router>
  );
}


export default App;
