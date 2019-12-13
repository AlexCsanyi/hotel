import React from "react";
import Carousel from "react-multi-carousel";
import "../../node_modules/react-multi-carousel/lib/styles.css";

export default function MyCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
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
        <div style={{ margin: "40px", height: "150px", background: "#000" }}>
          Item 1
        </div>
        <div style={{ margin: "40px", height: "150px", background: "#000" }}>
          Item 2
        </div>
        <div style={{ margin: "40px", height: "150px", background: "#000" }}>
          Item 3
        </div>
        <div style={{ margin: "40px", height: "150px", background: "#000" }}>
          Item 4
        </div>
      </Carousel>
    </div>
  );
}
