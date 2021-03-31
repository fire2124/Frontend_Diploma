import React from "react";
import { mean, variance, median, sqrt, round } from "mathjs";
import styled from "styled-components";

const SidePanelText = styled.p`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
`;

const SidePanelValues = styled.strong`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #7e7bff;
`;

export const Statistics = (data) => {
  let meanValue, medianValue, rozptyl, std, max, min;
  let values = Object.values(data)[0].features;
  let array = [];
  if (values !== undefined && values) {
    values.map((e) => {
      array.push(e.properties.seconds);
    });
    max = Math.max.apply(Math, array);
    min = Math.min.apply(Math, array);
    meanValue = mean(array);
    medianValue = round(median(array), 2);
    rozptyl = round(variance(array), 2);
    std = round(sqrt(rozptyl), 2);

    return (
      <div>
        <SidePanelText>Priemer: <SidePanelValues>{meanValue}</SidePanelValues></SidePanelText>
        <SidePanelText>Medián: <SidePanelValues> {medianValue}</SidePanelValues></SidePanelText>
        <SidePanelText>Rozptyl: <SidePanelValues>{rozptyl}</SidePanelValues> </SidePanelText>
        <SidePanelText>Odchýlka: <SidePanelValues>{std}</SidePanelValues> </SidePanelText>
        <SidePanelText>Maximum: <SidePanelValues>{max}</SidePanelValues> </SidePanelText>
        <SidePanelText>Minimum: <SidePanelValues>{min}</SidePanelValues> </SidePanelText>
      </div>
    );
  } else return "";
};

export default Statistics;
