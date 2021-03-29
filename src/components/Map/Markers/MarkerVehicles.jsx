import React from "react";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getIconVehicles } from "./getIconVehicles";

//TODO: if you want cluster https://www.npmjs.com/package/react-leaflet-cluster
export const returnMarkerVehicles = (obj, i)=>{
  return (
    <Marker
      key={i}
      position={[obj.geometry.coordinates[1], obj.geometry.coordinates[0]]}
      icon={getIconVehicles(obj.properties.Type,obj.properties.DELAY)}
    >
      <Popup>
        <div>
          <strong>Názov vozidla:</strong>
          {` ${obj.properties.ROUTE_NUMBER}`}
        </div>
        <div>
          <strong>Typ vozidla:</strong> {` ${obj.properties.Type}`}
        </div>
        <div>
          <strong>Meškanie:</strong>
          {` ${obj.properties.DELAY} sekúnd`}
        </div>
        {obj.properties.Current_Stop ? (
          <div>
            <strong>Aktuálna zastávka:</strong>
            {` ${obj.properties.Current_Stop}`}
          </div>
        ) : null}
        {/* train */}
        {obj.properties.From && obj.properties.Type === "Train" ? (
          <div>
            <strong>Odkiaľ:</strong>
            {` ${obj.properties.From}`}
          </div>
        ) : null}
        {obj.properties.To && obj.properties.Type === "Train" ? (
          <div>
            <strong>Kam:</strong>
            {` ${obj.properties.To}`}
          </div>
        ) : null}
        {/* sad */}
        {obj.properties.From && obj.properties.Type === "SAD" ? (
          <div>
            <strong>Odkiaľ:</strong>
            {` ${obj.properties.From}`}
          </div>
        ) : null}
        {obj.properties.To && obj.properties.Type === "SAD" ? (
          <div>
            <strong>Kam:</strong>
            {` ${obj.properties.To}`}
          </div>
        ) : null}
        {/* Mhd */}
        {obj.properties.To && obj.properties.Type === "MHD" ? (
          <div>
            <strong>Kam:</strong>
            {` ${obj.properties.To}`}
          </div>
        ) : null}
      </Popup>
    </Marker>
  );
}
