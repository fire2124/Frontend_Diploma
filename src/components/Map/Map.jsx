import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = (data) => {
  console.log("map");
  console.log(data);
  const position = [48.99, 21.244];

  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ height: "95%", width: "150%" }}
      className="rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg "
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* {data.mhdPresov.map(e=>{
          console.log(e)
        })} */}
    </MapContainer>
  );
};
export default Map;
