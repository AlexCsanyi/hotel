import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { GiFootprint } from "react-icons/gi";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 49.409,
    longitude: 8.6733,
    zoom: 14,
    width: "100%",
    height: "500px",
    defaultMap: true
  });

  const markerData = {
    mark: [
      {
        id: "AA1",
        name: "The Heidelberg House",
        latitude: 49.409,
        longitude: 8.6733,
        description:
          "We are located in a busy area known for hotels, restaurants & cafes, plus Altes Hallenbad & art at Sammlung Prinzhorn."
      }
    ]
  };

  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <React.Fragment>
      <div className="map-nav"></div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => setViewport(viewport)}
      >
        {markerData.mark.map(point => (
          <Marker
            key={point.id}
            latitude={point.latitude}
            longitude={point.longitude}
          >
            <GiFootprint
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedMarker(point);
              }}
            ></GiFootprint>
          </Marker>
        ))}

        {selectedMarker ? (
          <Popup
            latitude={selectedMarker.latitude}
            longitude={selectedMarker.longitude}
            onClose={() => setSelectedMarker(null)}
          >
            <div className="marker-popup">
              <h4>{selectedMarker.name}</h4>
              <p>{selectedMarker.description}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGl>
    </React.Fragment>
  );
}
