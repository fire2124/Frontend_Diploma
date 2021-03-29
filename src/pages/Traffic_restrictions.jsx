import React, { useState } from "react";
import MyMap from "../components/map/Map";

import Heatmap from "../components/map/Heatmap";
import { SidePanel } from "../components/SidePanel";
import { getData } from "../services/Traffic";
import { Card } from "../components/Card";
import { TrafficForm } from "../components/forms/TrafficForm";
import { TrafficIntervalForm } from "../components/forms/TrafficIntervalForm";


const Traffic_restrictions = () => {
  const [trafficData, setTrafficData] = useState({});

  const trafficIntervalFormChange = async (v) => {
    const res = await getData(v.interval);
    setTrafficData(res);
    //console.log(res.features);
  };

  return (
    <div className="flex my-20 h-full">
      <SidePanel title={"Podrobnosti"} className="pr-2">
        <TrafficForm />
      </SidePanel>{" "}
      <Card className="mr-20 flex flex-grow">
        <div className="text_name py-5 px-5">Dopravné obmedzenia</div>
        <div className="map my-2">
          {/*<Heatmap data={trafficData.features} />*/}
          <MyMap data={trafficData} />

        </div>
        <TrafficIntervalForm onChange={trafficIntervalFormChange} />
      </Card>
    </div>
  );
};

export default Traffic_restrictions;
