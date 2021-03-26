import React from "react";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
const url = "../../img/";
const iconSize = [25, 25];

const bus = new Icon({
  iconUrl: `${url}/markers/bus.png`,
  iconSize: iconSize,
});
const sad = new Icon({
  iconUrl: `${url}/markers/sad.png`,
  iconSize: iconSize,
});
const train = new Icon({
  iconUrl: `${url}/markers/train.png`,
  iconSize: iconSize,
});
const mhdStops = new Icon({
  iconUrl: `${url}/markers/bus_Stop.png`,
  iconSize: iconSize,
});
const sadStops = new Icon({
  iconUrl: `${url}/markers/bus_Stop.png`,
  iconSize: iconSize,
});
const trainStops = new Icon({
  iconUrl: `${url}/markers/train_Stop.png`,
  iconSize: iconSize,
});

const getMapIcon = (type) => { // TODO: different colors 
  switch (type) {
    case "MHD":
      return bus;
    case "SAD":
      return sad;
    case "Train":
      return train;
    case "Stop_Mhd":
      return mhdStops;
    case "Stop_Sad":
      return sadStops;
    case "Stop_Train":
      return trainStops;
    default:
      break;
  }
};
// case "Traffic":
//   return // is line or point // TODO: traffic

export const GeoPoints = ({ data }) => {
  const keys = Object.keys(data).filter((v) => v !== "traffic");
  //console.log(keys)
  const points = keys.reduce((acc, currentVal) => {
    if (data[currentVal] !== null) {
      acc = acc.concat(data[currentVal]);
    }
    return acc;
  }, []);

  return points.map((obj, i) => {
    if (obj.geometry !== undefined && obj.properties) {
      //console.log([obj.geometry.coordinates[1], obj.geometry.coordinates[0]], obj)
      switch (obj.properties.Type) {
        case "MHD":
          return returnMarker(obj, i);
        case "SAD":
          return returnMarker(obj, i);
        case "Train":
          return returnMarker(obj, i);
        case "Stop_Mhd":
          return returnMarkerStop(obj, i);
        case "Stop_Sad":
          return returnMarkerStop(obj, i);
        case "Stop_Train":
          return returnMarkerStop(obj, i);
        default:
          break;
      }
    }
  });
};

function returnMarker(obj, i) {
  return (
    <Marker
      key={i}
      position={[obj.geometry.coordinates[1], obj.geometry.coordinates[0]]}
      icon={getMapIcon(obj.properties.Type)}
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

function returnMarkerStop(obj, i) {
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
