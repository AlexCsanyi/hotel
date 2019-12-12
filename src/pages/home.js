import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import Services from "../components/services";
import FeaturedRooms from "../components/featuredRooms";
import Description from "../components/description";

const Home = () => {
  return (
    <React.Fragment>
      <Hero hero="defaultHero">
        <Banner title="Luxurious Rooms"></Banner>
      </Hero>
      <Services></Services>
      <Description></Description>
      <FeaturedRooms></FeaturedRooms>
    </React.Fragment>
  );
};

export default Home;
