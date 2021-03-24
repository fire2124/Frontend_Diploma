import React from "react";
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, Popup } from "leaflet";

const bus = new Icon({
  iconUrl: "../../images/markers/Bus.png",
  iconSize: [25, 25],
});
const sad = new Icon({
  iconUrl: "../../images/markers/Sad.png",
  iconSize: [25, 25],
});
const train = new Icon({
  iconUrl: "../../images/markers/train.png",
  iconSize: [25, 25],
});
const mhdStops = new Icon({
  iconUrl: "../../images/markers/busStop.png",
  iconSize: [25, 25],
});
const sadStops = new Icon({
  iconUrl: "../../images/markers/busStop.png",
  iconSize: [25, 25],
});
const trainStops = new Icon({
  iconUrl: "../../images/markers/trainStop.png",
  iconSize: [25, 25],
});

const getMapIcon = (type) => {
  switch (type) {
    case "mhdPresov":
      return bus;
    case "sadPresov":
      return sad;
    case "trains":
      return train;
    case "mhdStops":
      return mhdStops;
    case "sadStops":
      return sadStops;
    case "trainStops":
      return trainStops;
    default:
      break;
  }
};
 // case "traffic":
    //   return // is line or point // TODO: traffic

export const getMarkers = async (type, method) => {
  const data = await method();
  let markers = [];
  let i = 0
  data.map((obj) =>
    markers.push(
      <Marker
        key={++i}
        position={[obj.geometry.coordinates[1], obj.geometry.coordinates[0]]}
        type={type}
        icon={getMapIcon(type)}
      >
        <Popup>
            {obj.properties}
        </Popup>
      </Marker>
    )
  );
  return markers;
};
