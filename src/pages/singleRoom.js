import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/styledHero";

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
      price,
      size,
      capacity,
      breakfast,
      extras,
      pets,
      images
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <React.Fragment>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link className="btn-primary" to="/rooms">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => (
              <img src={item} key={index} alt="bedroom"></img>
            ))}
          </div>
          <div className="single-room-info">
            <article className="description">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>price: £{price}</h6>
              <h6>size: {size}SqFt</h6>
              <h6>
                max capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}
