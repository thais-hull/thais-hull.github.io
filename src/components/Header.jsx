import { NavLink } from "react-router-dom";

const Header = ({ menuOpen, setMenuOpen, menuClose }) => {
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <header>
            <span aria-label="Menu" id="menu-icon" onClick={toggleMenu} className={menuOpen ? "open" : ""}>&#9776;</span>
            <h1>THAIS HULL</h1>
            <h2>Video Editor, Film Enthusiast, Storyteller</h2>
            <p className="bio">
                I am a highly organized and detail-oriented candidate with a strong passion for the film industry, particularly behind-the-scenes and the collaborative crew environment.
                Being an editor, I thrive in both team settings and working independently, always ensuring my workflow and deadlines are met with precision and creativity.
            </p>
            <nav id="menu" className={menuOpen ? "open" : ""} aria-label="Main navigation">
                <NavLink to="/" onClick={menuClose}>DEMO REEL</NavLink>
                <NavLink to="/advertising" onClick={menuClose}>ADVERTISING REEL</NavLink>
                <NavLink to="/resume" onClick={menuClose}>RESUME</NavLink>
                <NavLink to="/about" onClick={menuClose}>ABOUT</NavLink>
                <NavLink to="/contact" onClick={menuClose}>CONTACT</NavLink>
            </nav>
        </header>
    );
}

export default Header;
