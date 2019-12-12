import React, { Component } from "react";
import Title from "./title";
import { Link } from "react-router-dom";
import foodImg from "../images/food.jpg";
import meetingImg from "../images/meeting.jpg";
import bedImg from "../images/bed.jpg";
import dogImg from "../images/dog.jpg";

export default class Services extends Component {
  state = {
    services: [
      {
        title: "Treat your delegates",
        info:
          " If you need break-out areas, a garden for unique team building or simply extra coffee. We have got the space.",
        background: meetingImg
      },
      {
        title: "Snug as a bug",
        info:
          "Here, the priority is comfort. No matter what brings you here, get comfy, get cosy and just relax.",
        background: bedImg
      },
      {
        title: "Peckish?",
        info:
          "Our Chef knows his way with food. Pop over to the Conservatory for a culinary experience you’ll never forget.",
        background: foodImg
      },
      {
        title: "Your best friend",
        info:
          "Bring your fluffy friends along. There's plenty of space to run, jump and sniff. Let them explore our perfectly groomed lawns",
        background: dogImg
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
              <article
                style={{ background: `url(${item.background})` }}
                key={index}
                className="service"
              >
                <div className="inner">
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                  <Link className="discover-more-btn" to="/rooms">
                    Discover More
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
