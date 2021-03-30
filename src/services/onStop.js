import {
  getTimeOnCurrentStop,
  getTimeOnStopsByCurrentBus,
} from "../services/AggregationsServices";

export const getData = async (type, item, interval) => {
  if (type === "selectBus")
    return await getTimeOnStopsByCurrentBus(item, getTimeInterval(interval));
  else return await getTimeOnCurrentStop(item, getTimeInterval(interval));
};

function getTimeInterval(interval) {
    let obj ={}
  switch (interval) {
    case "15min":
        obj.week=0;
        obj.day=0;
        obj.hours=0;
        obj.minutes=15;
        obj.sec=0;
       return obj
    case "1hour":
        obj.week=0;
        obj.day=0;
        obj.hours=1;
        obj.minutes=0;
        obj.sec=0;
       return obj
    case "3hours":
        obj.week=0;
        obj.day=0;
        obj.hours=3;
        obj.minutes=0;
        obj.sec=0;
       return obj
    case "1day":
        obj.week=0;
        obj.day=1;
        obj.hours=0;
        obj.minutes=0;
        obj.sec=0;
       return obj
    case "1week":
        obj.week=1;
        obj.day=0;
        obj.hours=0;
        obj.minutes=0;
        obj.sec=0;
       return obj
    case "1month":
        obj.week=4;
        obj.day=0;
        obj.hours=0;
        obj.minutes=0;
        obj.sec=0;
       return obj
    default:
       break;
  }
}
