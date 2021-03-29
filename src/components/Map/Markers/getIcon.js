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
const traffic2 = new Icon({
  iconUrl: `${url}/markers/traffic2.png`,
  iconSize: iconSizeTraffic,
});
const traffic3 = new Icon({
  iconUrl: `${url}/markers/traffic3.png`,
  iconSize: iconSizeTraffic,
});
const traffic4 = new Icon({
  iconUrl: `${url}/markers/traffic4.png`,
  iconSize: iconSizeTraffic,
});
const traffic5 = new Icon({
  iconUrl: `${url}/markers/traffic5.png`,
  iconSize: iconSizeTraffic,
});

export const getMapIcon = (type,obj) => {
  switch (type) {
    case "Traffic":
      return limeFunction(obj);
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

function limeFunction(obj) {
    if (
      obj.properties.count_of_obstacles !== null &&
      obj.properties.count_of_obstacles !== undefined
    ) {
      let obstacles = obj.properties.count_of_obstacles;
      switch (obstacles) {
        case 1:
          return traffic;
        case 2:
          return traffic2;
        case 3:
          return traffic3;
        case 4:
          return traffic4;
        case 5:
          return traffic5;
        default:
          break;
      }
    } else {
      return traffic;
    }
 
}
