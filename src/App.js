import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Doctor from "./pages/Doctor";
import Navbars from "./components/Navbars";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";


function App() {
    return (
        <Router>
            <Navbars />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doctors" element={<Doctor />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>
        </Router>
    );
}

export default App;
