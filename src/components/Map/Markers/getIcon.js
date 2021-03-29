  
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
const url = "../../img/";
const iconSizeMhd = [19, 28];
const iconSizeSad = [21, 28];
const iconSizeTrain = [21, 23.5];
const iconSizeTraffic = [20.5, 28];

const mhd_stop = new Icon({
  iconUrl: `${url}/markers/mhd_stop.png`,
  iconSize: iconSizeMhd,
});

const sad_stop = new Icon({
  iconUrl: `${url}/markers/sad_stop.png`,
  iconSize: iconSizeSad,
});

const train_stop = new Icon({
  iconUrl: `${url}/markers/train_stop.png`,
  iconSize: iconSizeTrain,
});

const traffic = new Icon({
  iconUrl: `${url}/markers/traffic.png`,
  iconSize: iconSizeTraffic,
});

export const getMapIcon = (type) => {
  switch (type) {
    case "Traffic":
      return traffic;
    case "Stop_Mhd":
      return mhd_stop;
    case "Stop_Sad":
      return sad_stop;
    case "Stop_Train":
      return train_stop;
    default:
      break;
  }
};