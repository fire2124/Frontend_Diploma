import React from "react";
import { Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getMapIcon } from "./getIcon";

export const returnMarkerTraffic = (obj, i) => {
  if (obj.geometry.type === "Point") {
    return (
      <Marker
        key={i}
        position={[obj.geometry.coordinates[0], obj.geometry.coordinates[1]]}
        icon={getMapIcon(obj.properties.Type,obj)}
      >
        <Popup>
          <div>
            <strong>Typ obmedzenia:</strong>
            {` ${obj.properties.category_Name}`}
          </div>
          <div>
            <strong>Kraj:</strong>
            {` ${obj.properties.region_name}`}
          </div>
          <div>
            <strong>Okres:</strong>
            {` ${obj.properties.district_Name}`}
          </div>
          <div>
            <strong>Názov:</strong>
            {` ${obj.properties.title}`}
          </div>
          <div>
            <strong>Popis:</strong>
            {` ${obj.properties.description}`}
          </div>
          <div>
            <strong>Status:</strong>
            {` ${obj.properties.status_Name}`}
          </div>
          <div>
            <strong>Meškanie:</strong>
            {` ${obj.properties.delaySeconds}`}
          </div>
        </Popup>
      </Marker>
    );
  } else if (obj.geometry.type === "LineString") {
    return (
      <Polyline
        key={i}
        pathOptions={limeFunction(obj)}
        positions={obj.geometry.coordinates}
      >
        <Popup>
          <div>
            <strong>Typ obmedzenia:</strong>
            {` ${obj.properties.category_Name}`}
          </div>
          <div>
            <strong>Kraj:</strong>
            {` ${obj.properties.region_name}`}
          </div>
          <div>
            <strong>Okres:</strong>
            {` ${obj.properties.district_Name}`}
          </div>
          <div>
            <strong>Názov:</strong>
            {` ${obj.properties.title}`}
          </div>
          <div>
            <strong>Popis:</strong>
            {` ${obj.properties.description}`}
          </div>
          <div>
            <strong>Status:</strong>
            {` ${obj.properties.status_Name}`}
          </div>
          <div>
            <strong>Meškanie:</strong>
            {` ${obj.properties.delaySeconds}`}
          </div>
        </Popup>
      </Polyline>
    );
  }
};

function limeFunction(obj) {
  let limeOptions;
  if (obj.properties.count_of_obstacles !== null || obj.properties.count_of_obstacles === undefined) {
    let obstacles = obj.properties.count_of_obstacles;
    switch (obstacles) {
      case 1:
        limeOptions = { color: "#6EB1FF" };
        break;
      case 2:
        limeOptions = { color: "#7BFF88" };
        break;
      case 3:
        limeOptions = { color: "#FCFF7B" };
        break;
      case 4:
        limeOptions = { color: "#FFC27B" };
        break;
      case 5:
        limeOptions = { color: "#FF7B7B" };
        break;
      default:
        break;
    }
  }
  else {
    limeOptions = { color: "#6EB1FF" };
  }
  return limeOptions;
}
