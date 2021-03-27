import React, { useState } from "react";
import { SidePanel } from "../components/SidePanel";
import { DelayForm } from "../components/forms/DelayForm";
import { Card } from "../components/Card";
import MapExample from "../components/map/Heatmap";
import { getData } from "../services/Delays";

const initState = {
  res15min: null,
  res1hour: null,
  res3hours: null,
  res1418: null,
  res1day: null,
  res1week: null,
  res1month: null,
  res59: null,
};


const Delays = () => {
  const [state, setState] = useState(initState);

  const handleDownload = async (values) => {
    const response = await getData(values);
    setState(response);
  };

  return (
    <div className="flex my-20 h-full">
    <SidePanel
        //title={"Čo popisuje daná heatmapa?"}
        className="pr-2"
      >
        <DelayForm onChange={handleDownload} />
      </SidePanel>
      <Card className="mr-20 flex flex-grow">
          <div className="text_name py-5 px-5">
             Meškania / vytváranie meškaní
          </div>
          <div className="map my-2">
            <MapExample data={state}/>
          </div>
      </Card>
    </div>
  );
};

export default Delays;
