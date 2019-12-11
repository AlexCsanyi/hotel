import React, { Component } from "react";
import Title from "./title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail></FaCocktail>,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, corrupti"
      },
      {
        icon: <FaHiking></FaHiking>,
        title: "Endless hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, corrupti"
      },
      {
        icon: <FaShuttleVan></FaShuttleVan>,
        title: "free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, corrupti"
      },
      {
        icon: <FaBeer></FaBeer>,
        title: "Crafted beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, corrupti"
      }
    ]
  };

  render() {
    return (
      <section id="services" className="services">
        <Title title="Services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
