import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = ({ siteName, links, githubUrl, githubLogo }) => {
    return (
        <header className="header">
            <h1 className="site-name">{siteName}</h1>
            <nav className="nav-links">
                {links.map((link, index) => (
                    <Link key={index} to={link.to} smooth={true} duration={500}>
                        <h2>{link.label}</h2>
                    </Link>
                ))}
            </nav>
            {githubUrl && githubLogo && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub" className="github-logo" />
                </a>
            )}
        </header>
    );
};

export default Header;