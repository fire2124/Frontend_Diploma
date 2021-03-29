import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
const url = "../../img/";
const iconSizeMhd = [19, 28];
const iconSizeSad = [21, 28];
const iconSizeTrain = [21, 23.5];

const mhd_purple = new Icon({
  iconUrl: `${url}/markers/mhd_purple.png`,
  iconSize: iconSizeMhd,
});

const mhd_red = new Icon({
  iconUrl: `${url}/markers/mhd_red.png`,
  iconSize: iconSizeMhd,
});

const sad_purple = new Icon({
  iconUrl: `${url}/markers/sad_purple.png`,
  iconSize: iconSizeSad,
});

const sad_red = new Icon({
  iconUrl: `${url}/markers/sad_red.png`,
  iconSize: iconSizeSad,
});

const train_purple = new Icon({
  iconUrl: `${url}/markers/train_purple.png`,
  iconSize: iconSizeTrain,
});

const train_red = new Icon({
  iconUrl: `${url}/markers/train_red.png`,
  iconSize: iconSizeTrain,
});

export const getIconVehicles = (type, delay) => {
  if (delay > 0) {
    switch (type) {
      case "MHD":
        return mhd_purple;
      case "SAD":
        return sad_purple;
      case "Train":
        return train_purple;
      default:
        break;
    }
  } else {
    switch (type) {
      case "MHD":
        return mhd_red;
      case "SAD":
        return sad_red;
      case "Train":
        return train_red;
      default:
        break;
    }
  }
};
