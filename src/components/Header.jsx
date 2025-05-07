import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>THAIS HULL</h1>
            <h2>Video Editor, Film Enthusiast, Storyteller</h2>
            <p className="bio">
                I am a highly organized and detail-oriented candidate with a strong passion for the film industry, particularly behind-the-scenes and the collaborative crew environment.
                Being an editor, I thrive in both team settings and working independently, always ensuring my workflow and deadlines are met with precision and creativity.
            </p>
            <nav>
                <NavLink to="/">PORTFOLIO</NavLink>
                <NavLink to="/resume">RESUME</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </nav>
        </header>
    );
}

export default Header;
