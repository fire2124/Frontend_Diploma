import React, { useState } from "react";
import Heatmap from "../components/map/Heatmap";
import { SidePanel } from "../components/SidePanel";
import { getData } from "../services/Traffic";
import { Card } from "../components/Card";
import { TrafficForm } from "../components/forms/TrafficForm";

const initState = {
  "15min": true,
  "1hour": null,
  "3hours": null,
  "14-18": null,
  "1day": null,
  "1week": null,
  "1month": null,
  "5-9": null,
};


const defaultTrafficInterval = "1month"

const Traffic_restrictions = () => {
  const [trafficInterval, setTrafficInterval] = useState(defaultTrafficInterval);
  const [trafficData, setTrafficData] = useState({});

  const handleDownload = async () => {
    const response = await getData(trafficInterval);
    console.log(response.features)
    // setTrafficInterval(response);
  };

  return (
    <div className="flex my-20 h-full">
      <SidePanel title={"Podrobnosti"} className="pr-2">
        <TrafficForm onChange={handleDownload} />
      </SidePanel>{" "}
      <Card className="mr-20 flex flex-grow">
        <div className="text_name py-5 px-5">Dopravné obmedzenia</div>
        <div className="map my-2">
          <Heatmap data={trafficData} />
        </div>

        {/* TODO: add a form for intervals */}
      </Card>
    </div>
  );
};

export default Traffic_restrictions;
