import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { isOnStop, TimeOnStopsByCurrentBuss } from "./isOnStop";
import { functionData } from "./helper";


const style = {
  maxHeight: `60vh`,
  maxWidth: `120vh`
}

export const MyPlot = (data) => {
  let objName = Object.values(data)[0].name;
  let values = Object.values(data)[0].features;
  const barProps = {}

  if (objName === "isOnStop") {
    let result = isOnStop(values);
    let data = functionData(result.x, result.y, result.color, result.color, 1);
    barProps.data = data.result;
    barProps.options = data.options;
    
  } else if (objName === "TimeOnStopsByCurrentBuss") {
    let result = TimeOnStopsByCurrentBuss(values);
    let data = functionData(result.x, result.y, result.array, result.array2, 2);
    barProps.data = data.result;
    barProps.options = data.options;
  }
  return (
    <div style={style}>
      <Bar {...barProps} />;
    </div>
  );
};

