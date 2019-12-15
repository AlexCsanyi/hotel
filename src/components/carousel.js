import React from "react";
import Carousel from "react-multi-carousel";
import "../../node_modules/react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";

export default function MyCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div className="carousel-card-container">
          <div className="image-container football"></div>
          <hr></hr>
          <h1>Sports</h1>
          <p>
            Heidelberg has a proud sporting history. From establishing the first
            ever rugby club in Germany, where the 4-minute mile barrier was
            broken and boasting 100 Olympic medals. You can guarantee there is
            always something to get your heart racing.
          </p>
          <Link className="discover-more-btn" to="/rooms">
            Find Out More
          </Link>
        </div>
        <div className="carousel-card-container">
          <div className="image-container stage"></div>
          <hr></hr>
          <h1>Stage</h1>
          <p>
            As noted by the Oxford dictionary the stage is "a raised floor or
            platform, typically in a theatre, on which actors, entertainers, or
            speakers perform." Be entertained, learn and embrace the immediacy.
          </p>
          <Link className="discover-more-btn" to="/rooms">
            Find Out More
          </Link>
        </div>
        <div className="carousel-card-container">
          <div className="image-container music"></div>
          <hr></hr>
          <h1>Music</h1>
          <p>
            Where three days of peace and music was established. Music runs
            through the veins of Heidelberg. It's a city where new talent
            flourishes. Click find out more to see our top picks.
          </p>
          <Link className="discover-more-btn" to="/rooms">
            Find Out More
          </Link>
        </div>
      </Carousel>
    </div>
  );
}
