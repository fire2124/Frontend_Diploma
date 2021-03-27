import { getDelay, getChange_of_delay } from "../services/AggregationsServices";

const dataKeyToService = {
  res15min: "15min",
  res1hour: "1hour",
  res3hours: "3hours",
  res1418: "14-18",
  res1day: "1day",
  res1week: "1week",
  res1month: "1month",
  res59: "5-9",
};

export const getData = async (values, type) => {
    //  nameOfFunction, type, (time - musi naraz stiahnut vsetky)
    //await getDelay({"MHD"},);
    // getChange_of_delay("MHD", "15min");
  const returnKeys = [];
  const serviceFuncs = [];

  for (const property in values) {
    if (values[property] === true) {
      returnKeys.push(property);
      serviceFuncs.push(dataKeyToService[property]);
    }
  }

  const res = await Promise.all(serviceFuncs.map((f) => f()));

  const ret = res.reduce((a, r, i) => {
    a[returnKeys[i]] = r;
    return a;
  }, {});

  Object.keys(dataKeyToService).forEach((key) => {
    if (ret.hasOwnProperty(key) === false) {
      ret[key] = null;
    }
  });

  return ret;
};
