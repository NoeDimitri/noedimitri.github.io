import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import About from './About.jsx'
import Home from './Home.jsx'

import './App.css'

const App = () => (
  <div>
    <Link to="/home">gaming</Link>
    <Routes>
      <Route path="/" element={<Home />}></ Route>
      <Route path='/about' element={<About />}></Route>
      <Route exact path='/home' element={<Home />}></Route>
    </Routes>
  </div>
);

export default App;
