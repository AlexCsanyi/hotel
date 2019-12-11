import React from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";

export default function Hero({ children, hero }) {
  return (
    <header className={hero}>
      <div className="alt-nav">
        <nav>
          <ul>
            <li>
              <a href="#services">
                <p>Scroll to explore</p>
                <FaArrowAltCircleDown
                  style={{ color: "#f8b90d", marginLeft: "15px" }}
                ></FaArrowAltCircleDown>
              </a>
            </li>
            <li>
              <a href="#services">
                <p>Virtual Tour</p>
                <FaArrowAltCircleRight
                  style={{ color: "#f8b90d", marginLeft: "15px" }}
                ></FaArrowAltCircleRight>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </header>
  );
}

Hero.defaultProps = {
  hero: "defaultHero"
};
