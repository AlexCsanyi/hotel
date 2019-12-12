import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h1>
                The Heidelberg House<sup>&copy;</sup>
              </h1>
              <p>Independent Hotel</p>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon"></FaAlignRight>
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li className="mobile-only">
              <Link to="/rooms">BOOK NOW</Link>
            </li>
          </ul>
          <AnimatedButton width='310px' title="BOOK NOW" to="/rooms"></AnimatedButton>
        </div>
      </nav>
    );
  }
}
