import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = () => {
        setMenuOpen(false); // close menu when any link is clicked
    };

    return (
        <header>
            <div className="header-top">
                <h1>THAIS HULL</h1>
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>
            <h2>Video Editor, Film Enthusiast, Storyteller</h2>
            <p className="bio">
                I am a highly organized and detail-oriented candidate with a strong passion for the film industry, particularly behind-the-scenes and the collaborative crew environment.
                Being an editor, I thrive in both team settings and working independently, always ensuring my workflow and deadlines are met with precision and creativity.
            </p>
            <nav id="menu" className={menuOpen ? "open" : ""} aria-label="Main navigation">
                <NavLink to="/" onClick={handleNavClick}>DEMO REEL</NavLink>
                <NavLink to="/advertising" onClick={handleNavClick}>ADVERTISING REEL</NavLink>
                <NavLink to="/resume" onClick={handleNavClick}>RESUME</NavLink>
                <NavLink to="/about" onClick={handleNavClick}>ABOUT</NavLink>
                <NavLink to="/contact" onClick={handleNavClick}>CONTACT</NavLink>
            </nav>
        </header>
    );
};

export default Header;
