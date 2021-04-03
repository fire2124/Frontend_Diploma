import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { isOnStop, TimeOnStopsByCurrentBuss } from "./isOnStop";
import { functionData } from "./helper";
import styled from "styled-components";

const Text = styled.p`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
  margin-top: 20%;  
  max-width: 20%;
`;
const Text2 = styled.p`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
  margin-left: 45%;
`;

const style = {
  maxHeight: `55vh`,
  maxWidth: `110vh`,
};

export const MyPlot = (data) => {
  let objName = Object.values(data)[0].name;
  let values = Object.values(data)[0].features;
  let axisX, axisY;
  const barProps = {};
  if (objName === "isOnStop") {
    let result = isOnStop(values);
    let data = functionData(
      "Čas na zastávke v sekundách",
      result.x,
      result.y,
      result.color,
      result.color,
      1
    );
    barProps.data = data.result;
    barProps.options = data.options;
    axisX = "Dátum a čas výskytu na zastávkach";
    axisY = `Počet sekúnd strávených na zastávke`;
  } else if (objName === "TimeOnStopsByCurrentBuss") {
    let result = TimeOnStopsByCurrentBuss(values);
    let data = functionData(
      "Čas na zastávke v sekundách",
      result.plotX,
      result.plotY,
      result.plotColor,
      result.plotBorderColor,
      3
    );
    barProps.data = data.result;
    barProps.options = data.options;
    axisX = "Dátum a čas výskytu na zastávkach";
    axisY = "Počet sekúnd strávených na zastávke";
  }

  return (
    <div style={style}>
      <div className="flex justify-start">
        <Text>{axisY}</Text>
        <Bar {...barProps}  />
      </div>
      <Text2>{axisX}</Text2>
    </div>
  );
};
