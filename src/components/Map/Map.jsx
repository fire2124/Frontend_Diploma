import React from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import { GeoPoints } from "./GeoPoints";
import "leaflet/dist/leaflet.css";

const position = [48.99, 21.244];

const Map = ({ data }) => {
  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{maxHeight: `69vh`}}
      className="rounded-lg control mt-5"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {(data !== undefined) ?  <GeoPoints data={data} /> : null}    
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};
export default React.memo(Map);
