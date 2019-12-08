import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

  componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>Room not found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      size,
      capacity,
      breakfast,
      extras,
      pets,
      images
    } = room;
    return (
      <Hero hero="roomsHero">
        <Banner title={`${name} room`}>
          <Link className="btn-primary" to="/rooms">
            Back to rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}
