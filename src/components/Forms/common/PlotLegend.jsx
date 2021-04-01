import React from "react";

import styled from "styled-components";


const getCalculateStats = (data) => {
    let meanValue, medianValue, rozptyl, std, max, min;
    let values = Object.values(data)[0].features;
    let array = [];
  
    if (values !== undefined && values) {
      values.map((e) => {
        array.push(e.properties.seconds);
      });
      max = Math.max.apply(Math, array);
      min = Math.min.apply(Math, array);
      meanValue = round(mean(array),2);
      medianValue = round(median(array), 2);
      rozptyl = round(variance(array), 2);
      std = round(sqrt(rozptyl), 2);
      return [
        [`Priemer:`, meanValue],
        [`Medián: `, medianValue],
        [`Rozptyl:`, rozptyl],
        [`Odchýlka:`, std],
        [`Maximum:`, max],
        [`Minimum:`, min],
      ]
    }
    return []
  }

const PlotLegend = (data) => {
    getCalculateStats(data)
    return null //<StatLegend stats={getCalculateStats(data)} />
}

export default React.memo(PlotLegend)