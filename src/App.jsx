import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Portfolio />} />
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
