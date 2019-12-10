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
  return (
    <section className="filter-container">
      <Title title="Search Rooms"></Title>
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type"></label>
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
      </form>
    </section>
  );
}
