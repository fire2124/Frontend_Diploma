import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const skater = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});


// const Marker = [{
//   key: "",
//   position: [],
//   type: "",
// }]

// TODO:
const getMapIcon = (type) => {
  // switch (type) {
  //   case value:
  //     return "vlacik"
  //     break;
  //   case value:
  //     return "karosa"
  //     break;
  //   default:
  //     break;
  // }
}



// TODO:
const getMiddlePosition = () => {

}


const MyMap = () => {
  const position = [48.99, 21.244];

  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* {crimes.map((crime) => (
        <Marker
          key={crime.id}
          position={[crime.location.latitude, crime.location.longitude]}
          icon = {skater}
        />
      ))} */}
    </MapContainer>
  );
}

export default MyMap;
