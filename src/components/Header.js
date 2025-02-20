import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';
import githubLogo from '../resources/github.png';

const Header = () => {
    return (
        <header className="header">
            <h1 className="site-name">S Dev Aravind</h1>
            <nav className="nav-links">
                <Link to="home-section" smooth={true} duration={500}>
                    <h2>Home</h2>
                </Link>
                <Link to="about-section" smooth={true} duration={500}>
                    <h2>About</h2>
                </Link>
                <Link to="projects-section" smooth={true} duration={500}>
                    <h2>Projects</h2>
                </Link>
            </nav>
            <a href="https://github.com/devaravinds" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" className="github-logo" />
            </a>
        </header>
    );
};

export default Header;