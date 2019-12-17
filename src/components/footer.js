import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footer-social-container">
          <a
            href="https://en-gb.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebookSquare></FaFacebookSquare>
          </a>
          <a
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram></FaInstagram>
          </a>
          <a
            href="https://uk.linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin></FaLinkedin>
          </a>
        </div>
        <h3>The Heidelberg House®</h3>
        <p>
          Vangerowstrasse 16 Heidelberg, 69115 Germany <br></br>
          +49 (0) 1865 3333 | heidelberg.reception@heidelberg.com
        </p>
      </footer>
      <p className="footer-privacy">
        © The Heidelberg House ltd. All rights reserved. Please see for more our
        Privacy Statement and Cookie Usage. Terms of use. Company Information.
      </p>
    </React.Fragment>
  );
}
