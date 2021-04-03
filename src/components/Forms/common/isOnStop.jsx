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

  if (values !== undefined) {
    values.map((e) => {
      // pre vsetky zisti den, cas, zastavku
      if (e.properties.Current_Stop !== undefined) {
        let day = new Date(e.properties.Time);
        x.push(getTime(day)); // den
        y.push(e.properties.seconds); // cas
        z.push(e.properties.Current_Stop); // zastavka
      }
    });
    //Filter pre jedinecne zastavky
    let filteredZ = z.reduce((acc, current) => {
      const x = acc.find((item) => item === current);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    filteredZ.map((e) => {
      // k jedinecnym zastavkam pridaj farbu a borderColor pre legendu
      let color = getRandomColor(0.8);
      let borderColor = getRandomColor(0.5);
      output.push({ stop: e, color: color, borderColor: borderColor });
    });
  }
  let print = [];
  let lenght = 0;
  z.map((e) => {
    // pre vsetky zastavky pridaj farby, a suradnice a vypis to do printu
    output.map((q, i) => {
      if (e === q.stop) {
        print.push({
          stop: e,
          color: q.color,
          borderColor: q.borderColor,
          x: x[lenght],
          y: y[lenght],
        });
      }
    });
    lenght = lenght + 1;
  });

  //Filter z printu do legendy
  let filteredOutput = print.reduce((acc, current) => {
    const x = acc.find((item) => item.stop === current.stop);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  let plotX = [];
  let plotY = [];
  let plotColor = [];
  let plotBorderColor = [];

  print.map((e) => {
    // z printu daj vsetko do [] pre plot
    plotX.push(e.x);
    plotY.push(e.y);
    plotColor.push(e.color);
    plotBorderColor.push(e.borderColor);
  });

  return { print, filteredOutput, plotX, plotY, plotColor, plotBorderColor };
};

export { TimeOnStopsByCurrentBuss, isOnStop };
