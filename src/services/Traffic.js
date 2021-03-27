import { getTraffic_queries } from "../services/AggregationsServices";

const dataKeyToService = {
  res15min: getTraffic_queries,
  res1hour: getTraffic_queries,
  res3hours: getTraffic_queries,
  res1418: getTraffic_queries,
  res1day: getTraffic_queries,
  res1week: getTraffic_queries,
  res1month: getTraffic_queries,
  res59: getTraffic_queries,
};

export const getData = async (values) => {
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
  console.log(ret)

  return ret;
};
