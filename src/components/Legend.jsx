import React from "react";
import {  TimeOnStopsByCurrentBuss } from "./forms/common/isOnStop";
import LegendForm from "./forms/common/LegendForm";




const getLegend = (data) => {
  let result;
  if(data !== undefined && data){
    let objName = Object.values(data)[0].name;
    let values = Object.values(data)[0].features;
    if (objName === "TimeOnStopsByCurrentBuss") {
       result =  TimeOnStopsByCurrentBuss(values)
       result = result.output
       console.log(result)
       return result
    }
  }
  return []
}


export const Legend = React.memo((data) => <LegendForm stats={getLegend(data)} />)