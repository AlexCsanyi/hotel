import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { GiFootprint } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 49.409,
    longitude: 8.6733,
    zoom: 14,
    width: "100%",
    height: "500px"
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
    ],
    city: [
      {
        id: "AA2",
        name: "Body Worlds Museum",
        latitude: 49.408412,
        longitude: 8.689417,
        description:
          "When do we feel happiness? What happens to our body? Why can't we keep it forever? Plastinator Dr. Gunther von Hagens and curator Dr. Angelina Whalley pursue these and other questions in the newly designed BODY WORLDS museum in Heidelberg."
      },
      {
        id: "AA3",
        name: "Sammlung Prinzhorn",
        latitude: 49.410087,
        longitude: 8.690319,
        description:
          "Elegant museum featuring an array of art by inmates at psychiatric institutions from 1840 to 1945."
      },
      {
        id: "AA4",
        name: "Heidelberg Zoo",
        latitude: 49.415194,
        longitude: 8.664697,
        description:
          "Animal park with enclosures for global species including elephants, tigers, gorillas & sea lions."
      }
    ]
  };

  const [selectedMarker, setSelectedMarker] = useState(null);

  const [defaultMap, updateMap] = useState(true);

  return (
    <React.Fragment>
      <div className="map-nav">
        <nav>
          <p
            onClick={e => {
              e.preventDefault();
              updateMap(true);
            }}
            className={defaultMap ? "active-map" : ""}
          >
            On our doorstep
          </p>
          <h1>Out & About</h1>
          <p
            onClick={e => {
              e.preventDefault();
              updateMap(false);
            }}
            className={!defaultMap ? "active-map" : ""}
          >
            Into the city
          </p>
        </nav>
      </div>
      {defaultMap ? (
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
      ) : (
        <ReactMapGl
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={viewport => setViewport(viewport)}
        >
          {markerData.city.map(point => (
            <Marker
              key={point.id}
              latitude={point.latitude}
              longitude={point.longitude}
            >
              <FaMapMarkerAlt
                className="marker-btn"
                onClick={e => {
                  e.preventDefault();
                  setSelectedMarker(point);
                }}
              ></FaMapMarkerAlt>
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
      )}
    </React.Fragment>
  );
}
