import React from "react";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getMapIcon } from "./getIcon";

export const returnMarkerStop = (obj, i)=> {
  return (
    <Marker
      key={i}
      position={[obj.geometry.coordinates[1], obj.geometry.coordinates[0]]}
      icon={getMapIcon(obj.properties.Type)}
    >
      <Popup>
        <div>
          <strong>Typ zastávky:</strong>
          {` ${obj.properties.Type}`}
        </div>
        {obj.properties.Type === "Stop_Train" ? (
          <div>
            <strong>Názov zastávky:</strong>
            {` ${obj.properties.description}`}
          </div>
        ) : (
          <div>
            <strong>Názov zastávky:</strong>
            {` ${obj.properties.name}`}
          </div>
        )}
      </Popup>
    </Marker>
  );
}
