import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

export default function Map() {
  const [viewport] = useState({
    latitude: 49.3988,
    longitude: 8.6724,
    zoom: 10,
    width: "100%",
    height: "900px"
  });

  return <ReactMapGl {...viewport}>Markers</ReactMapGl>;
}
