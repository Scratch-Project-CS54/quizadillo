import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
//import Profile from './components/profile/profile';
import Game from './components/game/game';
import Login from './components/login/login';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <h1>Quizadillo</h1>
        <nav className='navigationbar'>
          <Link to='/login'>Login</Link>
          {/* <Link to='/profile'>My Profile</Link> */}
          <Link to='/game'>Start Game</Link>
        </nav>
        <Routes>
          {/*<Route path='/profile' element={<Profile />} />*/}
          <Route path='/game' element={<Game />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
