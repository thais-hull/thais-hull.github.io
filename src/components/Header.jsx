import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="header-top">
                <h1>THAIS HULL</h1>
                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    aria-label="Toggle navigation"
                >
                    ☰
                </button>
            </div>
            <h2>Video Editor, Film Enthusiast, Storyteller</h2>
            <p className="bio">
                I am a highly organized and detail-oriented candidate with a strong passion for the film industry, particularly behind-the-scenes and the collaborative crew environment.
                Being an editor, I thrive in both team settings and working independently, always ensuring my workflow and deadlines are met with precision and creativity.
            </p>

            <nav id="menu" className={isMenuOpen ? "open" : ""} aria-label="Main navigation">
                <NavLink to="/">DEMO REEL</NavLink>
                <NavLink to="/advertising">ADVERTISING REEL</NavLink>
                <NavLink to="/resume">RESUME</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </nav>
        </header>
    );
};

export default Header;
