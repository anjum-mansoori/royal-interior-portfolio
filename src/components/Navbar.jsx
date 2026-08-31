import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                ROYAL <span>INTERIOR</span>
            </div>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>
                    Home
                </a>

                <a href="#about" onClick={() => setMenuOpen(false)}>
                    About
                </a>

                <a href="#services" onClick={() => setMenuOpen(false)}>
                    Services
                </a>

                <a href="#gallery" onClick={() => setMenuOpen(false)}>
                    Projects
                </a>

                <a href="#contact" onClick={() => setMenuOpen(false)}>
                    Contact
                </a>
            </div>

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"  >
                {menuOpen ? "✕" : "☰"}
            </button>
        </nav>
    );
}

export default Navbar;