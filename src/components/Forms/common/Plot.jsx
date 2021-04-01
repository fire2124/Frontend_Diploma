import React from "react";
import Plot from "react-plotly.js";
import { Bar } from "@reactchartjs/react-chart.js";
import StatLegend from '../../StatLegend'
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getTime = (day) =>{
  return `${getDay(day.getDay())} -> ${day.getDate()}:${day.getMonth()+1}:${day.getFullYear()}, ${day.getHours()}:${day.getMinutes()}`
}
const getRandomColor = (value) => {
  let c1 = getRandomInt(256);
  let c2 = getRandomInt(256);
  let c3 = getRandomInt(256);
  return `rgba(${c1}, ${c2}, ${c3}, ${value})`;
};

const getDay = (value) => {
  switch (value) {
    case 1:
      return "Pondelok"
    case 2:
      return "Utorok"
    case 3:
      return "Streda"
    case 4:
      return "Štvrtok"
    case 5:
      return "Piatok"
    case 6:
      return "Sobota"
    case 0:
      return "Nedeľa"
    default:
      break
  }
};


export const MyPlot = (data) => {
  let objName = Object.values(data)[0].name;
  let values = Object.values(data)[0].features;

  if (objName === "isOnStop") {
    return isOnStop(values);
  } else if (objName === "TimeOnStopsByCurrentBuss") {
    return TimeOnStopsByCurrentBuss(values);
  }
  return (
    <div>
      <Bar />
    </div>
    
  );
};

const isOnStop = (values) => {
  let x = [];
  let y = [];
  if (values !== undefined)
    values.map((e) => {
      let day = new Date(e.properties.Time)
      x.push(getTime(day));
      y.push(e.properties.seconds);
    });

  const data = {
    labels: x,
    datasets: [
      {
        label: "",
        data: y,
        backgroundColor: "#7E7BFF",
        borderColor: "#7E7BFF",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return  <div>
    <Bar data={data} options={options} />;
  </div>
  
  

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
        x.push(
          `${new Date(e.properties.Time).getHours()}:${new Date(
            e.properties.Time
          ).getMinutes()}`
        );
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
  const data = {
    labels: x,
    datasets: [
      {
        label: "",
        data: y,
        backgroundColor: array,
        borderColor: array2,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const stats = output.map(({stop,borderColor}) => {
    return [``, stop, borderColor]
  })


  return (
    <div>
      <Bar data={data} options={options} />
      <StatLegend stats={stats}/>
      {JSON.stringify(output, 2)}
    </div>
  );
};
