import { getMarkers } from "../components/Map/Marker";
import {
  getMhdPoBusses,
  getSadPoBusses,
  getTrains,
  getTraffic,
} from "../services/liveDataService";
import {
  getMhdStops,
  getSadStops,
  getTrainStops,
} from "../services/staticDataServices";



// INPUT je output z formu

// sql ?? indexdb
// if is in localstorage or expired
// global variable cache ?

// return and make markers for map -Done

export const getData = async () => {
  const markersMhd = await getMarkers("mhdPresov",getMhdPoBusses)
  const markersSad = await getMarkers("sadPresov",getSadPoBusses)
  const markersTrains = await getMarkers("trains",getTrains)
  const markersMhdStops = await getMarkers("mhdStops",getMhdStops)
  const markersSadStops = await getMarkers("sadStops",getSadStops)
  const markersTrainStops = await getMarkers("trainStops",getTrainStops)
  const markersTraffic = await getMarkers("taffic",getTraffic)

  return {
    markersMhd: markersMhd,
    markersSad: markersSad,
    markersTrains: markersTrains,
    markersMhdStops: markersMhdStops,
    markersSadStops: markersSadStops,
    markersTrainStops: markersTrainStops,
    markersTraffic: markersTraffic
  };
};
