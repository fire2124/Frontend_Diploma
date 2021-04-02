import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { isOnStop, TimeOnStopsByCurrentBuss } from "./isOnStop";
import { functionData } from "./helper";

export const MyPlot = (data) => {
  let objName = Object.values(data)[0].name;
  let values = Object.values(data)[0].features;

  if (objName === "isOnStop") {
    let result = isOnStop(values);
    let data = functionData(result.x, result.y, result.color, result.color, 1);
    return (
      <div>
        <Bar data={data.result} options={data.options} />;
      </div>
    );
  } else if (objName === "TimeOnStopsByCurrentBuss") {
    let result = TimeOnStopsByCurrentBuss(values);
    let data = functionData(result.x, result.y, result.array, result.array2, 2);
    return (
      <div>
        <Bar data={data.result} options={data.options} />
      </div>
    );
  } else
    return (
      <div>
        <Bar />
      </div>
    );
};
