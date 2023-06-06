import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import facebook from '../../images/facebook.svg';
import github from '../../images/github.svg';
const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <nav className="footer__content">
        <div className="footer__links">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a
            href="https://practicum.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Practicum
          </a>
        </div>
        <div className="footer__icons">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on LinkedIn"
          >
            <img src={facebook} alt="facebook logo" className="footer__icons-logo" />
          </a>
          <a
            href="https://github.com/NuriyaAkh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on Github"
          >
            <img
              src={github}
              alt="github logo"
              className="footer__icons-logo footer__icons-logo-github"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
