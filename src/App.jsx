import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Advertising from "./pages/Advertising";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Header from "./components/Header";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/advertising" element={<Advertising />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <footer>
                    <p>&copy; {new Date().getFullYear()} Thais Hull. All rights reserved.</p>
                </footer>
            </BrowserRouter>
        </>
    );
}

export default App;
