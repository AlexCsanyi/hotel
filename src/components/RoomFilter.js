import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./title";
import { FaBed } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { IoMdResize, IoMdPricetag } from "react-icons/io";

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
          <FaBed className="filter-icon"></FaBed>
          <select
            onChange={handleChange}
            className="form-control select-css"
            name="type"
            id="type"
            value={type}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <MdPeople className="filter-icon"></MdPeople>
          <select
            onChange={handleChange}
            className="form-control select-css"
            name="capacity"
            id="capacity"
            value={capacity}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Room Price £{price}</label>
          <IoMdPricetag className="filter-icon"></IoMdPricetag>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <IoMdResize className="filter-icon"></IoMdResize>
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
