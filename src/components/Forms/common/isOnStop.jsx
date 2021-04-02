import { getTime, getRandomColor } from "./helper";

const isOnStop = (values) => {
  let x = [];
  let y = [];
  if (values !== undefined)
    values.map((e) => {
      let day = new Date(e.properties.Time);
      x.push(getTime(day));
      y.push(e.properties.seconds);
    });
  let color = "#7E7BFF";
  return { x, y, color };
};

const TimeOnStopsByCurrentBuss = (values) => {
  values = Object.values(values);
  let x = [];
  let y = [];
  let z = [];
  let output = [];
  let array = [],
    array2 = [];
  if (values !== undefined) {
    values.map((e) => {
      if (e.properties.Current_Stop !== undefined) {
        let day = new Date(e.properties.Time);
        x.push(getTime(day));
        y.push(e.properties.seconds);
        z.push(e.properties.Current_Stop);
      }
    });
    //Filter
    let filteredZ = z.reduce((acc, current) => {
      const x = acc.find((item) => item === current);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    filteredZ.map((e) => {
      let color = getRandomColor(0.2);
      let borderColor = getRandomColor(0.5);
      output.push({ stop: e, color: color, borderColor: borderColor });
    });
  }
  let print = [];
  z.map((e) => {
    output.map((x, i) => {
      if (e === x.stop) {
        array.push(x.color);
        array2.push(x.borderColor);
        print.push({ stop: e, color: x.color, borderColor: x.borderColor });
      }
    });
  });
  
  const stats = output.map(({ stop, borderColor, color }) => {
    return [``, stop, borderColor, color];
  });

  return { x, y, array,array2, stats, output };
};

export { TimeOnStopsByCurrentBuss, isOnStop };
