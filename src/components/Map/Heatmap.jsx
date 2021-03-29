import React from "react";
import { render } from "react-dom";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
//import HeatmapLayer from '../src/HeatmapLayer';
//import { addressPoints } from './realworld.10000.js';

const Heatmap = ({ data }) => {
  const position = [48.99, 21.244];
  //console.log(data)
  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ height: "95%", width: "150%" }}
      className="rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg control"
      scrollWheelZoom={true}
     >
    {/* //   <HeatmapLayer
    //         fitBoundsOnLoad
    //         fitBoundsOnUpdate
    //         points={data.features}
    //         longitudeExtractor={m => m[1]}
    //         latitudeExtractor={m => m[0]}
    //         intensityExtractor={m => parseFloat(m[2])} />  */}
       <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

export default Heatmap;
