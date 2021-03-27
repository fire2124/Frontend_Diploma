import React from "react";
import { Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getMapIcon } from "./getIcon";

export const returnMarkerTraffic = (obj, i)=> {
    const limeOptions = { color: "purple" };
    if (obj.geometry.type === "Point") {
      return (
        <Marker
          key={i}
          position={[obj.geometry.coordinates[0], obj.geometry.coordinates[1]]}
          icon={getMapIcon(obj.properties.Type)}
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
          pathOptions={limeOptions}
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
  }
  