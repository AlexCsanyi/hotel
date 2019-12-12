import React from "react";
import Title from "./title";
import MyCarousel from "./carousel";

export default function Description() {
  return (
    <div className="things-to-do">
      <div className="things-to-do-inner">
        <h4>EXPERIENCE HEIDELBERG™</h4>
        <Title title="Welcome to The Heidelberg House®"></Title>
        <p>
          You’ll find The Heidelberg House® on the banks of the River Neckar.
          Here, with us, you can enjoy a slice of the south-west, German
          countryside with fresh air and plenty of space. Take time to indulge
          in the abundance of nature and history that you’ll discover when you
          stay at our riverside hotel.
        </p>
        <p>
          Seize the day with a stroll along the riverbank to the historic city
          of Heidelberg, explore our perfectly groomed lawns or garden – with
          its unique quirks and oddities.
        </p>
        <p>
          No matter what brings you to our door, whether it be a work trip or a
          weekend away, we are here to play host and make sure you have
          everything you need.
        </p>
        <p>It’s time to eat, sleep and everything in between.</p>
        <h3>What's on</h3>
        <MyCarousel></MyCarousel>
      </div>
    </div>
  );
}
