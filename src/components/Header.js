import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';

function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

  return (
    <Router>
     <nav className="navbar navbar-expand-lg navbar-light bg-light m-4 rounded shadow">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="{isMenuOpen}"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/porfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Header;
