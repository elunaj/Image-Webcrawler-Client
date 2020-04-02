import React from 'react';
import Grid from '@material-ui/core/Grid';
import Github from '../Images/github.svg';
import LinkedIn from '../Images/linkedin.svg';
import "./Footer.css";

const Footer = () => (
  <footer className="Footer">
    <a 
          href="https://github.com/elunaj/image-webcrawler-server" 
          target="_blank"
          rel="noopener noreferrer"
          >
            <img 
              src={Github} 
              height="50" 
              width="50"
              alt="Github" />
        </a>
        <a  
          href="https://www.linkedin.com/in/eliasluna23/" 
          target="_blank"
          rel="noopener noreferrer"
          >
            <img 
              src={LinkedIn} 
              height="50" 
              width="50" 
              alt="LinkedIn"/>
        </a>

  </footer>
);

export default Footer;
