import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const getRandomColor = (value) => {
  let c1 = getRandomInt(256);
  let c2 = getRandomInt(256);
  let c3 = getRandomInt(256);
  return `rgba(${c1}, ${c2}, ${c3}, ${value})`;
};

const VerticalBar = (values) => {
  values = Object.values(values)[0];
  let x = [];
  let y = [];
  let z = [];
  let output = []
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
      let color = getRandomColor(0.2)
      let borderColor = getRandomColor(0.5)
      output.push({stop:e, color: color, borderColor: borderColor })
    });
  }
  let print = []
  z.map(e=>{
    output.map((x,i)=>{
      if(e===x.stop){
        array.push(x.color);
        array2.push(x.borderColor);
        print.push({stop:e, color: x.color, borderColor: x.borderColor })
      }
    })
  })
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

  return (
    <div>
      <Bar data={data} options={options} />
      {JSON.stringify(print)}
    </div>
  );
};

export default VerticalBar;
