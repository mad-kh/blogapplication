import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading ">Join Us</p>
            </section>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div class="footer-logo">
                        <Link to="/" className="social-logo link">
                            TABA3'NI...
                            <i className="fas fa-feather-alt"></i>
                        </Link>
                    </div>
                    <small className="website-rights link">Blog © 2021</small>
                    <div class="social-icons">
                        <Link
                            className="social-icon-link facebook link"
                            to="/"
                            // target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link
                            className="social-icon-link instagram link"
                            to="/"
                            // target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link
                            className="social-icon-link youtube link"
                            to="/"
                            // target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube" />
                        </Link>
                        <Link
                            className="social-icon-link twitter link"
                            to="/"
                            // target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter " />
                        </Link>
                        <Link
                            className="social-icon-link twitter link"
                            to="/"
                            // target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
