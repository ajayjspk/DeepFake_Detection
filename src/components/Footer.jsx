import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-media">
          <a href="https://www.facebook.com/help/668969529866328" target="_blank" rel="noreferrer" className="social-link">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://linktr.ee/blog/how-to-find-your-twitter-url/" target="_blank" rel="noreferrer" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://help.instagram.com/372819389498306" target="_blank" rel="noreferrer" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
       
      </div>
      <div className="address">
          <p>123 Main Street, Anytown, CA 12345</p>
        </div>
      <div className="copyright">
        <p>&copy; 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
