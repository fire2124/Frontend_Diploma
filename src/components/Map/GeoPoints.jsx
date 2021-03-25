import React from "react";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
const url = "../../img/"
const iconSize = [25, 25]

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

const getMapIcon = (type) => {
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
  const keys = Object.keys(data).filter(v => v !== 'traffic')
  //console.log(keys)
  const points = keys.reduce((acc, currentVal) => {
    if( data[currentVal] !== null ) {
      acc = acc.concat(data[currentVal])
    }
    return acc
  }, [])

  
  return (
    points.map((obj, i) => {
      if(obj.geometry !== undefined && obj.properties){
        console.log(obj.properties.Type)
      //console.log([obj.geometry.coordinates[1], obj.geometry.coordinates[0]], obj)
        return <Marker
        key={i}
        position={[obj.geometry.coordinates[1], obj.geometry.coordinates[0]]}
        icon={getMapIcon(obj.properties.Type)}
        >
          
          <Popup>{obj.properties}</Popup>
        </Marker>
        }
      }
    ))
}

