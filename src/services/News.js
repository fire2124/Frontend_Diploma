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


const dataKeyToService = {
  "mhdPresov": getMhdPoBusses,
  "sadPresov":  getSadPoBusses,
  "trains":  getTrains,
  "traffic": getTraffic,
  "mhdStops": getMhdStops,
  "sadStops": getSadStops,
  "trainStops": getTrainStops,
}

export const getData = async (values) => {
  const returnKeys = [];
  const serviceFuncs = [];
  
  for (const property in values) {
    if(values[property] === true) {
      returnKeys.push(property)
      serviceFuncs.push(dataKeyToService[property])
    }
  }

  const res = await Promise.all(serviceFuncs.map(f => f()))

  const ret = res.reduce((a, r, i) => {
    a[returnKeys[i]] = r
    return a
  }, {})

  Object.keys(dataKeyToService).forEach((key) => {
    if (ret.hasOwnProperty(key) === false) {
      ret[key] = null
    }
  })
  
  return ret
}
