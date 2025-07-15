import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-new">
            <div className="footer-brand-section">
                <img src="./img/logofooter.jpg" alt="Webmark Logo" className="footer-logo-img" />
                <h2>WEBMARK SOLUTION</h2>
                <p>Empowering your brand with tailored digital strategies that drive recognition, engagement, and lasting growth in the competitive market landscape.</p>

                <div className="footer-social-icons">
                    <Instagram size={20} />
                    <Facebook size={20} />
                    <Linkedin size={20} />
                </div>
            </div>

            <div className="footer-links-section">
                <div>
                    <h3>STORE POLICY</h3>
                    <ul>
                        <li>Search</li>
                        <li>Refund Policy</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Shipping Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
                <div>
                    <h3>COMPANY</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Blogs</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h3>CONTACT INFO</h3>
                    <ul>
                        <li><Phone size={16} /> +91 7573806834</li>
                        <li><Mail size={16} /> help.srsarees@gmail.com</li>
                        <li><MapPin size={16} /> Adajan Surat, Gujarat</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Developed By Webmark Solution</p>
            </div>
        </footer>
    );
};

export default Footer;
