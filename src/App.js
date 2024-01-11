import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import About from './About.jsx'
import Home from './Home.jsx'
import Landing from './Landing.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx';
import Arts_Designs from './ArtsDesigns.jsx'

import './App.css'

const App = () => (
  <div class="App-header">

    <div class="Button-Row">
      <Link to="/">
        <Button variant="primary">
          Home
        </Button>{' '}
      </Link>
      <Link to="/about">
        <Button variant="primary">
          About
        </Button>{' '}
      </Link>
      <Link to="/projects">
        <Button variant="primary">
          Projects
        </Button>{' '}
      </Link>
      <Link to="/arts-designs">
        <Button variant="primary">
          arts-designs
        </Button>{' '}
      </Link>
      <Link to="/contact">
        <Button variant="primary">
          Contact
        </Button>{' '}
      </Link>
    </div>

    <Routes>
      <Route path="/" element={<Landing />}></ Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/arts-designs' element={<Arts_Designs />}></Route>
    </Routes>
  </div>
);

export default App;
