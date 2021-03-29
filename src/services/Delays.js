import { getDelay, getChange_of_delay } from "../services/AggregationsServices";

export const getData = async (delay, vehicleType, trafficInterval) => {
  if (delay === "delay")
    return await getDelay(vehicleType,trafficInterval)
  else
    return await getChange_of_delay(vehicleType, trafficInterval)
};

