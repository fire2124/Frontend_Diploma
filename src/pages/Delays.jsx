import React, { useState } from "react";
import { SidePanel } from "../components/SidePanel";
import { DelayForm } from "../components/forms/DelayForm";
import { Card } from "../components/Card";
import Heatmap from "../components/map/Heatmap";
import { getData } from "../services/Delays";
import { TrafficIntervalForm } from "../components/forms/TrafficIntervalForm";

const Delays = () => {
  const [delay, setDelay] = useState(`delay`);
  const [vehicle, setVehicle] = useState(`MHD`);
  const [trafficInterval, setTrafficInterval] = useState(`15min`);
  const [data, setData] = useState({});

  const delayFormChange = async (form) => {
    setVehicle(form.vehicle);
    setDelay(form.delay);
    const res = await getData(form.delay, form.vehicle, trafficInterval);
    setData(res);
  };

  const trafficIntervalFormChange = async (v) => {
    setTrafficInterval(v.interval);
    const res = await getData(delay, vehicle, v.interval);
    setData(res);
  };

  return (
    <div className="flex my-20 h-full">
      <SidePanel
        //title={"Čo popisuje daná heatmapa?"} sekas mi
        className="pr-2"
      >
        <DelayForm onChange={delayFormChange} />
      </SidePanel>
      <Card className="mr-20 flex flex-grow">
        <div className="text_name py-5 px-5">Meškania / vytváranie meškaní</div>
        <div className="grid gap-2 h-48 ">
          <div className="map my-2">
          <Heatmap data={data.features} />
          </div>
          <div className=""> {/*tTop*/}
            <TrafficIntervalForm onChange={trafficIntervalFormChange} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Delays;
