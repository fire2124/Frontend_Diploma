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

export const getMapIcon = (type)=>{
  // TODO: different colors
  switch (type) {
    case "Traffic":
      return bus;
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
}