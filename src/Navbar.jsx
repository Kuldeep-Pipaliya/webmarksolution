import React, { useState } from "react";
import { Link } from "react-router-dom";
// Remove unused imports if not used
import { ChevronDown, Globe, Search } from 'lucide-react';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src="./img/logo.jpg" alt="Logo" className="navbar-logo" />
                </Link>

                <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <Link to="/" className="navbar-item" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link to="/about" className="navbar-item" onClick={() => setMenuOpen(false)}>
                        About Us
                    </Link>
                    <Link to="/Pricingplans" className="navbar-item" onClick={() => setMenuOpen(false)}>
                        Pricing
                    </Link>
                    <Link to="/Contactus" className="navbar-item" onClick={() => setMenuOpen(false)}>
                        Contact Us
                    </Link>
                </div>
            </div>

            <div className="navbar-right">
                <div className="navbar-item1">Sales: +91 90812 64882</div>

                {/* Toggle button for mobile */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    {menuOpen ? <X /> : <Menu />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
