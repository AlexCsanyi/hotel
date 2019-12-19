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
          <div className="tabs-container">
            <div className="tabbed">
              <input
                type="radio"
                name="tabs"
                id="tab-nav-1"
                defaultChecked
              ></input>
              <label htmlFor="tab-nav-1">Details</label>
              <input type="radio" name="tabs" id="tab-nav-2"></input>
              <label htmlFor="tab-nav-2">Info</label>
              <input type="radio" name="tabs" id="tab-nav-3"></input>
              <label htmlFor="tab-nav-3">Extras</label>
              <div className="tabs">
                <div>
                  <h2 className="tabs-title">Details</h2>
                  <p>{description}</p>
                </div>
                <div>
                  <h2 className="tabs-title">Info</h2>
                  <p>price: £{price}</p>
                  <p>size: {size}SqFt</p>
                  <p>
                    max capacity:{" "}
                    {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                  </p>
                  <p>{pets ? "pets allowed" : "no pets allowed"}</p>
                  <p>{breakfast && "free breakfast included"}</p>
                </div>
                <div>
                  <h2 className="tabs-title">Extras</h2>
                  <ul className="extras">
                    {extras.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
