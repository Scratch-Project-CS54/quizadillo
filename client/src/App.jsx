import React from 'react';
<<<<<<< HEAD
// import { useState } from 'react';
=======

>>>>>>> a43a3df (conflict done)
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
//import Profile from './components/profile/profile';
import Game from './components/game/game';
<<<<<<< HEAD
import Login from './components/login/login';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
=======
//import Login from './components/login/login';
>>>>>>> aaabb58 (game page done, pending for test)

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
<<<<<<< HEAD
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<Login />} />
=======
        <h1>Quizadillo</h1>
        <nav className='navigationbar'>
          {/*  <Link to='/login'>Login</Link>  */}
          {/* <Link to='/profile'>My Profile</Link> */}
          <Link to='/game'>Start Game</Link>
        </nav>
        <Routes>
          {/*<Route path='/profile' element={<Profile />} />*/}
          <Route path='/game' element={<Game />} />
          {/*<Route path='/login' element={<Login />} />*/}
>>>>>>> aaabb58 (game page done, pending for test)
        </Routes>
      </div>
    </Router>
  );
}

export default App;
