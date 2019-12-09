import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

const Rooms = () => {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer></RoomContainer>
    </React.Fragment>
  );
};

export default Rooms;
