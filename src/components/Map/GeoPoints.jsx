import "leaflet/dist/leaflet.css";
import { returnMarkerTraffic } from "./markers/MarkerTraffic";
import { returnMarkerVehicles } from "./markers/MarkerVehicles";
import { returnMarkerStop } from "./markers/MarkerStop";

export const GeoPoints = ({ data }) => {
  const keys = Object.keys(data);
  const points = keys.reduce((acc, currentVal) => {
    if (data[currentVal] !== null) {
      acc = acc.concat(data[currentVal]);
    }
    return acc;
  }, []);

  return points.map((obj, i) => {
    if (obj.geometry !== undefined && obj.properties) {
      switch (obj.properties.Type) {
        case "Traffic":
          return returnMarkerTraffic(obj, i);
        case "MHD":
          return returnMarkerVehicles(obj, i);
        case "SAD":
          return returnMarkerVehicles(obj, i);
        case "Train":
          return returnMarkerVehicles(obj, i);
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





