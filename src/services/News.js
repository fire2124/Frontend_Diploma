//import { getMarkers } from "../components/Map/Marker";
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
  const mhdPresov = await getMhdPoBusses()
  const sadPresov = await getSadPoBusses()
  const trains = await getTrains()
  const mhdStops = await getMhdStops()
  const sadStops = await getSadStops()
  const trainStops = await getTrainStops()
  const traffic = await getTraffic()

  return {
    mhdPresov,
    sadPresov,
    trains,
    traffic,
    mhdStops,
    sadStops,
    trainStops,
  };
};
