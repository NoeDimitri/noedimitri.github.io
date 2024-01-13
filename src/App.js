import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import About from './About.jsx'
import Landing from './Landing.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx';
import ArtsDesigns from './ArtsDesigns.jsx'
import Experience from './Experience.jsx';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
    <div class="Button-Row">
      <Link to="/">
        <Button variant="primary" size="lg">
          Home
        </Button>
      </Link>
      <Link to="/about">
        <Button variant="primary" size="lg">
          About
        </Button>
      </Link>

      <Link to="/experience">
        <Button variant="primary" size="lg">
          Experience
        </Button>
      </Link>

      <Link to="/projects">
        <Button variant="primary" size="lg">
          Projects
        </Button>
      </Link>
      <Link to="/arts-designs">
        <Button variant="primary" size="lg">
          Art
        </Button>
      </Link>
      <Link to="/contact">
        <Button variant="primary" size="lg">
          Contact
        </Button>
      </Link>

    <Routes>
      <Route path="/" element={<Landing />}></ Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/experience' element={<Experience />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/arts-designs' element={<ArtsDesigns />}></Route>
    </Routes>
    </div>
);

export default App;
