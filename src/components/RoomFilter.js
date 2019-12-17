import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Search Rooms"></Title>
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="type"
            id="type"
            value={type}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="capacity"
            id="capacity"
            value={capacity}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Room Price £{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control flat-slider"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            ></input>
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            ></input>
          </div>
        </div>
        <div className="form-group">
          <label>Extras</label>
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            ></input>
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            ></input>
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
