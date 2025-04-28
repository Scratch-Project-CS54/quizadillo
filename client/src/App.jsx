import React from 'react';
<<<<<<< HEAD
// import { useState } from 'react';
=======

>>>>>>> a43a3df (conflict done)
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Profile from './components/profile/profile';
import Game from './components/game/game';
import Login from './components/login/login';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
