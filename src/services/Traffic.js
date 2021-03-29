import { getTraffic_queries } from "../services/AggregationsServices";


export const getData = async (param) => {
  return await getTraffic_queries(param)
};
